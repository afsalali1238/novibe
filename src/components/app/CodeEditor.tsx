import { useMemo } from "react";

type Props = {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  minRows?: number;
};

export function CodeEditor({ value, onChange, placeholder, minRows = 14 }: Props) {
  const lineCount = useMemo(
    () => Math.max(minRows, value.split("\n").length + 1),
    [value, minRows],
  );
  const gutter = useMemo(
    () =>
      Array.from({ length: lineCount }, (_, i) =>
        (i + 1).toString().padStart(2, " "),
      ).join("\n"),
    [lineCount],
  );

  const handleKey = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const el = e.currentTarget;
      const { selectionStart, selectionEnd } = el;
      const next = value.slice(0, selectionStart) + "  " + value.slice(selectionEnd);
      onChange(next);
      requestAnimationFrame(() => {
        el.selectionStart = el.selectionEnd = selectionStart + 2;
      });
    }
  };

  return (
    <div className="relative overflow-hidden rounded-lg border border-border/70 bg-[color-mix(in_oklab,var(--background)_92%,black)] font-mono text-[13px] leading-6">
      <div className="flex items-center gap-1.5 border-b border-border/70 bg-background/60 px-3 py-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-warning/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-accent/80" />
        <span className="ml-3 font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          playground.draft
        </span>
      </div>
      <div className="flex">
        <pre
          aria-hidden
          className="select-none whitespace-pre px-3 py-3 text-right font-mono text-[12px] leading-6 text-muted-foreground/60"
          style={{ minWidth: "2.5rem" }}
        >
          {gutter}
        </pre>
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKey}
          placeholder={placeholder}
          spellCheck={false}
          rows={lineCount}
          className="min-h-[280px] w-full resize-none border-0 bg-transparent px-2 py-3 font-mono text-[13px] leading-6 text-foreground caret-primary outline-none placeholder:text-muted-foreground/60"
        />
      </div>
    </div>
  );
}