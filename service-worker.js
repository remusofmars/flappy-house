self.addEventListener('install', (e) => {
  e.waitUntil(caches.open('flappy-house-v8').then(c => c.addAll([
    './',
    './index.html',
    './manifest.webmanifest',
    './icon-192.png',
    './icon-512.png',
    './apple-touch-icon.png'
  ])));
});
self.addEventListener('fetch', (e) => {
  e.respondWith((async () => {
    const cached = await caches.match(e.request);
    return cached || fetch(e.request);
  })());
});
