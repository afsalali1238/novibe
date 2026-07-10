import { useEffect } from "react";
import { useRouter } from "@tanstack/react-router";
import { NODES } from "../data/nodes";

/**
 * Once the service worker is controlling the page, silently preload every
 * route's code chunk - not just the ones the user has already opened - so
 * the installed app works fully offline right away.
 *
 * Node content itself (all layers, quizzes, resources) is static data
 * bundled into the JS, not fetched per-node, so there's nothing to warm
 * per node id: every `/node/$nodeId` URL is served by the same route chunk.
 * Preloading it once (with any valid id) is enough to make every node page
 * available offline.
 */
export function useOfflineWarmup() {
  const router = useRouter();

  useEffect(() => {
    if (typeof navigator === "undefined" || !("serviceWorker" in navigator)) return;
    if (navigator.onLine === false) return;

    let cancelled = false;

    async function warm() {
      try {
        // Wait until a service worker is actually active and controlling
        // fetches - preloading before that would just hit the network
        // without landing in our offline cache.
        await navigator.serviceWorker.ready;
      } catch {
        return;
      }
      if (cancelled) return;

      await router.preloadRoute({ to: "/glossary" }).catch(() => {});
      if (cancelled) return;
      await router.preloadRoute({ to: "/stats" }).catch(() => {});
      if (cancelled) return;
      await router.preloadRoute({ to: "/sandbox" }).catch(() => {});
      if (cancelled) return;

      const firstNodeId = NODES[0]?.id;
      if (firstNodeId) {
        await router
          .preloadRoute({ to: "/node/$nodeId", params: { nodeId: firstNodeId } })
          .catch(() => {});
      }
    }

    // Give the initial page its own bandwidth before warming the rest.
    const timer = window.setTimeout(warm, 1500);
    return () => {
      cancelled = true;
      window.clearTimeout(timer);
    };
  }, [router]);
}
