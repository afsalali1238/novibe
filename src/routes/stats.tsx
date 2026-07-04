import { createFileRoute } from "@tanstack/react-router";
import { Flame, RotateCcw, Trophy, Zap } from "lucide-react";
import { TOTAL_CHALLENGES, TOTAL_DAYS, WEEKS } from "../data/curriculum";
import { useCourseState } from "../hooks/useCourseState";
import { LEVELS, levelFor } from "../lib/levels";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Architect Stats — No-Code AI & Agentic Engineering" },
      {
        name: "description",
        content: "Track XP, streaks, level progress, and week-by-week completion.",
      },
      { property: "og:title", content: "Architect Stats" },
      {
        property: "og:description",
        content: "XP, streaks, and week-by-week progress on the Orchestrator's Blueprint.",
      },
    ],
  }),
  component: Stats,
});

function Stats() {
  const { state, resetAll } = useCourseState();
  const lvl = levelFor(state.xp);
  const daysDone = state.completedDays.length;
  const challengesDone = state.completedChallenges.length;

  return (
    <div>
      <header className="mb-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          // architect stats
        </div>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
          Your progress
        </h1>
      </header>

      <section className="mb-4 overflow-hidden rounded-xl border border-primary/40 bg-gradient-to-br from-primary/[0.12] via-secondary/[0.08] to-transparent p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-primary">
              Current level
            </div>
            <div className="mt-1 text-2xl font-semibold tracking-tight text-foreground">
              {lvl.name}
            </div>
            {lvl.next && (
              <div className="mt-1 font-mono text-[11px] text-muted-foreground">
                {lvl.xpToNext} XP to <span className="text-secondary">{lvl.next}</span>
              </div>
            )}
          </div>
          <Trophy className="h-6 w-6 text-secondary" />
        </div>
        <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-border/60">
          <div
            className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
            style={{ width: `${Math.round(lvl.progress * 100)}%` }}
          />
        </div>
      </section>

      <section className="mb-4 grid grid-cols-3 gap-2">
        <StatTile icon={<Zap className="h-4 w-4 text-primary" />} label="XP" value={state.xp} />
        <StatTile icon={<Flame className="h-4 w-4 text-warning" />} label="Streak" value={state.streak} suffix="d" />
        <StatTile icon={<Trophy className="h-4 w-4 text-accent" />} label="Challenges" value={`${challengesDone}/${TOTAL_CHALLENGES}`} />
      </section>

      <section className="mb-4 rounded-xl border border-border/70 bg-card/60 p-4">
        <div className="mb-3 flex items-baseline justify-between">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Weekly Completion
          </div>
          <div className="font-mono text-[11px] tabular-nums text-muted-foreground">
            {daysDone}/{TOTAL_DAYS} days
          </div>
        </div>
        <div className="space-y-3">
          {WEEKS.map((w) => {
            const done = w.days.filter((d) => state.completedDays.includes(d.id)).length;
            const pct = Math.round((done / w.days.length) * 100);
            const challenge = state.completedChallenges.includes(w.id);
            return (
              <div key={w.id}>
                <div className="mb-1 flex items-center justify-between gap-2 text-[12px]">
                  <span className="truncate text-foreground">
                    <span className="mr-2 font-mono text-muted-foreground">W{w.number}</span>
                    {w.title}
                  </span>
                  <span className={"font-mono tabular-nums " + (challenge ? "text-accent" : "text-muted-foreground")}>
                    {done}/{w.days.length}
                    {challenge && " ★"}
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-border/60">
                  <div
                    className={"h-full " + (challenge ? "bg-accent" : "bg-primary")}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-4 rounded-xl border border-border/70 bg-card/60 p-4">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Level Ladder
        </div>
        <ol className="space-y-1.5">
          {LEVELS.map((l, i) => {
            const reached = state.xp >= l.min;
            const current = i === lvl.index;
            return (
              <li
                key={l.name}
                className={
                  "flex items-center justify-between rounded-md border px-3 py-1.5 font-mono text-[12px] " +
                  (current
                    ? "border-primary/50 bg-primary/10 text-foreground"
                    : reached
                      ? "border-accent/30 bg-accent/[0.04] text-foreground"
                      : "border-border/60 text-muted-foreground")
                }
              >
                <span>{l.name}</span>
                <span className="tabular-nums">{l.min} XP</span>
              </li>
            );
          })}
        </ol>
      </section>

      <button
        type="button"
        onClick={() => {
          if (window.confirm("Reset all XP, streaks, drafts, and notes? This can't be undone.")) {
            resetAll();
          }
        }}
        className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-md border border-destructive/40 bg-destructive/[0.06] px-3 py-2 font-mono text-xs text-destructive hover:bg-destructive/15"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Reset all progress
      </button>
    </div>
  );
}

function StatTile({
  icon,
  label,
  value,
  suffix,
}: {
  icon: React.ReactNode;
  label: string;
  value: number | string;
  suffix?: string;
}) {
  return (
    <div className="rounded-lg border border-border/70 bg-card/60 p-3">
      <div className="flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {icon}
        {label}
      </div>
      <div className="mt-1 font-mono text-lg font-semibold tabular-nums text-foreground">
        {value}
        {suffix && <span className="ml-0.5 text-xs text-muted-foreground">{suffix}</span>}
      </div>
    </div>
  );
}