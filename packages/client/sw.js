const URLS = [
  '/',
  '/assets/bg-left.png',
  '/assets/bg-right.png',
  '/assets/error.svg',
  '/assets/footer.png',
  '/assets/game.gif',
  '/assets/index.js',
  '/assets/jungle_tileset.png',
  '/assets/rate_minus.svg',
  '/assets/rate_plus.svg',
  '/assets/sort.svg',
  '/assets/startGame.png',
  '/assets/user.svg',
  '/assets/sprites/hero/idle1.png',
  'vite.svg',
  '/fonts/04B03.TTF',
  '/fonts/OpenSans-Medium.woff',
  '/fonts/OpenSans-Medium.woff2',
  '/fonts/OpenSans-Regular.woff',
  '/fonts/OpenSans-Regular.woff2',
  '/fonts/Oswald-Medium.woff',
  '/fonts/Oswald-Medium.woff2',
  '/fonts/Oswald-Regular.woff',
  '/fonts/Oswald-Regular.woff2',
  '/fonts/Oswald-SemiBold.woff',
  '/fonts/Oswald-SemiBold.woff2',
  'sw.js',
]
const CACHE_NAME = 'JungleDanger_v1'

self.addEventListener('install', event => {
  console.log('[Service Worker] Installing', event)

  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        console.log('[Service Worker] Opened cache')
        return cache.addAll(URLS)
      })
      .catch(err => {
        console.log(err)
        throw err
      })
  )
})

self.addEventListener('activate', function (event) {
  console.log('[Service Worker] Activate', event)

  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames
          .filter(name => name !== CACHE_NAME)
          .map(name => caches.delete(name))
      )
    })
  )
})

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      if (response) {
        return response
      }

      const fetchRequest = event.request.clone()
      return fetch(fetchRequest, { cache: 'no-store' }).then(response => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response
        }

        const responseToCache = response.clone()
        caches.open(CACHE_NAME).then(cache => {
          if (event.request.url.startsWith('http')) {
            cache.put(event.request, responseToCache)
          }
        })
        return response
      })
    })
  )
})

self.addEventListener('push', function (event) {
  if (Notification.permission === 'granted') {
    console.log('[Service Worker] Push Received.')
    console.log(`[Service Worker] Push had this data: "${event.data.text()}"`)

    const title = 'Push message test'
    const options = {
      body: event.data.text(),
    }

    event.waitUntil(self.registration.showNotification(title, options))
  }
})
