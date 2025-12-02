const CACHE_NAME = 'samrat-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
];

// Install event
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
      .then(() => self.skipWaiting())
  );
});

// Activate event
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch event - Network first strategy with cache fallback
self.addEventListener('fetch', event => {
  const { request } = event;
  
  // Skip POST requests and API calls to backend
  if (request.method !== 'GET' || request.url.includes('/api/')) {
    return;
  }
  
  event.respondWith(
    fetch(request)
      .then(response => {
        // Clone the response
        const responseClone = response.clone();
        
        // Cache successful requests
        caches.open(CACHE_NAME).then(cache => {
          cache.put(request, responseClone);
        });
        
        return response;
      })
      .catch(() => {
        // Return cached version if network fails
        return caches.match(request)
          .then(response => response || caches.match('/index.html'));
      })
  );
});

// Handle messages
self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

console.log('SAMRAT Service Worker loaded!');}
