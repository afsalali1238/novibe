import { Check, Copy, X } from "lucide-react";
import { useState } from "react";

type Props = {
  language: string;
  content: string;
  explanation: string;
  awardedXp: number | null;
  onClose: () => void;
};

export function ConsoleDrawer({ language, content, explanation, awardedXp, onClose }: Props) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      /* no-op */
    }
  };

  return (
    <div className="fixed inset-x-0 bottom-0 z-50">
      <div className="drawer-up mx-auto max-w-2xl overflow-hidden rounded-t-2xl border border-b-0 border-accent/40 bg-card shadow-[0_-16px_40px_-16px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-2 border-b border-border/70 bg-background/60 px-4 py-2">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-accent">
            console · validation
          </span>
          <span className="ml-auto font-mono text-[11px] text-muted-foreground">
            {language.toUpperCase()}
          </span>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close console"
            className="ml-1 flex h-6 w-6 items-center justify-center rounded text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-[55dvh] overflow-y-auto px-4 py-3">
          {awardedXp !== null && (
            <div className="mb-3 flex items-center gap-2 rounded-md border border-accent/40 bg-accent/10 px-3 py-2 font-mono text-xs text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              {awardedXp > 0
                ? `+${awardedXp} XP awarded. Streak logged.`
                : "Already solved — compare your draft against the validation key."}
            </div>
          )}

          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
              // Hidden Validation Key
            </span>
            <button
              type="button"
              onClick={copy}
              className="inline-flex items-center gap-1 rounded border border-border px-2 py-0.5 font-mono text-[11px] text-muted-foreground hover:border-primary hover:text-primary"
            >
              {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
              {copied ? "copied" : "copy"}
            </button>
          </div>

          <pre className="overflow-x-auto rounded-md border border-border/70 bg-background/70 p-3 font-mono text-[12.5px] leading-6 text-accent">
            {content}
          </pre>

          <div className="mt-3 rounded-md border border-border/70 bg-background/40 p-3">
            <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-secondary">
              // Why this works
            </div>
            <p className="mt-1 text-[13px] leading-relaxed text-foreground/90">{explanation}</p>
          </div>
        </div>
      </div>
    </div>
  );
}