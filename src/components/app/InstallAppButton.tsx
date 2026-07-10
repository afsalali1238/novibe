import { Download, X } from "lucide-react";
import { useState } from "react";
import { useInstallPrompt, type InstallPlatform } from "../../hooks/useInstallPrompt";

const INSTRUCTIONS: Record<InstallPlatform, { title: string; steps: string[] }> = {
  ios: {
    title: "Add Novibe to your Home Screen",
    steps: [
      'Tap the Share icon in Safari\'s toolbar.',
      'Scroll down and tap "Add to Home Screen".',
      'Tap "Add" to confirm.',
    ],
  },
  android: {
    title: "Add Novibe to your Home Screen",
    steps: [
      "Tap the menu (⋮) in your browser.",
      'Tap "Add to Home screen" or "Install app".',
      "Confirm to add it.",
    ],
  },
  desktop: {
    title: "Install Novibe",
    steps: [
      "Click the install icon in the address bar (or open the browser menu).",
      'Select "Install Novibe".',
    ],
  },
  unknown: {
    title: "Add Novibe to your Home Screen",
    steps: [
      "Open your browser's menu.",
      'Look for "Add to Home screen" or "Install app".',
    ],
  },
};

export function InstallAppButton() {
  const { platform, isStandalone, canPrompt, promptInstall } = useInstallPrompt();
  const [showInstructions, setShowInstructions] = useState(false);

  // Already running as an installed app - nothing to offer.
  if (isStandalone) return null;

  async function handleClick() {
    if (canPrompt) {
      await promptInstall();
    } else {
      setShowInstructions(true);
    }
  }

  const copy = INSTRUCTIONS[platform];

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        aria-label="Install app"
        title="Install app"
        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary"
      >
        <Download className="h-3.5 w-3.5" />
      </button>

      {showInstructions && (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 px-4 pb-[max(env(safe-area-inset-bottom),1rem)] pt-4 sm:items-center"
          onClick={() => setShowInstructions(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={copy.title}
            className="w-full max-w-sm rounded-xl border border-border bg-card p-4 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-[14px] font-semibold text-foreground">{copy.title}</h2>
              <button
                type="button"
                onClick={() => setShowInstructions(false)}
                aria-label="Close"
                className="shrink-0 text-muted-foreground transition-colors hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <ol className="mt-3 flex flex-col gap-2">
              {copy.steps.map((step, i) => (
                <li
                  key={step}
                  className="flex gap-2 text-[13px] leading-relaxed text-foreground"
                >
                  <span className="font-mono text-[11px] text-muted-foreground">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      )}
    </>
  );
}
