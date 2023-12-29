const CACHE_NAME = "version-1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/static/js/bundle.js",
  "/static/js/0.chunk.js",
  "/static/js/main.chunk.js",
  "/static/js/787.4011f769.chunk.js",
  "/static/js/main.e6227ddf.js",
  "/static/css/main.3e6eb097.css",
  "/static/media/capa.54d9defe78cc01ffedde.png",
  "/static/media/leve1_1.53b672f0d9c91ba88254.png",
  "/static/media/level1.b3fc561ae2d3839ea292.png",
  "/static/media/level1_2.483e65c197204f3de42c.png",
  "/static/media/level1_3.91dfb701d3c0170561c4.png",
  "/static/media/level2.b72110caa1fc09703174.png",
  "/static/media/level2_1.6b90568b691370838cbf.png",
  "/static/media/level2_2.bc37834fdb7a1c66d98a.png",
  "/static/media/level2_3.3b1c5d2251e5592b21bb.png",
  "/static/media/level2_4.e00f11e1ebd0eb5945f5.png",
  "/static/media/level2_5.03a68df6893f4a68fe85.png",
  "/static/media/level3.5a4221fa7e52f57f3d87.png",
  "/static/media/level3_1.cf80a3d89adcb701efee.png",
  "/static/media/level3_10.2a261687e0aa2cb50a48.png",
  "/static/media/level3_11.0b7b02555406892fa517.png",
  "/static/media/level3_12.046cc67b733b8a7bf908.png",
  "/static/media/level3_13.366a230d6cc072debe65.png",
  "/static/media/level3_14.df56c922a794ee711f38.png",
  "/static/media/level3_2.fb87efb2546202d89f62.png",
  "/static/media/level3_3.b707e5ba5c388dae7c67.png",
  "/static/media/level3_4.7d8cbb0aab170415bb0f.png",
  "/static/media/level3_5.2c3efab131149aeda372.png",
  "/static/media/level3_6.1b6248fad2688766f1ba.png",
  "/static/media/level3_7.5f0ab8abf701b0601d62.png",
  "/static/media/level3_8.71994f45f4797ec4b030.png",
  "/static/media/level3_9.77428e39e11ba70e72fc.png",
  "/static/media/level4.fd6ee614f80c64dd3021.png",
  "/static/media/level4_1.a0893e52dd614b8787ca.png",
  "/static/media/level4_10.a53f2966f73f65ba9e2b.png",
  "/static/media/level4_11.90dbb8b0aec6a12f75bc.png",
  "/static/media/level4_12.0af6d66bf4ac05ddd426.png",
  "/static/media/level4_13.f13e4c8afe8f28a607a0.png",
  "/static/media/level4_14.f13e4c8afe8f28a607a0.png",
  "/static/media/level4_2.3b97d1637c965d45d881.png",
  "/static/media/level4_3.94c86bd998e6757063d1.png",
  "/static/media/level4_4.5ee67d613743e6365f85.png",
  "/static/media/level4_5.25d586bd8357ef728260.png",
  "/static/media/level4_6.de941083a49c3570b42e.png",
  "/static/media/level4_7.70403358aa4225d656ce.png",
  "/static/media/level4_9.1dd4e8154af5d71b8c29.png",
  "/static/media/win_level.4ef895937597378c844a.png",
  "static/logo192.png",
  "static/logo512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Opened cache");
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request).catch(() => {
        
        return caches.match("/index.html");
      });
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
