const CACHE_NAME = 'tfk-app-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './logo192.png',
    './logo512.png',
    './fonts/ChangaOne-Regular.ttf',
    './fonts/LemonMilk.otf',
    './fonts/LemonMilkbold.otf',
    './fonts/LemonMilkbolditalic.otf',
    './fonts/LemonMilklight.otf',
    './fonts/LemonMilklightitalic.otf'
    // CSS and JS files will be cached dynamically
];

// Install event - cache assets
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
    self.skipWaiting();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                    // Cache hit - return response
                    if (response) {
                        return response;
                    }
                    return fetch(event.request);
                }
            )
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.map((cacheName) => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});
