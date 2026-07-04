import { createFileRoute, Link } from "@tanstack/react-router";
import { RotateCcw } from "lucide-react";
import { CLUSTERS, NODES, TOTAL_NODES, findNode, nodesInCluster } from "../data/nodes";
import { useMapState } from "../hooks/useMapState";

export const Route = createFileRoute("/stats")({
  head: () => ({
    meta: [
      { title: "Progress - Novibe" },
      { name: "description", content: "Your map coverage and engagement streak." },
    ],
  }),
  component: Stats,
});

function Stats() {
  const { state, streak, resetAll } = useMapState();
  const done = state.gotIt.length;
  const clustersTouched = new Set(
    state.gotIt.map((id) => NODES.find((n) => n.id === id)?.cluster).filter(Boolean) as string[],
  ).size;

  const weekStart = new Date();
  weekStart.setUTCDate(weekStart.getUTCDate() - 6);
  const weekStartIso = weekStart.toISOString().slice(0, 10);
  const activeThisWeek = state.activityDates.filter((d) => d >= weekStartIso).length;

  const reflectionEntries = state.reflectionOrder
    .filter((id) => state.gotIt.includes(id) && (state.reflections[id]?.trim().length ?? 0) > 0)
    .map((id) => ({ id, node: findNode(id), text: state.reflections[id]! }))
    .filter((e) => e.node);

  return (
    <div>
      <header className="mb-5">
        <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
          progress
        </div>
        <h1 className="mt-1 text-xl font-semibold tracking-tight text-foreground">
          Where you are on the map
        </h1>
      </header>

      <section className="mb-5 grid grid-cols-3 gap-2">
        <Tile label="Nodes" value={`${done}/${TOTAL_NODES}`} />
        <Tile label="Clusters" value={`${clustersTouched}/${CLUSTERS.length}`} />
        <Tile label="Streak" value={streak > 0 ? `${streak}d` : "-"} hint={`${activeThisWeek}/7 this week`} />
      </section>

      <section className="mb-6 rounded-xl border border-border bg-card p-4">
        <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          Coverage by cluster
        </div>
        <div className="space-y-3">
          {CLUSTERS.map((c) => {
            const nodes = nodesInCluster(c.id);
            const d = nodes.filter((n) => state.gotIt.includes(n.id)).length;
            const pct = Math.round((d / nodes.length) * 100);
            return (
              <div key={c.id}>
                <div className="mb-1 flex items-center justify-between gap-2 text-[12px]">
                  <span className="truncate text-foreground">
                    <span className="mr-2 font-mono text-muted-foreground">{c.id}</span>
                    {c.title}
                  </span>
                  <span className="font-mono tabular-nums text-muted-foreground">
                    {d}/{nodes.length}
                  </span>
                </div>
                <div className="h-1 w-full overflow-hidden rounded-full bg-border">
                  <div className="h-full bg-primary" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mb-6 rounded-xl border border-border bg-card p-4">
        <div className="mb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
          How streak works
        </div>
        <p className="text-[13px] leading-relaxed text-muted-foreground">
          A day counts if you mark at least one node "got it" - any node, any depth.
          You get one free skip per rolling 7 days, so a single missed day never breaks
          the streak. Two missed days in a row resets it - no guilt, pick up anywhere.
        </p>
      </section>

      <section className="mb-6 rounded-xl border border-border bg-card p-4">
        <div className="mb-3 flex items-baseline justify-between gap-2">
          <div className="font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground">
            Your takeaways
          </div>
          {reflectionEntries.length > 0 && (
            <div className="font-mono text-[10px] tabular-nums text-muted-foreground">
              {reflectionEntries.length}
            </div>
          )}
        </div>
        {reflectionEntries.length === 0 ? (
          <p className="text-[13px] leading-relaxed text-muted-foreground">
            One-line takeaways you jot on any node page show up here, newest first.
          </p>
        ) : (
          <ul className="space-y-3">
            {reflectionEntries.map(({ id, node, text }) => (
              <li key={id} className="border-l-2 border-primary/40 pl-3">
                <Link
                  to="/node/$nodeId"
                  params={{ nodeId: id }}
                  className="font-mono text-[10px] uppercase tracking-[0.14em] text-primary hover:underline"
                >
                  {id.toUpperCase()} · {node!.title}
                </Link>
                <p className="mt-1 whitespace-pre-wrap text-[13px] leading-relaxed text-foreground">
                  {text}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>

      <button
        type="button"
        onClick={() => {
          if (window.confirm("Reset the whole map? This can't be undone.")) resetAll();
        }}
        className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-destructive/40 bg-destructive/[0.05] px-3 py-2 font-mono text-xs text-destructive hover:bg-destructive/10"
      >
        <RotateCcw className="h-3.5 w-3.5" />
        Reset all progress
      </button>
    </div>
  );
}

function Tile({ label, value, hint }: { label: string; value: string; hint?: string }) {
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
