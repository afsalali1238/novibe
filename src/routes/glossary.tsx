import { createFileRoute } from "@tanstack/react-router";
import { GLOSSARY } from "../data/glossary";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Glossary - Novibe" },
      { name: "description", content: "A quick-scan reference of the core AI terms used across the map." },
      { property: "og:title", content: "Glossary - Novibe" },
      { property: "og:description", content: "A quick-scan reference of the core AI terms used across the map." },
    ],
  }),
  component: Glossary,
});

function Glossary() {
  return (
    <div>
      <header className="mb-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          reference
        </div>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
          Glossary
        </h1>
        <p className="mt-1 text-[13px] text-muted-foreground">
          One-line definitions for the terms that recur across the map. Scan, look up,
          move on.
        </p>
      </header>

      <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
        {GLOSSARY.map((entry) => (
          <li key={entry.term} className="px-4 py-3">
            <p className="text-[14px] leading-relaxed text-foreground">
              <span className="font-semibold text-foreground">{entry.term}</span>
              <span className="text-muted-foreground"> — {entry.definition}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}