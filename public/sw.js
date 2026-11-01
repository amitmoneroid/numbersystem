// NumSys service worker — makes the "works offline once loaded" promise real.
//
// Strategy:
//   - navigations: network first, fall back to the cached copy of that page,
//     then to the cached home page. Fresh HTML wins whenever the network is up.
//   - same-origin static assets: cache first, fill the cache on first use.
//
// The cache name is versioned; bump it when the shell changes.

const CACHE = 'numsys-v1';
const PRECACHE = ['/favicon.svg', '/site.webmanifest'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE);
      const response = await fetch('/');
      await cache.put('/', response.clone());

      // Cache the home page's hashed CSS, JS and fonts so the first visit is
      // usable offline too, not just the second one.
      const html = await response.text();
      const assets = new Set();
      for (const match of html.matchAll(/(?:href|src)="(\/(?:_astro|fonts)\/[^"]+)"/g)) {
        assets.add(match[1]);
      }
      await cache.addAll(PRECACHE);
      await Promise.all(
        [...assets].map((url) => cache.add(url).catch(() => {}))
      );
      await self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const request = event.request;
  if (request.method !== 'GET') return;

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone();
          caches.open(CACHE).then((cache) => cache.put(request, copy));
          return response;
        })
        .catch(() =>
          caches.match(request).then((cached) => cached || caches.match('/'))
        )
    );
    return;
  }

  if (
    url.pathname.startsWith('/_astro/') ||
    /\.(?:css|js|mjs|png|jpe?g|webp|avif|gif|svg|ico|woff2?|pdf)$/i.test(url.pathname)
  ) {
    event.respondWith(
      caches.match(request).then(
        (cached) =>
          cached ||
          fetch(request).then((response) => {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(request, copy));
            return response;
          })
      )
    );
  }
});
