/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-e6dc3d685776f38f395c.js"
  },
  {
    "url": "framework-68f6928aa3a210cb03a1.js"
  },
  {
    "url": "styles.1b463baef625efe7cd37.css"
  },
  {
    "url": "app-315e71e1087da1cba8ee.js"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "bc452622f3318c53a8eb46ce09d1dee7"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-93b3115dbb3ad36e5898.js"
  },
  {
    "url": "polyfill-4e7841856f39e0aa3e5a.js"
  },
  {
    "url": "17d22441-8c33170056def723e501.js"
  },
  {
    "url": "e183fe67-f5c3525ca031006ec42d.js"
  },
  {
    "url": "b0d73d0bfa1e29aba93caf471b38f73cc4be4739-44c48a52578b13b0c06a.js"
  },
  {
    "url": "41da4e8d84deca061cb33e079e2580f6b256fd4f-348e9e7f75a8fb477206.js"
  },
  {
    "url": "652232b3a713ea4e5511641430f7acfcd0c87aba-8cb952daa792b5975859.js"
  },
  {
    "url": "component---src-pages-about-tsx-2d78f80dfcb0cfe99226.js"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "e9eb0bb9dda0e5b351104b8a3d19a5fe"
  },
  {
    "url": "page-data/sq/d/2353828829.json",
    "revision": "b6b43fa56bb40d6950dcd5cc2b100413"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "dbeff22ed9d6bcaad179ee198b3c7c96"
  },
  {
    "url": "component---src-pages-portfolio-tsx-37e4a377d7853481f50a.js"
  },
  {
    "url": "page-data/portfolio/page-data.json",
    "revision": "da87a35e2538deb0312f0dadbaf6e06f"
  },
  {
    "url": "component---src-page-template-blog-post-list-template-tsx-b319f7362385e762c4e3.js"
  },
  {
    "url": "page-data/blog/1/page-data.json",
    "revision": "761d9fc75cffe3a7aea52f1a08ff2146"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/.*\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|avif|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/app-315e71e1087da1cba8ee.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
