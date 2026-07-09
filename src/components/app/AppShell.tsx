import type { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { TopBar } from "./TopBar";

export function AppShell({ children }: { children: ReactNode }) {
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
