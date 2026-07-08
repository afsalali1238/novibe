import { createFileRoute, Link, notFound, useNavigate, useRouter } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Check, ChevronRight } from "lucide-react";
import { ExternalLink } from "lucide-react";
import { useEffect, useState } from "react";
import { CLUSTERS, NODES, findNode, type NodeContent, type ResourceType } from "../data/nodes";
import { useMapState } from "../hooks/useMapState";
import { truncateToWord } from "../lib/utils";

const RESOURCE_VERB: Record<ResourceType, string> = {
  video: "watch",
  tool: "try",
  article: "read",
  paper: "read",
  repo: "explore",
  doc: "read",
  course: "take",
};

export const Route = createFileRoute("/node/$nodeId")({
  loader: ({ params }) => {
    const node = findNode(params.nodeId);
    if (!node) throw notFound();
    return { node };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found - Novibe" }, { name: "robots", content: "noindex" }] };
    }
    const { node } = loaderData;
    const description = truncateToWord(node.layer0, 155);
    return {
      meta: [
        { title: `${node.title} - Novibe` },
        { name: "description", content: description },
        { property: "og:title", content: `${node.title} - Novibe` },
        { property: "og:description", content: description },
      ],
    };
  },
  notFoundComponent: NodeNotFound,
  component: NodePage,
});

function NodeNotFound() {
  return (
    <div className="py-16 text-center">
      <h1 className="text-lg font-semibold">Node not found</h1>
      <Link to="/" className="mt-3 inline-block text-primary underline">
        Back to the map
      </Link>
    </div>
  );
}

function NodePage() {
  const { node } = Route.useLoaderData() as { node: NodeContent };
  const { isGot, toggleGot, state, saveReflection, hydrated } = useMapState();
  const router = useRouter();
  const navigate = useNavigate();
  const got = isGot(node.id);
  const [reflection, setReflection] = useState("");

  useEffect(() => {
    if (hydrated) setReflection(state.reflections[node.id] ?? "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hydrated, node.id]);

  const cluster = CLUSTERS.find((c) => c.id === node.cluster)!;
  const nodeIndex = NODES.findIndex((n) => n.id === node.id);
  const prevNode = nodeIndex > 0 ? NODES[nodeIndex - 1] : undefined;
  const nextNode = nodeIndex >= 0 && nodeIndex < NODES.length - 1 ? NODES[nodeIndex + 1] : undefined;

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || (e.target as HTMLElement | null)?.isContentEditable) {
        return;
      }
      if (e.key === "ArrowLeft" && prevNode) {
        navigate({ to: "/node/$nodeId", params: { nodeId: prevNode.id } });
      } else if (e.key === "ArrowRight" && nextNode) {
        navigate({ to: "/node/$nodeId", params: { nodeId: nextNode.id } });
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [prevNode, nextNode, navigate]);

  const buildsOn = (node.buildsOn as string[])
    .map((id: string) => NODES.find((n) => n.id === id))
    .filter((n): n is (typeof NODES)[number] => Boolean(n));
  const seeAlso = (node.seeAlso ?? [])
    .map((id: string) => NODES.find((n) => n.id === id))
    .filter((n): n is (typeof NODES)[number] => Boolean(n));

  return (
    <article className="pb-4">
      <button
        type="button"
        onClick={() => router.history.back()}
        className="mb-4 inline-flex items-center gap-1 font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        back
      </button>

      <header className="mb-6">
        <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
          {node.id.toUpperCase()} · {cluster.title}
        </div>
        <h1 className="mt-1 text-[24px] font-semibold leading-tight tracking-tight text-foreground">
          {node.title}
        </h1>
        {buildsOn.length > 0 && (
          <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
            <span className="font-mono uppercase tracking-[0.14em]">builds on:</span>
            {buildsOn.map((b) => (
              <Link
                key={b.id}
                to="/node/$nodeId"
                params={{ nodeId: b.id }}
                className="inline-flex items-center gap-0.5 rounded-md border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] text-foreground hover:border-primary hover:text-primary"
              >
                {b.id.toUpperCase()}
                <ChevronRight className="h-3 w-3" />
              </Link>
            ))}
            <span className="text-[10px] italic text-muted-foreground/70">
              (soft - not required)
            </span>
          </div>
        )}
      </header>

      <Layer
        tag="Layer 0"
        subtitle="Plain English · 60 sec"
        tone="primary"
        body={node.layer0}
      />
      {node.diagram && (
        <figure
          className="mb-4 overflow-hidden rounded-xl border border-border bg-transparent p-4"
          role="img"
          aria-label={`Diagram for ${node.title}`}
          dangerouslySetInnerHTML={{ __html: node.diagram }}
        />
      )}
      <Layer
        tag="Layer 1"
        subtitle="How it actually works"
        tone="accent"
        body={node.layer1}
      />
      <Layer
        tag="Layer 2"
        subtitle="Try it / see it"
        tone="warning"
        body={node.layer2}
      />
      {node.resources && node.resources.length > 0 && (
        <div className="mt-1 flex flex-col gap-1.5">
          {node.resources.map((r) => (
            <a
              key={r.url}
              href={r.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-[12px] text-primary hover:underline"
            >
              <ExternalLink className="h-3.5 w-3.5 shrink-0" />
              <span className="font-mono uppercase tracking-[0.12em] text-muted-foreground">
                {RESOURCE_VERB[r.type]}:
              </span>
              <span className="truncate">{r.title}</span>
              <span className="shrink-0 text-[10px] text-muted-foreground/70">— {r.source}</span>
            </a>
          ))}
        </div>
      )}

      {seeAlso.length > 0 && (
        <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] text-muted-foreground">
          <span className="font-mono uppercase tracking-[0.14em]">see also:</span>
          {seeAlso.map((n) => (
            <Link
              key={n.id}
              to="/node/$nodeId"
              params={{ nodeId: n.id }}
              className="inline-flex items-center gap-0.5 rounded-md border border-border bg-muted/50 px-1.5 py-0.5 font-mono text-[10px] text-foreground hover:border-primary hover:text-primary"
              title={n.title}
            >
              {n.id.toUpperCase()}
              <ChevronRight className="h-3 w-3" />
            </Link>
          ))}
        </div>
      )}

      <div className="mt-8 flex justify-center">
        <button
          type="button"
          onClick={() => toggleGot(node.id)}
          className={
            "inline-flex items-center gap-2 rounded-full border px-5 py-2.5 font-mono text-[12px] uppercase tracking-[0.14em] shadow-sm transition-all " +
            (got
              ? "border-primary bg-primary text-primary-foreground hover:bg-primary/90"
              : "border-border bg-card text-foreground hover:border-primary hover:text-primary")
          }
        >
          <Check className="h-4 w-4" />
          {got ? "got it" : "mark as got it"}
        </button>
      </div>

      <div className="mt-6">
        <label
          htmlFor="reflection"
          className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground"
        >
          your one-line takeaway
          <span className="ml-2 text-[10px] normal-case tracking-normal text-muted-foreground/60">
            (optional, autosaved)
          </span>
        </label>
        <textarea
          id="reflection"
          value={reflection}
          onChange={(e) => setReflection(e.target.value)}
          onBlur={() => {
            if (hydrated && (state.reflections[node.id] ?? "") !== reflection) {
              saveReflection(node.id, reflection);
            }
          }}
          placeholder="what stuck with you?"
          rows={2}
          spellCheck={false}
          className="w-full resize-none rounded-lg border border-border bg-card px-3 py-2 text-[13px] leading-6 text-foreground caret-primary outline-none placeholder:text-muted-foreground/60 focus:border-primary"
        />
      </div>

      <div className="mt-8 flex items-stretch gap-2 border-t border-border pt-4">
        {prevNode ? (
          <Link
            to="/node/$nodeId"
            params={{ nodeId: prevNode.id }}
            className="flex flex-1 items-center gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-left transition-colors hover:border-primary"
          >
            <ArrowLeft className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <span className="min-w-0">
              <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                {prevNode.id.toUpperCase()}
              </span>
              <span className="block truncate text-[12px] text-foreground">{prevNode.title}</span>
            </span>
          </Link>
        ) : (
          <div className="flex-1" />
        )}
        {nextNode ? (
          <Link
            to="/node/$nodeId"
            params={{ nodeId: nextNode.id }}
            className="flex flex-1 items-center justify-end gap-2 rounded-lg border border-border bg-card px-3 py-2.5 text-right transition-colors hover:border-primary"
          >
            <span className="min-w-0">
              <span className="block font-mono text-[9px] uppercase tracking-[0.14em] text-muted-foreground">
                {nextNode.id.toUpperCase()}
              </span>
              <span className="block truncate text-[12px] text-foreground">{nextNode.title}</span>
            </span>
            <ArrowRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
          </Link>
        ) : (
          <div className="flex-1" />
        )}
      </div>
    </article>
  );
}

function Layer({
  tag,
  subtitle,
  body,
  tone,
}: {
  tag: string;
  subtitle: string;
  body: string;
  tone: "primary" | "accent" | "warning";
}) {
  const toneClasses = {
    primary: "text-primary border-primary/30 bg-primary/[0.04]",
    accent: "text-accent border-accent/30 bg-accent/[0.04]",
    warning: "text-warning border-warning/40 bg-warning/[0.05]",
  }[tone];
  return (
    <section className={"mb-4 rounded-xl border p-4 " + toneClasses}>
      <div className="flex items-baseline justify-between gap-3">
        <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.18em]">
          {tag}
        </span>
        <span className="text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
          {subtitle}
        </span>
      </div>
      <p className="mt-2 text-[14px] leading-relaxed text-foreground">{body}</p>
    </section>
  );
}
