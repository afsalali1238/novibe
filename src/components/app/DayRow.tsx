import { Link } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import type { Day } from "../../data/curriculum";
import { useCourseState } from "../../hooks/useCourseState";

export function DayRow({ day, index }: { day: Day; index: number }) {
  const { isDayDone, isQuizDone, state } = useCourseState();
  const done = isDayDone(day.id);
  const quizDone = isQuizDone(day.id);
  const hasAttempt = !!state.dayLogs[day.id]?.result;

  return (
    <Link
      to="/day/$dayId"
      params={{ dayId: day.id }}
      className={
        "group flex items-start gap-3 rounded-lg border p-3 transition-colors " +
        (done
          ? "border-accent/40 bg-accent/5 hover:bg-accent/10"
          : "border-border bg-background hover:border-primary hover:bg-primary/5")
      }
    >
      <div
        aria-hidden
        className={
          "mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border font-mono text-[11px] " +
          (done
            ? "border-accent bg-accent text-accent-foreground"
            : "border-border bg-background text-muted-foreground")
        }
      >
        {done ? "\u2713" : index + 1}
      </div>

      <div className="min-w-0 flex-1">
        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Day {index + 1}
          </span>
          {quizDone && (
            <span className="rounded-sm bg-accent/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-accent">
              quiz
            </span>
          )}
          {hasAttempt && (
            <span className="rounded-sm bg-primary/15 px-1.5 py-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-primary">
              logged
            </span>
          )}
          {!done && (
            <span className="text-[10px] text-muted-foreground">+15 XP</span>
          )}
        </div>
        <div
          className={
            "mt-0.5 text-sm font-medium leading-snug " +
            (done ? "text-muted-foreground" : "text-foreground")
          }
        >
          {day.topic}
        </div>
        <p className="mt-1 line-clamp-2 text-[12.5px] leading-relaxed text-muted-foreground">
          {day.concept}
        </p>
      </div>

      <ChevronRight className="mt-1 h-4 w-4 flex-none text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary" />
    </Link>
  );
}