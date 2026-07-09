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

export type QuizAnswer = {
  selectedIndex: number;
  correct: boolean;
};

export type MapState = {
  gotIt: string[];
  activityDates: string[]; // YYYY-MM-DD, unique, unsorted
  notes: string;
  reflections: Record<string, string>;
  reflectionOrder: string[]; // node ids, most-recently-edited first
  quizAnswers: Record<string, QuizAnswer>; // node id -> last self-check answer, purely informational
};

const initialState: MapState = {
  gotIt: [],
  activityDates: [],
  notes: "",
  reflections: {},
  reflectionOrder: [],
  quizAnswers: {},
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

export type ImportResult = { ok: true } | { ok: false; error: string };

type Ctx = {
  state: MapState;
  hydrated: boolean;
  streak: number;
  isGot: (id: string) => boolean;
  toggleGot: (id: string) => void;
  saveNotes: (t: string) => void;
  saveReflection: (nodeId: string, t: string) => void;
  answerQuiz: (nodeId: string, selectedIndex: number, correct: boolean) => void;
  resetAll: () => void;
  exportState: () => string;
  importState: (raw: string) => ImportResult;
};

const BACKUP_VERSION = 1;

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === "string");
}

function isStringRecord(v: unknown): v is Record<string, string> {
  return (
    typeof v === "object" &&
    v !== null &&
    !Array.isArray(v) &&
    Object.values(v as Record<string, unknown>).every((x) => typeof x === "string")
  );
}

function isQuizAnswerRecord(v: unknown): v is Record<string, QuizAnswer> {
  if (typeof v !== "object" || v === null || Array.isArray(v)) return false;
  return Object.values(v as Record<string, unknown>).every(
    (x) =>
      typeof x === "object" &&
      x !== null &&
      typeof (x as QuizAnswer).selectedIndex === "number" &&
      typeof (x as QuizAnswer).correct === "boolean",
  );
}

function parseBackup(raw: string): MapState | null {
  let parsed: unknown;
  try {
    parsed = JSON.parse(raw);
  } catch {
    return null;
  }
  if (typeof parsed !== "object" || parsed === null) return null;
  // Accept either a raw MapState export or one wrapped with {version, state}.
  const candidate =
    "state" in (parsed as Record<string, unknown>)
      ? (parsed as Record<string, unknown>).state
      : parsed;
  if (typeof candidate !== "object" || candidate === null) return null;
  const c = candidate as Record<string, unknown>;
  if (!isStringArray(c.gotIt)) return null;
  if (!isStringArray(c.activityDates)) return null;
  if (typeof c.notes !== "string") return null;
  if (!isStringRecord(c.reflections)) return null;
  if (!isStringArray(c.reflectionOrder)) return null;
  // quizAnswers is newer than the original backup format - accept its absence
  // from older backups and default to empty rather than rejecting the import.
  if (c.quizAnswers !== undefined && !isQuizAnswerRecord(c.quizAnswers)) return null;
  return {
    gotIt: c.gotIt,
    activityDates: c.activityDates,
    notes: c.notes,
    reflections: c.reflections,
    reflectionOrder: c.reflectionOrder,
    quizAnswers: isQuizAnswerRecord(c.quizAnswers) ? c.quizAnswers : {},
  };
}

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

  // Purely informational self-check - never touches gotIt, streak, or activityDates.
  const answerQuiz = useCallback((nodeId: string, selectedIndex: number, correct: boolean) => {
    setState((s) => ({
      ...s,
      quizAnswers: { ...s.quizAnswers, [nodeId]: { selectedIndex, correct } },
    }));
  }, []);

  const resetAll = useCallback(() => setState(initialState), []);

  const exportState = useCallback(() => {
    return JSON.stringify(
      { version: BACKUP_VERSION, exportedAt: new Date().toISOString(), state },
      null,
      2,
    );
  }, [state]);

  const importState = useCallback((raw: string): ImportResult => {
    const parsed = parseBackup(raw);
    if (!parsed) {
      return { ok: false, error: "That file doesn't look like a Novibe backup." };
    }
    setState(parsed);
    return { ok: true };
  }, []);

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
      answerQuiz,
      resetAll,
      exportState,
      importState,
    }),
    [
      state,
      hydrated,
      streak,
      toggleGot,
      saveNotes,
      saveReflection,
      answerQuiz,
      resetAll,
      exportState,
      importState,
    ],
  );

  return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
}

export function useMapState() {
  const ctx = useContext(MapContext);
  if (!ctx) throw new Error("useMapState must be used inside MapStateProvider");
  return ctx;
}
