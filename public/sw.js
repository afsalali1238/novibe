// Minimal service worker: caches the app shell so the install prompt is
// eligible everywhere and the app has basic offline fallback. Not a full
// offline-first strategy - just network-first with a cache fallback.
//
// Bump CACHE_NAME whenever this file changes so installed/offline clients
// pick up the new logic instead of running a stale, possibly-broken worker.
const CACHE_NAME = "novibe-shell-v2";
const APP_SHELL = [
  "/",
  "/manifest.json",
  "/novibe-icon-192.png",
  "/novibe-icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      // cache.addAll() is all-or-nothing - one failed URL (e.g. a
      // transient network blip on an icon) would silently wipe out the
      // *entire* precache, including "/", leaving nothing to fall back to
      // offline. Cache each URL independently instead.
      Promise.all(
        APP_SHELL.map((url) =>
          cache.add(url).catch((err) => {
            console.warn("[sw] precache failed for", url, err);
          }),
        ),
      ),
    ),
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))),
      )
      .then(() => self.clients.claim()),
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  event.respondWith(
    fetch(event.request)
      .then((response) => {
        const copy = response.clone();
        caches
          .open(CACHE_NAME)
          .then((cache) => cache.put(event.request, copy))
          .catch(() => {});
        return response;
      })
      .catch(
        () =>
          caches.match(event.request).then((cached) => cached || caches.match("/")) as Promise<
            Response | undefined
          >,
      ),
  );
});
