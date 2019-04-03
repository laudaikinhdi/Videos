// import { WorkboxSW } from "workbox-sw/controllers/WorkboxSW.mjs";

// importScripts('./node_modules/workbox-sw/build/workbox-sw.js');

const staticAssets = [
    './',
    './styles.css',
    './app.js',
    './fallback.json',
    './images/fetch-dog.jpg'
];

// const wb = new WorkboxSW();
// wb.precache(staticAssets);

self.addEventListener('install', async event => {
    const cache = await caches.open('news-static');
    cache.addAll(staticAssets);
    console.log('Install');
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);
    if(url.origin === location.origin) {
        event.respondWith(cacheFirst(req));
    }else {
        event.respondWith(neworkFirst(req));
    }
    console.log('fetch');
});

async function cacheFirst(req) {
    const cacheResponse = await caches.match(req);

    return cacheResponse || fetch(req);
}

async function neworkFirst(req) {
    const cache = await caches.open('news-dynamic');
    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        const cacheResponse = await cache.match(req);
        return cacheResponse || await caches.match('./fallback.json');
    }
}

