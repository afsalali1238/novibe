import { createFileRoute, Link } from "@tanstack/react-router";
import { Check, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { CLUSTERS, NODES, TOTAL_NODES, nodesInCluster } from "../data/nodes";
import { useMapState } from "../hooks/useMapState";
import { activeThisWeek, clustersTouched } from "../lib/mapStats";
import { StatCard } from "../components/app/StatCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novibe - The Map" },
      {
        name: "description",
        content:
          "AI explained in plain English - LLMs, agents, prompts, and the tools people actually use. Pick a topic, get the simple version, go deeper if you're curious.",
      },
      { property: "og:title", content: "Novibe - The Map" },
      {
        property: "og:description",
        content:
          "AI, explained simply. Pick a topic, get the plain-English version, go deeper if you're curious.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { state, streak, hydrated } = useMapState();
  const [query, setQuery] = useState("");
  const done = state.gotIt.length;

  const searchResults = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    return NODES.filter(
      (n) =>
        n.title.toLowerCase().includes(q) ||
        n.layer0.toLowerCase().includes(q) ||
        n.layer1.toLowerCase().includes(q) ||
        n.layer2.toLowerCase().includes(q),
    );
  }, [query]);

  const touchedClusters = clustersTouched(state.gotIt);
  const activeDaysThisWeek = activeThisWeek(state.activityDates);
  // Cold-start anchor: pulse + badge on A1 until the user marks it "got it",
  // so a first-time visitor has one obvious place to click instead of facing
  // 41 equally-weighted nodes at once.
  const showStartHere = hydrated && !state.gotIt.includes("a1");

  return (
    <div>
      <header className="mb-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          the map
        </div>
        <h1 className="mt-1 text-[26px] font-semibold leading-tight tracking-tight text-foreground">
          Novibe
        </h1>
        <p className="mt-2 text-[13px] leading-relaxed text-muted-foreground">
          AI, explained in plain English - what LLMs actually are, how tools like
          ChatGPT and Claude work, why AI sometimes makes things up, and the popular
          tools people build with. Pick any topic and start with the simple version.
          Go deeper only if you're curious - no streaks, no pressure.
        </p>
      </header>

      {hydrated && (
        <div className="mb-6 grid grid-cols-3 gap-2">
          <StatCard label="Nodes" value={`${done}/${TOTAL_NODES}`} />
          <StatCard label="Clusters" value={`${touchedClusters}/${CLUSTERS.length}`} />
          <StatCard
            label="Streak"
            value={streak > 0 ? `${streak}d` : "-"}
            hint={
              activeDaysThisWeek
                ? `${activeDaysThisWeek} day${activeDaysThisWeek === 1 ? "" : "s"} this week`
                : "start today"
            }
          />
        </div>
      )}

      <div className="mb-4 flex items-center gap-2 rounded-lg border border-border bg-card px-3 py-2">
        <label htmlFor="main-search" className="sr-only">Search the whole map</label>
        <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
        <input
          id="main-search"
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search the whole map..."
          aria-label="Search the whole map"
          className="w-full bg-transparent text-[13px] text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded-sm placeholder:text-muted-foreground/60"
        />
      </div>

      {searchResults ? (
        searchResults.length === 0 ? (
          <p className="py-8 text-center text-[13px] text-muted-foreground">
            No nodes match "{query}".
          </p>
        ) : (
          <ul className="divide-y divide-border/70 overflow-hidden rounded-xl border border-border bg-card">
            {searchResults.map((n) => {
              const got = state.gotIt.includes(n.id);
              return (
                <li key={n.id}>
                  <Link
                    to="/node/$nodeId"
                    params={{ nodeId: n.id }}
                    className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/60"
                  >
                    <span
                      className={
                        "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] " +
                        (got
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border text-muted-foreground")
                      }
                    >
                      {got ? <Check className="h-3.5 w-3.5" /> : n.id.toUpperCase()}
                    </span>
                    <span
                      className={
                        "flex-1 text-[13px] leading-snug " +
                        (got ? "text-muted-foreground line-through decoration-1" : "text-foreground")
                      }
                    >
                      {n.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        )
      ) : (
      <div className="space-y-4">
        {CLUSTERS.map((c) => {
          const nodes = nodesInCluster(c.id);
          const clusterDone = nodes.filter((n) => state.gotIt.includes(n.id)).length;
          return (
            <section
              key={c.id}
              className="overflow-hidden rounded-xl border border-border bg-card"
            >
              <div className="flex items-baseline justify-between gap-3 border-b border-border/70 px-4 py-3">
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    Cluster {c.id}
                  </div>
                  <h2 className="mt-0.5 text-[15px] font-semibold tracking-tight text-foreground">
                    {c.title}
                  </h2>
                  <div className="text-[12px] text-muted-foreground">{c.subtitle}</div>
                </div>
                <div className="font-mono text-[11px] tabular-nums text-muted-foreground">
                  {clusterDone}/{nodes.length}
                </div>
              </div>
              <ul className="divide-y divide-border/70">
                {nodes.map((n) => {
                  const got = state.gotIt.includes(n.id);
                  const isStartHere = showStartHere && n.id === "a1";
                  return (
                    <li key={n.id}>
                      <Link
                        to="/node/$nodeId"
                        params={{ nodeId: n.id }}
                        className="flex items-center gap-3 px-4 py-3 transition-colors hover:bg-muted/60"
                      >
                        <span
                          className={
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-full border font-mono text-[10px] " +
                            (got
                              ? "border-primary bg-primary text-primary-foreground"
                              : isStartHere
                                ? "border-primary text-primary shadow-[0_0_12px_-3px_hsl(var(--primary))] animate-[pulse_2s_ease-in-out_infinite]"
                                : "border-border text-muted-foreground")
                          }
                        >
                          {got ? <Check className="h-3.5 w-3.5" /> : n.id.toUpperCase()}
                        </span>
                        <span
                          className={
                            "flex-1 text-[13px] leading-snug " +
                            (got ? "text-muted-foreground line-through decoration-1" : "text-foreground")
                          }
                        >
                          {n.title}
                        </span>
                        {isStartHere && (
                          <span className="shrink-0 rounded-full border border-primary bg-primary/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.1em] text-primary">
                            Start Here
                          </span>
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </section>
          );
        })}
      </div>
      )}

      <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        // {TOTAL_NODES} nodes · 6 clusters · read anywhere
      </p>
    </div>
  );
}
