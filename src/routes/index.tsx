import { createFileRoute } from "@tanstack/react-router";
import { COURSE_SUBTITLE, COURSE_TITLE, WEEKS } from "../data/curriculum";
import { WeekCard } from "../components/app/WeekCard";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div>
      <header className="mb-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          {COURSE_SUBTITLE}
        </div>
        <h1 className="mt-1 text-[22px] font-semibold leading-tight tracking-tight text-foreground">
          {COURSE_TITLE}
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
          Six weeks of daily reps to move from prompt novice to agent architect. Tap the
          checkbox to earn XP, keep your streak alive, and unlock the weekly playground.
        </p>
      </header>

      <div className="space-y-3">
        {WEEKS.map((w) => (
          <WeekCard key={w.id} week={w} defaultOpen={w.number === 1} />
        ))}
      </div>

      <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        // end of syllabus · capstone awaits
      </p>
    </div>
  );
}
