/* Raw Material Label System - offline service worker
   Cache ka naam har release par badlein, warna purani file serve hoti rahegi. */
const CACHE = 'rmls-v2.4.0-2';

const SHELL = [
  './raw_material_label_generator.html',
  './manifest.webmanifest',
  './icons/icon.svg',
  './icons/icon-192.png',
  './icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;

  /* Page navigation: pehle internet, offline/error hone par cache. */
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then(res => {
          if (!res || !res.ok) throw new Error('network');
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
          return res;
        })
        .catch(() => caches.match(req).then(hit => hit || caches.match('./raw_material_label_generator.html')))
    );
    return;
  }

  /* Baaki assets: cache first. */
  e.respondWith(
    caches.match(req).then(hit => {
      if (hit) return hit;
      return fetch(req).then(res => {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(req, copy)).catch(() => {});
        return res;
      });
    })
  );
});
