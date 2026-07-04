import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { AppShell } from "../components/app/AppShell";
import { CourseStateProvider } from "../hooks/useCourseState";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "No-Code AI & Agentic Engineering — Orchestrator's Blueprint" },
      {
        name: "description",
        content:
          "A gamified 6-week curriculum for building autonomous AI agents in n8n and Make.com. Earn XP, keep your streak, and ship the Zero-Touch Orchestrator.",
      },
      { name: "author", content: "The AI Orchestrator's Blueprint" },
      { name: "theme-color", content: "#0b1020" },
      {
        property: "og:title",
        content: "No-Code AI & Agentic Engineering — Orchestrator's Blueprint",
      },
      {
        property: "og:description",
        content:
          "Gamified 6-week curriculum for no-code agentic engineering. XP, streaks, and a weekly playground.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@Lovable" },
      { property: "og:title", content: "No-Code AI & Agentic Engineering — Orchestrator's Blueprint" },
      { name: "twitter:title", content: "No-Code AI & Agentic Engineering — Orchestrator's Blueprint" },
      { name: "description", content: "A gamified 6-week curriculum for building autonomous AI agents in n8n and Make.com. Earn XP, keep your streak, and ship the Zero-Touch Orchestrator." },
      { property: "og:description", content: "A gamified 6-week curriculum for building autonomous AI agents in n8n and Make.com. Earn XP, keep your streak, and ship the Zero-Touch Orchestrator." },
      { name: "twitter:description", content: "A gamified 6-week curriculum for building autonomous AI agents in n8n and Make.com. Earn XP, keep your streak, and ship the Zero-Touch Orchestrator." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/71178353-07ac-4606-91a3-fe70f56b7be7/id-preview-d99e420e--0e1674c4-79f3-4a53-be9d-4178b68f5650.lovable.app-1783162045654.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/71178353-07ac-4606-91a3-fe70f56b7be7/id-preview-d99e420e--0e1674c4-79f3-4a53-be9d-4178b68f5650.lovable.app-1783162045654.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <CourseStateProvider>
        <AppShell>
          <Outlet />
        </AppShell>
      </CourseStateProvider>
    </QueryClientProvider>
  );
}
