// Minimal service worker: caches the app shell so the install prompt is
// eligible everywhere and the app has basic offline fallback. Not a full
// offline-first strategy - just network-first with a cache fallback.
const CACHE_NAME = "novibe-shell-v1";
const APP_SHELL = [
  "/",
  "/manifest.json",
  "/novibe-icon-192.png",
  "/novibe-icon-512.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => cache.addAll(APP_SHELL))
      .catch(() => {
        /* best-effort precache; ignore failures */
      }),
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
