const URLS = [
  '/',
  '/assets/images/bg-left.png',
  '/assets/images/bg-right.png',
  '/assets/images/error.svg',
  '/assets/images/footer.png',
  '/assets/images/game.gif',
  '/assets/index.js',
  '/assets/images/jungle_tileset.png',
  '/assets/images/rate_minus.svg',
  '/assets/images/rate_plus.svg',
  '/assets/images/sort.svg',
  '/assets/startGame.png',
  '/assets/images/user.svg',
  '/assets/sprites/hero/idle1.png',
  '/assets/fonts/04b03.woff',
  '/assets/fonts/04b03.woff2',
  '/assets/fonts/OpenSans-Medium.woff',
  '/assets/fonts/OpenSans-Medium.woff2',
  '/assets/fonts/OpenSans-Regular.woff',
  '/assets/fonts/OpenSans-Regular.woff2',
  '/assets/fonts/Oswald-Medium.woff',
  '/assets/fonts/Oswald-Medium.woff2',
  '/assets/fonts/Oswald-Regular.woff',
  '/assets/fonts/Oswald-Regular.woff2',
  '/assets/fonts/Oswald-SemiBold.woff',
  '/assets/fonts/Oswald-SemiBold.woff2',
  'sw.js',
]
const CACHE_NAME = 'JungleDanger_v1'

self.addEventListener('install', event => {
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(URLS)
      })
      .catch(err => {
        throw err
      })
  )
})

self.addEventListener('activate', function (event) {
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
    const title = 'Push message test'
    const options = {
      body: event.data.text(),
    }

    event.waitUntil(self.registration.showNotification(title, options))
  }
})
