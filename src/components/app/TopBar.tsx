import { Flame, Terminal, Zap } from "lucide-react";
import { useCourseState } from "../../hooks/useCourseState";
import { levelFor } from "../../lib/levels";

export function TopBar() {
  const { state, xpEvents } = useCourseState();
  const lvl = levelFor(state.xp);

  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 pt-[max(env(safe-area-inset-top),0.25rem)] pb-2">
        <div className="flex min-w-0 flex-1 items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-md border border-primary/40 bg-primary/10 text-primary">
            <Terminal className="h-4 w-4" />
          </div>
          <div className="min-w-0">
            <div className="truncate font-mono text-[13px] font-semibold tracking-tight text-foreground">
              no-code<span className="text-primary">/</span>agentic
            </div>
            <div className="truncate text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
              {lvl.name}
            </div>
          </div>
        </div>

        <div className="relative flex items-center gap-1.5 rounded-md border border-secondary/40 bg-secondary/10 px-2 py-1 font-mono text-xs text-secondary">
          <Zap className="h-3.5 w-3.5" />
          <span className="tabular-nums text-foreground">{state.xp}</span>
          <span className="text-muted-foreground">XP</span>
          <div className="pointer-events-none absolute -top-1 right-1 flex flex-col items-end">
            {xpEvents.map((e) => (
              <span
                key={e.id}
                className="xp-float font-mono text-[11px] font-semibold text-accent"
              >
                {e.delta > 0 ? `+${e.delta}` : e.delta} XP
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 rounded-md border border-warning/40 bg-warning/10 px-2 py-1 font-mono text-xs text-warning">
          <Flame className="h-3.5 w-3.5" />
          <span className="tabular-nums text-foreground">{state.streak}</span>
        </div>
      </div>

      {/* Level progress hairline */}
      <div className="h-[2px] w-full bg-border/60">
        <div
          className="h-full bg-gradient-to-r from-primary via-secondary to-accent transition-[width] duration-500"
          style={{ width: `${Math.round(lvl.progress * 100)}%` }}
        />
      </div>
    </header>
  );
}