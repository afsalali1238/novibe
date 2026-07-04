import { Link } from "@tanstack/react-router";
import { ChevronDown, Zap } from "lucide-react";
import { useState } from "react";
import type { Week } from "../../data/curriculum";
import { useCourseState } from "../../hooks/useCourseState";
import { DayRow } from "./DayRow";

export function WeekCard({ week, defaultOpen }: { week: Week; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const { state, isChallengeDone } = useCourseState();
  const doneCount = week.days.filter((d) => state.completedDays.includes(d.id)).length;
  const total = week.days.length;
  const pct = Math.round((doneCount / total) * 100);
  const challengeDone = isChallengeDone(week.id);

  return (
    <section className="overflow-hidden rounded-xl border border-border/70 bg-card/60">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-primary/[0.04]"
      >
        <div className="flex h-9 w-9 flex-none items-center justify-center rounded-md border border-primary/40 bg-primary/10 font-mono text-sm font-semibold text-primary">
          {week.number.toString().padStart(2, "0")}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-baseline gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Week {week.number}
            </span>
            <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
              {doneCount}/{total}
            </span>
          </div>
          <h2 className="truncate text-sm font-semibold text-foreground">{week.title}</h2>
          <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-border/60">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-[width] duration-500"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
        <ChevronDown
          className={"h-4 w-4 flex-none text-muted-foreground transition-transform " + (open ? "rotate-180" : "")}
        />
      </button>

      {open && (
        <div className="border-t border-border/70 px-4 pb-4 pt-3">
          <p className="mb-3 text-[12.5px] leading-relaxed text-muted-foreground">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-accent">Focus //</span>{" "}
            {week.focus}
          </p>
          <div className="space-y-2">
            {week.days.map((d, i) => (
              <DayRow key={d.id} day={d} index={i} />
            ))}
          </div>

          <Link
            to="/playground/$weekId"
            params={{ weekId: week.id }}
            className={
              "mt-4 flex items-center justify-between gap-2 rounded-lg border p-3 transition-colors " +
              (challengeDone
                ? "border-accent/50 bg-accent/[0.06] hover:bg-accent/10"
                : "border-secondary/50 bg-secondary/[0.08] hover:bg-secondary/15")
            }
          >
            <div className="flex items-center gap-2.5">
              <Zap className={"h-4 w-4 " + (challengeDone ? "text-accent" : "text-secondary")} />
              <div>
                <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                  Weekly Playground · +100 XP
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {challengeDone ? "Solved — revisit challenge" : "Open the Sandbox"}
                </div>
              </div>
            </div>
            <span className="font-mono text-xs text-muted-foreground">→</span>
          </Link>
        </div>
      )}
    </section>
  );
}