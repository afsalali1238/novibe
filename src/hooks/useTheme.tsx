import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const THEME_KEY = "novibe-theme"; // stored value: "light" | "dark". Absent = follow system.

type Theme = "light" | "dark";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyThemeClass(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
}

// Inline script string, injected into <head> before hydration so the correct
// theme applies before first paint - no flash of the wrong theme.
export const THEME_INIT_SCRIPT = `(function(){try{var s=localStorage.getItem(${JSON.stringify(
  THEME_KEY,
)});var d=s?s==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

type Ctx = {
  theme: Theme;
  isOverridden: boolean;
  toggleTheme: () => void;
  useSystemTheme: () => void;
};

const ThemeContext = createContext<Ctx | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Default matches the inline script's fallback (no override -> system),
  // then syncs to whatever the inline script actually applied on mount.
  const [theme, setTheme] = useState<Theme>("light");
  const [isOverridden, setIsOverridden] = useState(false);

  useEffect(() => {
    let stored: string | null = null;
    try {
      stored = window.localStorage.getItem(THEME_KEY);
    } catch {
      /* ignore */
    }
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
      setIsOverridden(true);
    } else {
      setTheme(getSystemTheme());
    }
  }, []);

  useEffect(() => {
    applyThemeClass(theme);
  }, [theme]);

  useEffect(() => {
    if (isOverridden) return;
    const mql = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => setTheme(mql.matches ? "dark" : "light");
    mql.addEventListener("change", handler);
    return () => mql.removeEventListener("change", handler);
  }, [isOverridden]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => {
      const next: Theme = t === "dark" ? "light" : "dark";
      try {
        window.localStorage.setItem(THEME_KEY, next);
      } catch {
        /* ignore */
      }
      return next;
    });
    setIsOverridden(true);
  }, []);

  const useSystemTheme = useCallback(() => {
    try {
      window.localStorage.removeItem(THEME_KEY);
    } catch {
      /* ignore */
    }
    setIsOverridden(false);
    setTheme(getSystemTheme());
  }, []);

  const value = useMemo<Ctx>(
    () => ({ theme, isOverridden, toggleTheme, useSystemTheme }),
    [theme, isOverridden, toggleTheme, useSystemTheme],
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}
