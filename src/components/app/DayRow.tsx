import { ExternalLink } from "lucide-react";
import { useState } from "react";
import { resourceUrl, type Day } from "../../data/curriculum";
import { useCourseState } from "../../hooks/useCourseState";

export function DayRow({ day, index }: { day: Day; index: number }) {
  const { isDayDone, toggleDay } = useCourseState();
  const done = isDayDone(day.id);
  const [pulseKey, setPulseKey] = useState(0);

  return (
    <div
      className={
        "flex items-start gap-3 rounded-lg border border-border/60 bg-background/40 p-3 transition-colors " +
        (done ? "border-accent/40 bg-accent/[0.04]" : "hover:border-primary/40")
      }
    >
      <button
        key={pulseKey}
        type="button"
        onClick={() => {
          toggleDay(day.id);
          setPulseKey((k) => k + 1);
        }}
        aria-pressed={done}
        aria-label={done ? `Mark ${day.topic} incomplete` : `Mark ${day.topic} complete`}
        className={
          "pulse-once mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded border font-mono text-[11px] transition-colors " +
          (done
            ? "border-accent bg-accent text-accent-foreground"
            : "border-border bg-background text-muted-foreground hover:border-primary")
        }
      >
        {done ? "\u2713" : ""}
      </button>

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline gap-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Day {index + 1}
          </span>
          <span className="text-[10px] text-muted-foreground">+15 XP</span>
        </div>
        <div
          className={
            "mt-0.5 text-sm font-medium leading-snug " +
            (done ? "text-muted-foreground line-through" : "text-foreground")
          }
        >
          {day.topic}
        </div>
        <p className="mt-1 text-[12.5px] leading-relaxed text-muted-foreground">{day.concept}</p>
        <a
          href={resourceUrl(day.resourceQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:text-secondary"
        >
          <ExternalLink className="h-3 w-3" />
          {day.resourceQuery}
        </a>
      </div>
    </div>
  );
}