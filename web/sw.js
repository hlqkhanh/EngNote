const CACHE_NAME = "toeic-part5-v2";
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./study-engine.js",
  "./cloud-sync.js",
  "./supabase-config.js",
  "./manifest.webmanifest",
  "./icons/app-icon.svg",
  "./vendor/ts-fsrs-5.4.2.umd.js",
  "./data/tests.js",
  "./data/errors.js",
  "./data/weak-topics.js",
  "./data/theory.js",
  "./data/vocabulary.js",
  "./data/quiz.js",
  "./data/study.js"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(APP_SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(
    fetch(event.request)
      .then(response => {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
        return response;
      })
      .catch(() => caches.match(event.request).then(cached => cached || caches.match("./index.html")))
  );
});
