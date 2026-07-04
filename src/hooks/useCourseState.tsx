import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { XP_PER_CHALLENGE, XP_PER_DAY } from "../lib/levels";

const STORAGE_KEY = "noco-ai-course-v1";

export type CourseState = {
  xp: number;
  streak: number;
  lastActiveDate: string | null; // YYYY-MM-DD
  completedDays: string[];
  completedChallenges: string[];
  playgroundDrafts: Record<string, string>;
  globalNotes: string;
  dayLogs: Record<string, { tool: string; result: string }>;
  quizCompleted: string[]; // dayIds with quiz XP awarded
  quizAnswers: Record<string, number[]>; // dayId -> chosen option index per question
  completedTasks: string[]; // keys like `${dayId}#${index}`
  taskLogs: Record<string, { tool: string; result: string }>; // key `${dayId}#${index}`
};

const initialState: CourseState = {
  xp: 0,
  streak: 0,
  lastActiveDate: null,
  completedDays: [],
  completedChallenges: [],
  playgroundDrafts: {},
  globalNotes: "",
  dayLogs: {},
  quizCompleted: [],
  quizAnswers: {},
  completedTasks: [],
  taskLogs: {},
};

function today() {
  return new Date().toISOString().slice(0, 10);
}

function daysBetween(a: string, b: string) {
  const ms = Date.parse(b) - Date.parse(a);
  return Math.round(ms / 86_400_000);
}

function load(): CourseState {
  if (typeof window === "undefined") return initialState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return initialState;
    const parsed = JSON.parse(raw);
    return { ...initialState, ...parsed };
  } catch {
    return initialState;
  }
}

export type XpEvent = { id: number; delta: number };

type CourseContextValue = {
  state: CourseState;
  hydrated: boolean;
  xpEvents: XpEvent[];
  toggleDay: (id: string) => void;
  isDayDone: (id: string) => boolean;
  submitChallenge: (weekId: string) => { firstTime: boolean };
  isChallengeDone: (weekId: string) => boolean;
  saveDraft: (weekId: string, text: string) => void;
  saveNotes: (text: string) => void;
  resetAll: () => void;
  saveDayLog: (dayId: string, log: { tool: string; result: string }) => void;
  submitQuiz: (dayId: string, answers: number[], correctCount: number) => { firstTime: boolean; xpGained: number };
  isQuizDone: (dayId: string) => boolean;
  completeTask: (dayId: string, index: number, log: { tool: string; result: string }) => { firstTime: boolean; xpGained: number };
  isTaskDone: (dayId: string, index: number) => boolean;
};

const CourseContext = createContext<CourseContextValue | null>(null);

export function CourseStateProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<CourseState>(initialState);
  const [hydrated, setHydrated] = useState(false);
  const [xpEvents, setXpEvents] = useState<XpEvent[]>([]);
  const evtId = useRef(0);

  // Hydrate from localStorage + roll streak on first mount
  useEffect(() => {
    const loaded = load();
    const now = today();
    let nextStreak = loaded.streak;
    if (loaded.lastActiveDate) {
      const diff = daysBetween(loaded.lastActiveDate, now);
      if (diff > 1) nextStreak = 0; // broken
    }
    setState({ ...loaded, streak: nextStreak });
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* quota / private mode — ignore */
    }
  }, [state, hydrated]);

  const pushXp = useCallback((delta: number) => {
    if (!delta) return;
    const id = ++evtId.current;
    setXpEvents((prev) => [...prev, { id, delta }]);
    window.setTimeout(() => {
      setXpEvents((prev) => prev.filter((e) => e.id !== id));
    }, 1300);
  }, []);

  const bumpStreak = useCallback((s: CourseState): CourseState => {
    const now = today();
    if (s.lastActiveDate === now) return s;
    let streak = 1;
    if (s.lastActiveDate) {
      const diff = daysBetween(s.lastActiveDate, now);
      if (diff === 1) streak = s.streak + 1;
      else if (diff === 0) streak = s.streak;
    }
    return { ...s, streak, lastActiveDate: now };
  }, []);

  const toggleDay = useCallback(
    (id: string) => {
      setState((s) => {
        const done = s.completedDays.includes(id);
        if (done) {
          pushXp(-XP_PER_DAY);
          return {
            ...s,
            completedDays: s.completedDays.filter((x) => x !== id),
            xp: Math.max(0, s.xp - XP_PER_DAY),
          };
        }
        pushXp(XP_PER_DAY);
        const bumped = bumpStreak(s);
        return {
          ...bumped,
          completedDays: [...bumped.completedDays, id],
          xp: bumped.xp + XP_PER_DAY,
        };
      });
    },
    [bumpStreak, pushXp],
  );

  const submitChallenge = useCallback(
    (weekId: string) => {
      let firstTime = false;
      setState((s) => {
        if (s.completedChallenges.includes(weekId)) return s;
        firstTime = true;
        pushXp(XP_PER_CHALLENGE);
        const bumped = bumpStreak(s);
        return {
          ...bumped,
          completedChallenges: [...bumped.completedChallenges, weekId],
          xp: bumped.xp + XP_PER_CHALLENGE,
        };
      });
      return { firstTime };
    },
    [bumpStreak, pushXp],
  );

  const saveDraft = useCallback((weekId: string, text: string) => {
    setState((s) => ({
      ...s,
      playgroundDrafts: { ...s.playgroundDrafts, [weekId]: text },
    }));
  }, []);

  const saveNotes = useCallback((text: string) => {
    setState((s) => ({ ...s, globalNotes: text }));
  }, []);

  const resetAll = useCallback(() => {
    setState(initialState);
  }, []);

  const saveDayLog = useCallback((dayId: string, log: { tool: string; result: string }) => {
    setState((s) => ({
      ...s,
      dayLogs: { ...s.dayLogs, [dayId]: log },
    }));
  }, []);

  const completeTask = useCallback(
    (dayId: string, index: number, log: { tool: string; result: string }) => {
      const key = `${dayId}#${index}`;
      let firstTime = false;
      let xpGained = 0;
      setState((s) => {
        const already = s.completedTasks.includes(key);
        const nextLogs = { ...s.taskLogs, [key]: log };
        if (already) return { ...s, taskLogs: nextLogs };
        firstTime = true;
        xpGained = 5;
        pushXp(xpGained);
        const bumped = bumpStreak(s);
        return {
          ...bumped,
          taskLogs: nextLogs,
          completedTasks: [...bumped.completedTasks, key],
          xp: bumped.xp + xpGained,
        };
      });
      return { firstTime, xpGained };
    },
    [bumpStreak, pushXp],
  );

  const submitQuiz = useCallback(
    (dayId: string, answers: number[], correctCount: number) => {
      let firstTime = false;
      let xpGained = 0;
      setState((s) => {
        const already = s.quizCompleted.includes(dayId);
        const nextAnswers = { ...s.quizAnswers, [dayId]: answers };
        if (already) {
          return { ...s, quizAnswers: nextAnswers };
        }
        firstTime = true;
        // 5 XP per correct answer, first time only
        xpGained = correctCount * 5;
        if (xpGained) pushXp(xpGained);
        const bumped = bumpStreak(s);
        return {
          ...bumped,
          quizAnswers: nextAnswers,
          quizCompleted: [...bumped.quizCompleted, dayId],
          xp: bumped.xp + xpGained,
        };
      });
      return { firstTime, xpGained };
    },
    [bumpStreak, pushXp],
  );

  const value = useMemo<CourseContextValue>(
    () => ({
      state,
      hydrated,
      xpEvents,
      toggleDay,
      isDayDone: (id) => state.completedDays.includes(id),
      submitChallenge,
      isChallengeDone: (weekId) => state.completedChallenges.includes(weekId),
      saveDraft,
      saveNotes,
      resetAll,
      saveDayLog,
      submitQuiz,
      isQuizDone: (dayId) => state.quizCompleted.includes(dayId),
      completeTask,
      isTaskDone: (dayId, index) => state.completedTasks.includes(`${dayId}#${index}`),
    }),
    [state, hydrated, xpEvents, toggleDay, submitChallenge, saveDraft, saveNotes, resetAll, saveDayLog, submitQuiz, completeTask],
  );

  return <CourseContext.Provider value={value}>{children}</CourseContext.Provider>;
}

export function useCourseState() {
  const ctx = useContext(CourseContext);
  if (!ctx) throw new Error("useCourseState must be used inside CourseStateProvider");
  return ctx;
}