const CACHE_NAME = 'tutorials-v1';
const urlsToCache = [
  '/tutorials/',
  '/tutorials/index.html',
  '/tutorials/a-a.html',
  '/tutorials/a-t.html',
  '/tutorials/l-t.html',
  '/tutorials/m-t.html'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
