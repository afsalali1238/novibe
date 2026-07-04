import { Link } from "@tanstack/react-router";
import { Flame, Moon, Sun } from "lucide-react";
import { TOTAL_NODES } from "../../data/nodes";
import { useMapState } from "../../hooks/useMapState";
import { useTheme } from "../../hooks/useTheme";

export function TopBar() {
  const { state, streak, hydrated } = useMapState();
  const { theme, toggleTheme } = useTheme();
  const done = state.gotIt.length;
  const pct = hydrated ? Math.round((done / TOTAL_NODES) * 100) : 0;

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 pt-[max(env(safe-area-inset-top),0.25rem)] pb-2">
        <Link to="/" className="flex min-w-0 flex-1 items-center gap-2">
          <img
            src="/novibe-icon.png"
            alt="Novibe"
            width={32}
            height={32}
            className="h-8 w-8 rounded-md"
          />
          <div className="min-w-0">
            <div className="truncate text-[14px] font-semibold tracking-tight text-foreground">
              Novibe
            </div>
            <div className="truncate text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              the map
            </div>
          </div>
        </Link>

        {hydrated && (
          <>
            <div className="rounded-md border border-primary/30 bg-primary/[0.06] px-2 py-1 font-mono text-[11px] tabular-nums text-foreground">
              {done}/{TOTAL_NODES}
            </div>
            <div
              className="flex items-center gap-1 rounded-md border border-warning/40 bg-warning/10 px-2 py-1 font-mono text-[11px] text-warning"
              title="Engagement streak (1 free skip per 7 days)"
            >
              <Flame className="h-3.5 w-3.5" />
              <span className="tabular-nums text-foreground">{streak}</span>
            </div>
          </>
        )}
        <button
          type="button"
          onClick={toggleTheme}
          aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          title={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
          className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
        >
          {theme === "dark" ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
        </button>
      </div>

      <div className="h-[2px] w-full bg-border">
        <div
          className="h-full bg-primary transition-[width] duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
    </header>
  );
}
