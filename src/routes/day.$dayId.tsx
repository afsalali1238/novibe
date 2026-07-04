import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Check, ExternalLink, Sparkles } from "lucide-react";
import { useMemo, useState } from "react";
import { resourceUrl, WEEKS, type Day, type Week } from "../data/curriculum";
import { quizFor, type QuizQuestion } from "../data/quizzes";
import { useCourseState } from "../hooks/useCourseState";

export const Route = createFileRoute("/day/$dayId")({
  head: ({ params }) => {
    const found = findDay(params.dayId);
    const title = found ? `Day: ${found.day.topic}` : "Day";
    return {
      meta: [
        { title: `${title} · No-Code AI` },
        { name: "description", content: found?.day.concept ?? "Interactive daily lesson." },
      ],
    };
  },
  loader: ({ params }) => {
    const found = findDay(params.dayId);
    if (!found) throw notFound();
    return found;
  },
  component: DayPage,
  notFoundComponent: () => (
    <div className="py-10 text-center text-sm text-muted-foreground">Day not found.</div>
  ),
});

function findDay(id: string): { week: Week; day: Day; index: number } | null {
  for (const w of WEEKS) {
    const idx = w.days.findIndex((d) => d.id === id);
    if (idx >= 0) return { week: w, day: w.days[idx], index: idx };
  }
  return null;
}

const TOOLS = [
  { id: "claude", label: "Claude", hint: "claude.ai" },
  { id: "gemini", label: "Gemini", hint: "gemini.google.com" },
  { id: "chatgpt", label: "ChatGPT", hint: "chat.openai.com" },
  { id: "other", label: "Other", hint: "your pick" },
] as const;

function suggestedPrompt(day: Day): string {
  return `You are helping me learn: "${day.topic}".

Explain the core idea in 3 bullet points, then give me ONE concrete example I could use in a real workflow today. End with a single follow-up question that tests my understanding.`;
}

function DayPage() {
  const { week, day, index } = Route.useLoaderData();
  const {
    state,
    saveDayLog,
    submitQuiz,
    isQuizDone,
    isDayDone,
    toggleDay,
  } = useCourseState();

  const savedLog = state.dayLogs[day.id];
  const [tool, setTool] = useState<string>(savedLog?.tool ?? "");
  const [result, setResult] = useState<string>(savedLog?.result ?? "");
  const [copied, setCopied] = useState(false);

  const quiz = useMemo(() => quizFor(day.id), [day.id]);
  const quizDone = isQuizDone(day.id);
  const savedAnswers = state.quizAnswers[day.id];
  const [answers, setAnswers] = useState<number[]>(
    savedAnswers ?? new Array(quiz.length).fill(-1),
  );
  const [submitted, setSubmitted] = useState(quizDone);

  const prompt = suggestedPrompt(day);
  const canSaveLog = tool && result.trim().length > 0;
  const allAnswered = answers.every((a) => a >= 0);
  const correctCount = answers.reduce(
    (n, a, i) => (a === quiz[i]?.answer ? n + 1 : n),
    0,
  );

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(prompt);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1400);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="space-y-5">
      <Link
        to="/"
        className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-primary"
      >
        <ArrowLeft className="h-3 w-3" /> Syllabus
      </Link>

      <header>
        <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          <span className="text-primary">Week {week.number}</span>
          <span>·</span>
          <span>Day {index + 1}</span>
        </div>
        <h1 className="mt-1 text-xl font-semibold leading-tight tracking-tight text-foreground">
          {day.topic}
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">{day.concept}</p>
        <a
          href={resourceUrl(day.resourceQuery)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:underline"
        >
          <ExternalLink className="h-3 w-3" />
          {day.resourceQuery}
        </a>
      </header>

      {/* Try it with an AI */}
      <section className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-4 w-4 text-primary" />
          <h2 className="text-sm font-semibold text-foreground">Try it with an AI</h2>
        </div>
        <p className="mt-1 text-[12.5px] text-muted-foreground">
          Pick a tool, run the prompt below, then paste the result. This gets saved locally.
        </p>

        <div className="mt-3 rounded-lg border border-border bg-background p-3">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              Prompt
            </span>
            <button
              type="button"
              onClick={copyPrompt}
              className="rounded-md border border-border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground hover:border-primary hover:text-primary"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
          <pre className="whitespace-pre-wrap break-words font-mono text-[12px] leading-relaxed text-foreground">
            {prompt}
          </pre>
        </div>

        <div className="mt-3">
          <div className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Which AI did you use?
          </div>
          <div className="flex flex-wrap gap-2">
            {TOOLS.map((t) => {
              const active = tool === t.id;
              return (
                <button
                  key={t.id}
                  type="button"
                  onClick={() => setTool(t.id)}
                  className={
                    "rounded-md border px-2.5 py-1 text-xs transition-colors " +
                    (active
                      ? "border-primary bg-primary/10 text-primary"
                      : "border-border bg-background text-muted-foreground hover:border-primary hover:text-foreground")
                  }
                >
                  <span className="font-medium">{t.label}</span>
                  <span className="ml-1 font-mono text-[10px] opacity-70">{t.hint}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-3">
          <label className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            Paste the AI's response
          </label>
          <textarea
            value={result}
            onChange={(e) => setResult(e.target.value)}
            placeholder="Paste what the model gave you. You can also add your own reflection."
            className="min-h-[140px] w-full rounded-lg border border-border bg-background p-3 font-mono text-[12.5px] leading-relaxed text-foreground outline-none focus:border-primary"
          />
          <div className="mt-2 flex items-center justify-between">
            <span className="text-[11px] text-muted-foreground">
              {savedLog ? "Saved locally · updates on save" : "Saved to this browser"}
            </span>
            <button
              type="button"
              disabled={!canSaveLog}
              onClick={() => saveDayLog(day.id, { tool, result })}
              className={
                "rounded-md px-3 py-1.5 text-xs font-semibold transition-colors " +
                (canSaveLog
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "cursor-not-allowed bg-muted text-muted-foreground")
              }
            >
              Save attempt
            </button>
          </div>
        </div>
      </section>

      {/* Quiz */}
      {quiz.length > 0 && (
        <section className="rounded-xl border border-border bg-card p-4">
          <div className="flex items-center justify-between">
            <h2 className="text-sm font-semibold text-foreground">Quick check ({quiz.length} Qs)</h2>
            {quizDone && (
              <span className="inline-flex items-center gap-1 rounded-full border border-accent/40 bg-accent/10 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-accent">
                <Check className="h-3 w-3" /> Done
              </span>
            )}
          </div>
          <p className="mt-1 text-[12.5px] text-muted-foreground">
            +5 XP per correct answer. First attempt counts for XP.
          </p>

          <ol className="mt-3 space-y-4">
            {quiz.map((q, qi) => (
              <QuizItem
                key={qi}
                q={q}
                selected={answers[qi]}
                showAnswer={submitted}
                onSelect={(oi) => {
                  if (submitted) return;
                  setAnswers((prev) => prev.map((v, i) => (i === qi ? oi : v)));
                }}
              />
            ))}
          </ol>

          {!submitted ? (
            <button
              type="button"
              disabled={!allAnswered}
              onClick={() => {
                submitQuiz(day.id, answers, correctCount);
                setSubmitted(true);
                if (!isDayDone(day.id)) toggleDay(day.id);
              }}
              className={
                "mt-4 w-full rounded-md px-3 py-2 text-sm font-semibold transition-colors " +
                (allAnswered
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "cursor-not-allowed bg-muted text-muted-foreground")
              }
            >
              Submit quiz
            </button>
          ) : (
            <div className="mt-4 rounded-lg border border-border bg-background p-3 text-center">
              <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
                Score
              </div>
              <div className="mt-0.5 text-lg font-semibold text-foreground">
                {correctCount} / {quiz.length}
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setAnswers(new Array(quiz.length).fill(-1));
                }}
                className="mt-2 font-mono text-[11px] uppercase tracking-[0.14em] text-primary hover:underline"
              >
                Try again (no XP)
              </button>
            </div>
          )}
        </section>
      )}

      <div className="pt-2">
        <Link
          to="/playground/$weekId"
          params={{ weekId: week.id }}
          className="inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-primary hover:underline"
        >
          Week {week.number} playground →
        </Link>
      </div>
    </div>
  );
}

function QuizItem({
  q,
  selected,
  showAnswer,
  onSelect,
}: {
  q: QuizQuestion;
  selected: number;
  showAnswer: boolean;
  onSelect: (i: number) => void;
}) {
  return (
    <li>
      <div className="text-[13px] font-medium text-foreground">{q.q}</div>
      <div className="mt-2 space-y-1.5">
        {q.options.map((opt, oi) => {
          const chosen = selected === oi;
          const isCorrect = oi === q.answer;
          let cls =
            "flex w-full items-start gap-2 rounded-md border px-2.5 py-1.5 text-left text-[12.5px] transition-colors ";
          if (showAnswer) {
            if (isCorrect) cls += "border-accent/50 bg-accent/10 text-foreground";
            else if (chosen) cls += "border-destructive/50 bg-destructive/10 text-foreground";
            else cls += "border-border bg-background text-muted-foreground";
          } else {
            cls += chosen
              ? "border-primary bg-primary/10 text-foreground"
              : "border-border bg-background text-foreground hover:border-primary";
          }
          return (
            <button
              key={oi}
              type="button"
              onClick={() => onSelect(oi)}
              className={cls}
            >
              <span className="mt-0.5 font-mono text-[10px] text-muted-foreground">
                {String.fromCharCode(65 + oi)}
              </span>
              <span className="flex-1">{opt}</span>
              {showAnswer && isCorrect && (
                <Check className="h-3.5 w-3.5 flex-none text-accent" />
              )}
            </button>
          );
        })}
      </div>
      {showAnswer && (
        <p className="mt-2 rounded-md bg-muted px-2.5 py-1.5 font-mono text-[11px] leading-relaxed text-muted-foreground">
          {q.explain}
        </p>
      )}
    </li>
  );
}