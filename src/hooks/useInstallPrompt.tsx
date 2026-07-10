import { useCallback, useEffect, useState } from "react";

// Chrome/Edge/Android fire this before showing their own install UI. Capturing
// it lets us trigger the native "Install app" prompt from our own button.
type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export type InstallPlatform = "ios" | "android" | "desktop" | "unknown";

function detectPlatform(): InstallPlatform {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent;
  const isIOS =
    /iPad|iPhone|iPod/.test(ua) ||
    // iPadOS 13+ reports as "MacIntel" but has touch support, unlike a real Mac.
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (isIOS) return "ios";
  if (/Android/.test(ua)) return "android";
  if (/Win|Mac|Linux/.test(navigator.platform || "")) return "desktop";
  return "unknown";
}

function detectStandalone(): boolean {
  if (typeof window === "undefined") return false;
  const displayModeStandalone = window.matchMedia("(display-mode: standalone)").matches;
  const iosStandalone =
    (window.navigator as unknown as { standalone?: boolean }).standalone === true;
  return displayModeStandalone || iosStandalone;
}

/**
 * Exposes whether/how the app can be installed to the home screen.
 * - Chromium browsers (Chrome, Edge, Samsung Internet, Android Chrome): `canPrompt`
 *   is true once the browser fires `beforeinstallprompt`; call `promptInstall()`.
 * - iOS Safari never fires that event, so callers should fall back to showing
 *   manual "Add to Home Screen" instructions for `platform === "ios"`.
 */
export function useInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [platform, setPlatform] = useState<InstallPlatform>("unknown");

  useEffect(() => {
    setIsStandalone(detectStandalone());
    setPlatform(detectPlatform());

    function handleBeforeInstallPrompt(e: Event) {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
    }
    function handleAppInstalled() {
      setDeferredPrompt(null);
      setIsStandalone(true);
    }

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);
    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const promptInstall = useCallback(async () => {
    if (!deferredPrompt) return "unavailable" as const;
    await deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    setDeferredPrompt(null);
    return outcome;
  }, [deferredPrompt]);

  return {
    platform,
    isStandalone,
    canPrompt: deferredPrompt !== null,
    promptInstall,
  };
}
