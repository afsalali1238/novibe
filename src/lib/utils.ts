import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateToWord(str: string, maxLength: number): string {
  if (str.length <= maxLength) return str;
  const sliced = str.slice(0, maxLength);
  const lastSpace = sliced.lastIndexOf(" ");
  if (lastSpace > 0) {
    return sliced.slice(0, lastSpace) + "...";
  }
  return sliced + "...";
}
