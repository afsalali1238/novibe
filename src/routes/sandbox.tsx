import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useCourseState } from "../hooks/useCourseState";

export const Route = createFileRoute("/sandbox")({
  head: () => ({
    meta: [
      { title: "The Sandbox — No-Code AI & Agentic Engineering" },
      {
        name: "description",
        content:
          "Free-form scratchpad for drafting system prompts, JSON schemas, and workflow logic. Autosaved locally.",
      },
      { property: "og:title", content: "The Sandbox" },
      {
        property: "og:description",
        content: "Autosaved scratchpad for prompts, schemas, and workflow logic.",
      },
    ],
  }),
  component: Sandbox,
});

function Sandbox() {
  const { state, saveNotes, hydrated } = useCourseState();
  const [text, setText] = useState("");

  useEffect(() => {
    if (hydrated) setText(state.globalNotes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated]);

  useEffect(() => {
    if (!hydrated) return;
    const t = window.setTimeout(() => saveNotes(text), 250);
    return () => window.clearTimeout(t);
  }, [text, hydrated, saveNotes]);

  return (
    <div>
      <header className="mb-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          // scratchpad
        </div>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
          The Sandbox
        </h1>
        <p className="mt-1 text-[13px] text-muted-foreground">
          Draft prompts, JSON, or workflow logic. Autosaved to this device.
        </p>
      </header>

      <div className="overflow-hidden rounded-lg border border-border/70 bg-[color-mix(in_oklab,var(--background)_92%,black)]">
        <div className="flex items-center gap-2 border-b border-border/70 bg-background/60 px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-accent" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            notes.md
          </span>
          <span className="ml-auto font-mono text-[10px] text-muted-foreground">
            {text.length.toLocaleString()} chars
          </span>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Clear scratchpad? This can't be undone.")) setText("");
            }}
            className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground hover:border-destructive hover:text-destructive"
          >
            clear
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder={"// jot ideas, paste prompts, sketch JSON schemas..."}
          spellCheck={false}
          className="min-h-[60dvh] w-full resize-none bg-transparent p-3 font-mono text-[13px] leading-6 text-foreground caret-primary outline-none placeholder:text-muted-foreground/60"
        />
      </div>
    </div>
  );
}