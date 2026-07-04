import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "novibe-map-v1";

export type MapState = {
  gotIt: string[];
  activityDates: string[]; // YYYY-MM-DD, unique, unsorted
  notes: string;
  reflections: Record<string, string>;
  reflectionOrder: string[]; // node ids, most-recently-edited first
};

const initialState: MapState = {
  gotIt: [],
  activityDates: [],
  notes: "",
  reflections: {},
  reflectionOrder: [],
};

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function isoOffset(d: Date, deltaDays: number): string {
  const nd = new Date(d);
  nd.setUTCDate(nd.getUTCDate() + deltaDays);
  return nd.toISOString().slice(0, 10);
}

function load(): MapState {
  if (typeof window === "undefined") return initialState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    return { ...initialState, ...JSON.parse(raw) };
  } catch {
    return initialState;
  }
}

/**
 * Engagement streak with 1 auto-freeze per rolling 7 days.
 * Walk back from today (or yesterday if today wasn't active).
 * Count consecutive active days; allow up to 1 gap-day per 7 days walked.
 * Two-in-a-row missed days always resets.
 */
function computeStreak(active: Set<string>): number {
  const now = new Date();
  let cursor = now;
  if (!active.has(isoOffset(cursor, 0))) {
    cursor = new Date(now);
    cursor.setUTCDate(cursor.getUTCDate() - 1);
    if (!active.has(isoOffset(cursor, 0))) return 0;
  }
  let streak = 0;
  let skips = 0;
  let daysWalked = 0;
  for (let i = 0; i < 400; i++) {
    const iso = isoOffset(cursor, 0);
    if (active.has(iso)) {
      streak++;
    } else {
      const prev = isoOffset(cursor, -1);
      if (!active.has(prev)) break; // 2 misses in a row
      const allowed = Math.floor(daysWalked / 7) + 1;
      if (skips + 1 > allowed) break;
      skips++;
    }
    cursor.setUTCDate(cursor.getUTCDate() - 1);
    daysWalked++;
  }
  return streak;
}

type Ctx = {
  state: MapState;
  hydrated: boolean;
  streak: number;
  isGot: (id: string) => boolean;
  toggleGot: (id: string) => void;
  saveNotes: (t: string) => void;
  saveReflection: (nodeId: string, t: string) => void;
  resetAll: () => void;
  weeklySummary: () => { nodesThisWeek: number; clustersThisWeek: number };
};

const MapContext = createContext<Ctx | null>(null);

export function MapStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<MapState>(initialState);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setState(load());
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* ignore */
    }
  }, [state, hydrated]);

  const markActiveToday = useCallback((s: MapState): MapState => {
    const t = today();
    if (s.activityDates.includes(t)) return s;
    return { ...s, activityDates: [...s.activityDates, t] };
  }, []);

  const toggleGot = useCallback(
    (id: string) => {
      setState((s) => {
        const has = s.gotIt.includes(id);
        if (has) {
          return { ...s, gotIt: s.gotIt.filter((x) => x !== id) };
        }
        const bumped = markActiveToday(s);
        return { ...bumped, gotIt: [...bumped.gotIt, id] };
      });
    },
    [markActiveToday],
  );

  const saveNotes = useCallback((t: string) => {
    setState((s) => ({ ...s, notes: t }));
  }, []);

  const saveReflection = useCallback((nodeId: string, t: string) => {
    setState((s) => {
      const trimmed = t;
      const nextReflections = { ...s.reflections };
      const withoutId = s.reflectionOrder.filter((x) => x !== nodeId);
      if (trimmed.trim().length === 0) {
        delete nextReflections[nodeId];
        return { ...s, reflections: nextReflections, reflectionOrder: withoutId };
      }
      nextReflections[nodeId] = trimmed;
      return {
        ...s,
        reflections: nextReflections,
        reflectionOrder: [nodeId, ...withoutId],
      };
    });
  }, []);

  const resetAll = useCallback(() => setState(initialState), []);

  const streak = useMemo(
    () => computeStreak(new Set(state.activityDates)),
    [state.activityDates],
  );

  const value = useMemo<Ctx>(
    () => ({
      state,
      hydrated,
      streak,
      isGot: (id) => state.gotIt.includes(id),
      toggleGot,
      saveNotes,
      saveReflection,
      resetAll,
      weeklySummary: () => {
        // Not derived here - callers can compute; keep here for convenience.
        // We can't know node→cluster without importing; move real logic to callers.
        return { nodesThisWeek: 0, clustersThisWeek: 0 };
      },
    }),
    [state, hydrated, streak, toggleGot, saveNotes, saveReflection, resetAll],
  );

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
}

export function useMapState() {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error("useMapState must be used inside MapStateProvider");
  return ctx;
}
