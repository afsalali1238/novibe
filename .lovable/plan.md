## No-Code AI & Agentic Engineering — Build Plan

A dark, terminal-styled mobile-first PWA that gamifies the 6-week "AI Orchestrator's Blueprint" curriculum (parsed from the uploaded report). All progress persists to `localStorage`.

### Tech & Styling
- TanStack Start (existing stack), React, TypeScript, Tailwind v4.
- Fonts loaded via `<link>` in `__root.tsx`: `Inter` (UI) + `JetBrains Mono` (code/textareas).
- Design tokens in `src/styles.css`: deep slate/near-black backgrounds (`--background: oklch(0.14 0.02 260)`), neon accents — electric blue (primary), vibrant purple (level/xp), terminal green (success/streak), amber (warning). All colors via semantic tokens — no hardcoded hex in components.
- Vercel/Linear feel: tight typography, subtle 1px borders using `color-mix`, soft glow shadows on accents.

### Curriculum Data
Extract from parsed docx into `src/data/curriculum.ts` as a typed const:
```
weeks: [
  { id: 'wk1', title: 'AI Fundamentals & High-Level Prompting', focus, days: [{id:'wk1-day1', topic, coreConcept, resourceQuery}, ...×7], challenge: { scenario, instructions, validationKey, language: 'xml' } },
  wk2 Advanced Prompting & Structuring (JSON schema challenge),
  wk3 Claude Skills & Reusable Workflows (SKILL.md challenge),
  wk4 The Agent Loop in No-Code ($fromAI challenge),
  wk5 Tool Use & Function Calling (billing tool schema challenge),
  wk6 Memory, Self-Correction & Systemization (Verifier prompt challenge),
]
```
Resource links use a Google search URL built from the report's `[Search: "..."]` queries (opened with `target="_blank" rel="noopener"`).

### State — `useCourseState` hook
Single hook wrapping a reducer, synced to `localStorage` key `noco-ai-course-v1`:
```
{ xp:number, streak:number, lastActiveDate:string|null,
  completedDays:string[],           // 'wk1-day1'
  completedChallenges:string[],     // 'wk1'
  playgroundDrafts:Record<weekId,string>,
  globalNotes:string }
```
- `toggleDay(id)`: adds/removes, +15/−15 XP, triggers streak update.
- `submitChallenge(weekId)`: +100 XP once, marks completed, reveals validation key.
- `saveDraft(weekId, text)` / `saveNotes(text)`: debounced writes.
- Streak logic on mount: if `lastActiveDate` = yesterday → increment; if today → keep; else reset to 1. Update whenever a task completes.
- Levels derived from XP: Prompt Novice (0) → Schema Wrangler (150) → Skill Builder (400) → Agent Operator (800) → Orchestrator (1300) → Agent Architect (2000+).

### Layout
- `AppShell` in `__root.tsx`'s route component wraps `<Outlet />` with fixed `TopBar` + `BottomNav` and safe-area padding.
- **TopBar (fixed top):** app title (mono), level badge, XP with tiny progress bar to next level, flame streak counter.
- **BottomNav (fixed bottom):** 3 tabs — Syllabus (`/`), Sandbox (`/sandbox`), Stats (`/stats`).

### Routes
- `src/routes/index.tsx` — Syllabus timeline. Vertical feed of 6 `WeekCard`s (collapsible, week 1 open by default). Each day is a `DayRow` with checkbox, topic, resource link (opens Google search in new tab), and a subtle color-pulse animation on toggle. Each week card footers a "⚡ Weekly Challenge" button linking to `/playground/$weekId`.
- `src/routes/playground.$weekId.tsx` — Full-screen challenge panel. Sticky header (scenario + instructions), monospace `<textarea>` styled as an IDE (dark bg, faux line-number gutter using a pseudo-element, JetBrains Mono, tab-inserts-spaces). "Run Logic / Submit" button. On submit: award XP (once), slide-up console drawer (Motion for React) revealing the Hidden Validation Key with syntax-highlighted `<pre>` and a Copy button. Draft persists live via `saveDraft`.
- `src/routes/sandbox.tsx` — Full-height scratchpad textarea bound to `globalNotes`, autosaved. Small helper toolbar (clear, character count).
- `src/routes/stats.tsx` — Architect Stats: level card, XP progress bar to next level, streak, totals (days done X/42, challenges done X/6), per-week completion bars, reset-progress button (confirm dialog).

### Micro-interactions
- Checkbox: Tailwind transition + one-shot pulse ring in accent color.
- XP change: brief `+15 XP` floater above TopBar XP badge.
- Motion for React only where meaningful (challenge console slide-up, week collapse). No page-wide fade-ins.

### Metadata
- `__root.tsx` head: title "No-Code AI & Agentic Engineering — Orchestrator's Blueprint"; matching description, og:*, twitter:card.

### Files to add
- `src/data/curriculum.ts`
- `src/hooks/useCourseState.ts` (+ context provider)
- `src/lib/levels.ts`
- `src/components/app/{TopBar,BottomNav,AppShell,WeekCard,DayRow,XpToast,CodeEditor,ConsoleDrawer,LevelBadge,StreakChip}.tsx`
- Routes: `index.tsx` (rewrite), `sandbox.tsx`, `stats.tsx`, `playground.$weekId.tsx`
- Update `src/routes/__root.tsx` (fonts, meta, AppShell, provider)
- Update `src/styles.css` (dark theme tokens, mono font token, code utility)

### Out of scope
No backend, no auth, no AI calls — validation key is a static reveal from the curriculum data (per spec).
