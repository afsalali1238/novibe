import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useMapState } from "../hooks/useMapState";

export const Route = createFileRoute("/sandbox")({
  head: () => ({
    meta: [
      { title: "Scratchpad - Novibe" },
      { name: "description", content: "Free-form notes, autosaved to this device." },
    ],
  }),
  component: Sandbox,
});

function Sandbox() {
  const { state, saveNotes, hydrated } = useMapState();
  const [text, setText] = useState("");

  useEffect(() => {
    if (hydrated) setText(state.notes);
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
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          scratchpad
        </div>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
          Scratchpad
        </h1>
        <p className="mt-1 text-[13px] text-muted-foreground">
          One running space for realizations, prompts you're testing, or questions to
          come back to - separate from the one-line takeaway you can leave on each node.
          Autosaved to this device.
        </p>
      </header>

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex items-center gap-2 border-b border-border px-3 py-1.5">
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
            notes.md
          </span>
          <span className="ml-auto font-mono text-[10px] text-muted-foreground">
            {text.length.toLocaleString()} chars
          </span>
          <button
            type="button"
            onClick={() => {
              if (window.confirm("Clear scratchpad?")) setText("");
            }}
            className="rounded border border-border px-2 py-0.5 font-mono text-[10px] text-muted-foreground hover:border-destructive hover:text-destructive"
          >
            clear
          </button>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="// notes…"
          spellCheck={false}
          className="min-h-[60dvh] w-full resize-none bg-transparent p-3 font-mono text-[13px] leading-6 text-foreground caret-primary outline-none placeholder:text-muted-foreground/60"
        />
      </div>
    </div>
  );
}
