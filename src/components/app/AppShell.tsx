import { useEffect, type ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { TopBar } from "./TopBar";
import { useOfflineWarmup } from "../../hooks/useOfflineWarmup";

export function AppShell({ children }: { children: ReactNode }) {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* offline/install support is a nice-to-have, not critical */
      });
    }
  }, []);

  // Silently preloads every route's code so the installed app works fully
  // offline, not just the pages the user happened to open first.
  useOfflineWarmup();

  return (
    <div className="min-h-dvh bg-background text-foreground">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-md focus:bg-primary focus:px-3 focus:py-2 focus:text-[13px] focus:font-medium focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <TopBar />
      <main id="main-content" className="mx-auto max-w-2xl px-4 pb-28 pt-4">
        {children}
      </main>
      <BottomNav />
    </div>
  );
}
