import { Check, X } from "lucide-react";
import { useState } from "react";
import type { QuizQuestion } from "../../data/types";
import { useMapState } from "../../hooks/useMapState";

export function QuizCheck({ nodeId, quiz }: { nodeId: string; quiz: QuizQuestion }) {
  const { state, answerQuiz, hydrated } = useMapState();
  const saved = state.quizAnswers[nodeId];
  const [pendingIndex, setPendingIndex] = useState<number | null>(null);
  // While retrying, ignore the persisted saved answer so options render as
  // fresh/clickable again, even though the old result is still in storage.
  const [retrying, setRetrying] = useState(false);

  const answeredIndex = retrying ? pendingIndex : pendingIndex ?? saved?.selectedIndex ?? null;
  const answered = hydrated && answeredIndex !== null;

  function pick(i: number) {
    setRetrying(false);
    setPendingIndex(i);
    answerQuiz(nodeId, i, i === quiz.correctIndex);
  }

  function tryAgain() {
    setRetrying(true);
    setPendingIndex(null);
  }

  return (
    <section className="mb-4 rounded-xl border border-border bg-card p-4">
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Quick check
        </span>
        {answered && (
          <button
            type="button"
            onClick={tryAgain}
            className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground hover:text-primary"
          >
            try again
          </button>
        )}
      </div>
      <p className="mt-2 text-[14px] leading-relaxed text-foreground">{quiz.prompt}</p>

      <div className="mt-3 flex flex-col gap-2">
        {quiz.options.map((option, i) => {
          const isCorrect = i === quiz.correctIndex;
          const isSelected = answeredIndex === i;
          let stateClasses =
            "border-border bg-background text-foreground hover:border-primary/60";
          if (answered) {
            if (isSelected && isCorrect) {
              stateClasses = "border-primary bg-primary/[0.08] text-foreground";
            } else if (isSelected && !isCorrect) {
              stateClasses = "border-destructive bg-destructive/[0.06] text-foreground";
            } else if (isCorrect) {
              stateClasses = "border-primary/50 bg-primary/[0.04] text-foreground";
            } else {
              stateClasses = "border-border bg-background text-muted-foreground";
            }
          }
          return (
            <button
              key={option}
              type="button"
              disabled={answered}
              onClick={() => pick(i)}
              className={
                "flex items-start gap-2 rounded-lg border px-3 py-2 text-left text-[13px] leading-snug transition-colors disabled:cursor-default " +
                stateClasses
              }
            >
              {answered && isCorrect && (
                <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-primary" />
              )}
              {answered && isSelected && !isCorrect && (
                <X className="mt-0.5 h-3.5 w-3.5 shrink-0 text-destructive" />
              )}
              <span>{option}</span>
            </button>
          );
        })}
      </div>

      {answered && (
        <p className="mt-3 text-[12px] leading-relaxed text-muted-foreground">
          {quiz.explanation}
        </p>
      )}
    </section>
  );
}
