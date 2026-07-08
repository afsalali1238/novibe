import { NODES, type ClusterId } from "../data/nodes";

/** Count of distinct clusters that have at least one "got it" node. */
export function clustersTouched(gotIt: string[]): number {
  return new Set(
    gotIt.map((id) => NODES.find((n) => n.id === id)?.cluster).filter(Boolean) as ClusterId[],
  ).size;
}

/** Count of activity dates within the trailing 7-day window (inclusive of today). */
export function activeThisWeek(activityDates: string[]): number {
  const weekStart = new Date();
  weekStart.setUTCDate(weekStart.getUTCDate() - 6);
  const weekStartIso = weekStart.toISOString().slice(0, 10);
  return activityDates.filter((d) => d >= weekStartIso).length;
}
