import { Link, useRouterState } from "@tanstack/react-router";
import { BookOpen, LineChart, Wrench } from "lucide-react";

const tabs = [
  { to: "/", label: "Syllabus", Icon: BookOpen },
  { to: "/sandbox", label: "Sandbox", Icon: Wrench },
  { to: "/stats", label: "Stats", Icon: LineChart },
] as const;

export function BottomNav() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-border/70 bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-2xl items-stretch gap-1 px-3 pb-[max(env(safe-area-inset-bottom),0.35rem)] pt-2">
        {tabs.map(({ to, label, Icon }) => {
          const active = to === "/" ? pathname === "/" : pathname.startsWith(to);
          return (
            <Link
              key={to}
              to={to}
              className={
                "group flex flex-1 flex-col items-center gap-0.5 rounded-lg px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] transition-colors " +
                (active ? "bg-primary/10 text-primary" : "text-muted-foreground hover:text-foreground")
              }
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={active ? 2.25 : 1.75} />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}