import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ChevronRight, Search } from "lucide-react";
import { GLOSSARY } from "../data/glossary";
import { findNode } from "../data/nodes";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Glossary - Novibe" },
      {
        name: "description",
        content: "A quick-scan reference of the core AI terms used across the map.",
      },
      { property: "og:title", content: "Glossary - Novibe" },
      {
        property: "og:description",
        content: "A quick-scan reference of the core AI terms used across the map.",
      },
    ],
  }),
  component: Glossary,
});

// Maps a glossary term to the node that covers it in depth, where one exists.
// Not every term has a dedicated node (e.g. "Attention Mechanism") - those
// just render without a link.
const TERM_TO_NODE: Record<string, string> = {
  Agent: "e1",
  Alignment: "a6",
  "Context Window": "a4",
  "Direct Prompt Injection": "e6",
  Embeddings: "c5",
  "Few-Shot Prompting": "b3",
  "Fine-Tuning": "c2",
  Guardrails: "e4",
  Hallucination: "a5",
  "Indirect Prompt Injection (IPI)": "e6",
  Inference: "a3",
  "Large Language Model (LLM)": "a1",
  Multimodal: "d6",
  Parameters: "a2",
  "Prompt Injection": "e6",
  "Retrieval-Augmented Generation (RAG)": "c1",
  "RLHF (Reinforcement Learning from Human Feedback)": "a6",
  "System Prompt": "b2",
  Tokens: "a2",
  "Vector Database": "d4",
  "World Model": "d6",
};

function Glossary() {
  const [query, setQuery] = useState("");

  const entries = useMemo(
    () =>
      GLOSSARY.map((e) => ({
        ...e,
        nodeId: TERM_TO_NODE[e.term],
      })),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) => e.term.toLowerCase().includes(q) || e.definition.toLowerCase().includes(q),
    );
  }, [entries, query]);

  return (
    <div>
      <header className="mb-4">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          reference
        </div>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
          Glossary
        </h1>
        <p className="mt-1 text-[13px] text-muted-foreground">
          One-line definitions for the terms that recur across the map. Scan, look up,
          move on - tap a term with a node link to go deeper.
        </p>
      </header>

      <div className="mb-4 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms..."
          aria-label="Search glossary terms"
          className="w-full bg-transparent text-[13px] text-foreground outline-none placeholder:text-muted-foreground/60"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-[13px] text-muted-foreground">
          No terms match "{query}".
        </p>
      ) : (
        <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-card">
          {filtered.map((entry) => {
            const node = entry.nodeId ? findNode(entry.nodeId) : undefined;
            const content = (
              <>
                <p className="text-[14px] leading-relaxed text-foreground">
                  <span className="font-semibold text-foreground">{entry.term}</span>
                  <span className="text-muted-foreground"> — {entry.definition}</span>
                </p>
                {node && (
                  <span className="mt-1 inline-flex items-center gap-0.5 font-mono text-[10px] uppercase tracking-[0.12em] text-primary">
                    open {node.id.toUpperCase()}
                    <ChevronRight className="h-3 w-3" />
                  </span>
                )}
              </>
            );
            return (
              <li key={entry.term}>
                {node ? (
                  <Link
                    to="/node/$nodeId"
                    params={{ nodeId: node.id }}
                    className="block px-4 py-3 transition-colors hover:bg-muted/60"
                  >
                    {content}
                  </Link>
                ) : (
                  <div className="px-4 py-3">{content}</div>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
