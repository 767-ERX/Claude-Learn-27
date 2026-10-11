// Service worker : l'appli marche hors ligne après la première visite.
// Incrémenter VERSION à chaque mise à jour du contenu pour forcer le rafraîchissement.
const VERSION = "prepa27-v1";
importScripts("content/index.js");
const CORE = ["./", "index.html", "styles.css", "manifest.webmanifest", "js/registry.js", "js/app.js", "js/studio-data.js",
  "content/index.js", "icons/icon.svg", "icons/icon-192.png", "icons/icon-512.png", "icons/apple-touch-icon.png"].concat(self.MODULE_FILES || []);

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => Promise.all(CORE.map(u => c.add(u).catch(() => null)))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
// Réseau d'abord (contenu toujours frais), cache en secours hors ligne.
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  const isFont = /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname);
  if (url.origin !== location.origin && !isFont) return;
  e.respondWith(
    fetch(req).then(res => {
      if (res && (res.ok || res.type === "opaque")) { const copy = res.clone(); caches.open(VERSION).then(c => c.put(req, copy)); }
      return res;
    }).catch(() => caches.match(req, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
