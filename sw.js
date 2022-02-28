var cacheName = 'educaty-code-editor';
var filesToCache = [
  '/',
  '/index.html',
  '/css/custom.css',
  '/css/bootstrap.min.css',
  '/js/editor.js',
  '/js/main.js',
  '/js/query.js'
];

/* Start the service worker and cache all of the app's content */
self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.addAll(filesToCache);
    })
  );
  self.skipWaiting();
});

/* Serve cached content when offline */
self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
