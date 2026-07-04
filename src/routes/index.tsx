import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { CLUSTERS, NODES, TOTAL_NODES, nodesInCluster } from "../data/nodes";
import { useMapState } from "../hooks/useMapState";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Novibe — The Map" },
      {
        name: "description",
        content:
          "A non-linear topic map for AI literacy. Six clusters, thirty nodes, three depths each. Open any node, read as deep as you're curious.",
      },
      { property: "og:title", content: "Novibe — The Map" },
      {
        property: "og:description",
        content:
          "Non-linear map for AI literacy. Six clusters, thirty nodes. Read as deep as curiosity goes.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { state, streak, hydrated } = useMapState();
  const done = state.gotIt.length;
  const clustersTouched = new Set(
    state.gotIt
      .map((id) => NODES.find((n) => n.id === id)?.cluster)
      .filter(Boolean) as string[],
  ).size;

  // This-week summary
  const weekStart = new Date();
  weekStart.setUTCDate(weekStart.getUTCDate() - 6);
  const weekStartIso = weekStart.toISOString().slice(0, 10);
  const activeThisWeek = state.activityDates.filter((d) => d >= weekStartIso).length;

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
          A non-linear topic map for AI literacy. Open any node, in any order. Read the
          60-second plain-English version — or go deeper. No streaks to protect, no XP,
          no locks. Just what you're curious about right now.
        </p>
      </header>

      {hydrated && (
        <div className="mb-6 grid grid-cols-3 gap-2">
          <Stat label="Nodes" value={`${done}/${TOTAL_NODES}`} />
          <Stat label="Clusters" value={`${clustersTouched}/${CLUSTERS.length}`} />
          <Stat
            label="Streak"
            value={streak > 0 ? `${streak}d` : "—"}
            hint={activeThisWeek ? `${activeThisWeek} day${activeThisWeek === 1 ? "" : "s"} this week` : "start today"}
          />
        </div>
      )}

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
            </section>
          );
        })}
      </div>

      <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
        // 30 nodes · 6 clusters · read anywhere
      </p>
    </div>
  );
}

function Stat({ label, value, hint }: { label: string; value: string; hint?: string }) {
  return (
    <div className="rounded-lg border border-border bg-card px-3 py-2">
      <div className="font-mono text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 font-mono text-[16px] font-semibold tabular-nums text-foreground">
        {value}
      </div>
      {hint && <div className="mt-0.5 text-[10px] text-muted-foreground">{hint}</div>}
    </div>
  );
}
