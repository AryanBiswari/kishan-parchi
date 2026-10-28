const CACHE_NAME = 'parchi-app-v1';
const urlsToCache = [
    './',
    './index.html',
    './manifest.json',
    './icon-192.png',
    './icon-512.png'
];

// इंस्टॉल करते समय फाइलों को कैश (सेव) करना
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

// बिना इंटरनेट (Offline) के डेटा सर्व करना
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                // अगर फाइल कैश में है, तो वही दिखाओ (Offline)
                if (response) {
                    return response;
                }
                // वरना इंटरनेट से लाओ
                return fetch(event.request);
            })
    );
});