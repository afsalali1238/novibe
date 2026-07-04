export type Level = { name: string; min: number };

export const LEVELS: Level[] = [
  { name: "Prompt Novice", min: 0 },
  { name: "Schema Wrangler", min: 150 },
  { name: "Skill Builder", min: 400 },
  { name: "Agent Operator", min: 800 },
  { name: "Orchestrator", min: 1300 },
  { name: "Agent Architect", min: 2000 },
];

export function levelFor(xp: number) {
  let idx = 0;
  for (let i = 0; i < LEVELS.length; i++) if (xp >= LEVELS[i].min) idx = i;
  const current = LEVELS[idx];
  const next = LEVELS[idx + 1];
  const floor = current.min;
  const ceiling = next?.min ?? current.min + 500;
  const progress = next ? (xp - floor) / (ceiling - floor) : 1;
  return {
    index: idx,
    name: current.name,
    next: next?.name ?? null,
    floor,
    ceiling,
    progress: Math.max(0, Math.min(1, progress)),
    xpToNext: next ? Math.max(0, ceiling - xp) : 0,
  };
}

export const XP_PER_DAY = 15;
export const XP_PER_CHALLENGE = 100;