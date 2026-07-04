import { Link, createFileRoute, notFound, useRouter } from "@tanstack/react-router";
import { ArrowLeft, Play } from "lucide-react";
import { useEffect, useState } from "react";
import { CodeEditor } from "../components/app/CodeEditor";
import { ConsoleDrawer } from "../components/app/ConsoleDrawer";
import { WEEKS, findWeek } from "../data/curriculum";
import { useCourseState } from "../hooks/useCourseState";
import { XP_PER_CHALLENGE } from "../lib/levels";

export const Route = createFileRoute("/playground/$weekId")({
  head: ({ params }) => {
    const w = findWeek(params.weekId);
    const title = w
      ? `Week ${w.number} Playground — ${w.title}`
      : "Playground — No-Code AI & Agentic Engineering";
    const desc = w
      ? `Sandbox challenge for Week ${w.number}: ${w.title}. Draft your logic, submit, and reveal the validation key.`
      : "Weekly sandbox challenge.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  loader: ({ params }) => {
    const week = findWeek(params.weekId);
    if (!week) throw notFound();
    return { week };
  },
  component: Playground,
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
});

function Playground() {
  const { week } = Route.useLoaderData();
  const {
    state,
    hydrated,
    saveDraft,
    submitChallenge,
    isChallengeDone,
  } = useCourseState();
  const [draft, setDraft] = useState("");
  const [showConsole, setShowConsole] = useState(false);
  const [awarded, setAwarded] = useState<number | null>(null);

  useEffect(() => {
    if (hydrated) setDraft(state.playgroundDrafts[week.id] ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, week.id]);

  useEffect(() => {
    if (!hydrated) return;
    const t = window.setTimeout(() => saveDraft(week.id, draft), 250);
    return () => window.clearTimeout(t);
  }, [draft, week.id, hydrated, saveDraft]);

  const done = isChallengeDone(week.id);

  const onSubmit = () => {
    const { firstTime } = submitChallenge(week.id);
    setAwarded(firstTime ? XP_PER_CHALLENGE : 0);
    setShowConsole(true);
  };

  return (
    <div className="pb-6">
      <div className="mb-4 flex items-center gap-3">
        <Link
          to="/"
          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border/70 text-muted-foreground hover:border-primary hover:text-primary"
          aria-label="Back to syllabus"
        >
          <ArrowLeft className="h-4 w-4" />
        </Link>
        <div className="min-w-0">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-secondary">
            Week {week.number} · Playground · +{XP_PER_CHALLENGE} XP
          </div>
          <h1 className="truncate text-base font-semibold tracking-tight text-foreground">
            {week.title}
          </h1>
        </div>
      </div>

      <section className="sticky top-[54px] z-30 mb-3 rounded-xl border border-secondary/40 bg-card/95 p-3 backdrop-blur">
        <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-accent">
          // Sandbox Scenario
        </div>
        <p className="mt-1 text-[13px] leading-relaxed text-foreground">{week.challenge.scenario}</p>
        <div className="mt-3 font-mono text-[10px] uppercase tracking-[0.16em] text-secondary">
          // Instructions
        </div>
        <p className="mt-1 text-[13px] leading-relaxed text-muted-foreground">
          {week.challenge.instructions}
        </p>
      </section>

      <CodeEditor
        value={draft}
        onChange={setDraft}
        placeholder={`// draft your ${week.challenge.language.toUpperCase()} here...`}
      />

      <div className="mt-3 flex items-center gap-2">
        <button
          type="button"
          onClick={onSubmit}
          className="glow-primary inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/60 bg-primary/15 px-4 py-2.5 font-mono text-sm font-semibold text-primary transition-colors hover:bg-primary/25"
        >
          <Play className="h-4 w-4" />
          Run Logic / Submit
        </button>
        {done && !showConsole && (
          <button
            type="button"
            onClick={() => {
              setAwarded(0);
              setShowConsole(true);
            }}
            className="rounded-lg border border-accent/50 bg-accent/[0.08] px-3 py-2.5 font-mono text-xs text-accent hover:bg-accent/15"
          >
            reveal key
          </button>
        )}
      </div>

      <p className="mt-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        // draft autosaves locally · tab inserts two spaces
      </p>

      {showConsole && (
        <ConsoleDrawer
          language={week.challenge.language}
          content={week.challenge.validationKey}
          explanation={week.challenge.explanation}
          awardedXp={awarded}
          onClose={() => setShowConsole(false)}
        />
      )}
    </div>
  );
}

function NotFound() {
  const { weekId } = Route.useParams();
  return (
    <div className="rounded-xl border border-destructive/40 bg-destructive/[0.06] p-4 text-center">
      <div className="font-mono text-xs text-destructive">// week not found</div>
      <p className="mt-1 text-sm text-muted-foreground">
        No week matches <code className="font-mono">{weekId}</code>.
      </p>
      <div className="mt-3 flex flex-wrap justify-center gap-2">
        {WEEKS.map((w) => (
          <Link
            key={w.id}
            to="/playground/$weekId"
            params={{ weekId: w.id }}
            className="rounded border border-border px-2 py-1 font-mono text-[11px] hover:border-primary hover:text-primary"
          >
            W{w.number}
          </Link>
        ))}
      </div>
    </div>
  );
}

function ErrorView({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="rounded-xl border border-destructive/40 bg-destructive/[0.06] p-4 text-center">
      <div className="font-mono text-xs text-destructive">// playground crashed</div>
      <p className="mt-1 text-sm text-muted-foreground">{error.message}</p>
      <button
        type="button"
        onClick={() => {
          router.invalidate();
          reset();
        }}
        className="mt-3 rounded border border-primary px-3 py-1 font-mono text-xs text-primary"
      >
        try again
      </button>
    </div>
  );
}