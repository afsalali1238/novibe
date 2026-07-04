import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { CLUSTERS, NODES } from "../data/nodes";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Glossary - Novibe" },
      {
        name: "description",
        content: "Every term on the map, one-line definitions, searchable.",
      },
    ],
  }),
  component: Glossary,
});

// First sentence of layer0 doubles as the glossary definition, so there's
// only one place (nodes.ts) where the actual wording lives.
function firstSentence(text: string): string {
  const match = text.match(/^.*?[.!?](?=\s|$)/);
  return (match ? match[0] : text).trim();
}

function Glossary() {
  const [query, setQuery] = useState("");

  const entries = useMemo(
    () =>
      NODES.map((n) => ({
        id: n.id,
        title: n.title,
        cluster: n.cluster,
        def: firstSentence(n.layer0),
      })).sort((a, b) => a.title.localeCompare(b.title)),
    [],
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return entries;
    return entries.filter(
      (e) => e.title.toLowerCase().includes(q) || e.def.toLowerCase().includes(q),
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
          Every term on the map, in one place. Tap a term to open its full node.
        </p>
      </header>

      <div className="mb-4 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search terms..."
          className="w-full bg-transparent text-[13px] text-foreground outline-none placeholder:text-muted-foreground/60"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="py-8 text-center text-[13px] text-muted-foreground">
          No terms match "{query}".
        </p>
      ) : (
        <ul className="divide-y divide-border/70 overflow-hidden rounded-xl border border-border bg-card">
          {filtered.map((e) => (
            <li key={e.id}>
              <Link
                to="/node/$nodeId"
                params={{ nodeId: e.id }}
                className="block px-4 py-3 transition-colors hover:bg-muted/60"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary">
                    {CLUSTERS.find((c) => c.id === e.cluster)?.id}
                  </span>
                  <span className="text-[13px] font-medium text-foreground">
                    {e.title}
                  </span>
                </div>
                <p className="mt-1 text-[12px] leading-snug text-muted-foreground">
                  {e.def}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
