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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "d5ed33dbff5b69a4b8540c4bad136bf0"
  },
  {
    "url": "assets/css/0.styles.d9ac95ea.css",
    "revision": "30566f1fbfeaebcafce26f3d855ce8a2"
  },
  {
    "url": "assets/img/acs_rights.78067c78.png",
    "revision": "78067c786f97e65832a2a909c5e2d53c"
  },
  {
    "url": "assets/img/relat.8075a650.png",
    "revision": "8075a6505d59c910c82102c9005ebd04"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/srch_info_1.f5a295c9.png",
    "revision": "f5a295c997ec3884edd865f099739cde"
  },
  {
    "url": "assets/img/srch_info_3.53335f6d.png",
    "revision": "53335f6d370b89fc101dc61d59fd947f"
  },
  {
    "url": "assets/img/success_2.cd45677f.png",
    "revision": "cd45677fa217692a552436b600e192c1"
  },
  {
    "url": "assets/img/success.26259e8c.png",
    "revision": "26259e8cb404a35a83110e0824f24396"
  },
  {
    "url": "assets/img/user_add.392c544d.png",
    "revision": "392c544de9486e08c1a8e3ca26acbd0c"
  },
  {
    "url": "assets/img/user_after.f2bfa7f8.png",
    "revision": "f2bfa7f8c83b692276f725bcf41ab285"
  },
  {
    "url": "assets/img/user_before.72b8a57f.png",
    "revision": "72b8a57fbb1e0ee1222079e68cc79706"
  },
  {
    "url": "assets/img/user_rights.5d68f80a.png",
    "revision": "5d68f80ad77c5623c8bd2320debdc3ba"
  },
  {
    "url": "assets/js/10.4f9dcece.js",
    "revision": "044fbbe5fa3629fd1462efc080394c1d"
  },
  {
    "url": "assets/js/11.3ef95339.js",
    "revision": "5c1a5e44a92ea9fcdc8a43ef0f74dab7"
  },
  {
    "url": "assets/js/12.7af6f1fb.js",
    "revision": "0018e9ad2aa782ac88dcbc8d03feb676"
  },
  {
    "url": "assets/js/13.6ac848d7.js",
    "revision": "ab93f0e1a1a5c315e95e1a01f3264dcd"
  },
  {
    "url": "assets/js/14.1ef9e106.js",
    "revision": "fe29c22c40b86d8b6507c8979ac9e73d"
  },
  {
    "url": "assets/js/15.65813135.js",
    "revision": "e549b130b1db4f16ceedf0f36f0e6467"
  },
  {
    "url": "assets/js/16.f7b85732.js",
    "revision": "0104261ecf4e0f21c092dc1104448532"
  },
  {
    "url": "assets/js/17.21024541.js",
    "revision": "7b710c5cd9e1d1c38c6768c95dbbc23c"
  },
  {
    "url": "assets/js/18.fd73c38b.js",
    "revision": "323a8ae9386102fd6873d72aa7d5d056"
  },
  {
    "url": "assets/js/19.5d1f731b.js",
    "revision": "6bf7fa99e54fcebf5fff38444bb8c1db"
  },
  {
    "url": "assets/js/2.23306c76.js",
    "revision": "aa6fe3dcfc573a6474566605081f04be"
  },
  {
    "url": "assets/js/20.5a9f28a4.js",
    "revision": "ff21f4ea7f239abdd047b1e0e694eaba"
  },
  {
    "url": "assets/js/21.fcd1aa7b.js",
    "revision": "5cf4ee98eefdeafb24ecec3398161c78"
  },
  {
    "url": "assets/js/22.415230ac.js",
    "revision": "887d32a59721b22819bbe775f1dd6c29"
  },
  {
    "url": "assets/js/23.8ffd82a9.js",
    "revision": "8ce9a2c36ed1d25c8a741e16331a4147"
  },
  {
    "url": "assets/js/24.61b135f8.js",
    "revision": "acd2ce6c402b0601570764ffe3b99462"
  },
  {
    "url": "assets/js/26.6d52418c.js",
    "revision": "f119f42f31b145fdd016c40aadeab537"
  },
  {
    "url": "assets/js/3.0380b65e.js",
    "revision": "c7dbe32f87ebed33096d39ecaa26d01e"
  },
  {
    "url": "assets/js/4.88f26a93.js",
    "revision": "b86fb27ebbc57eac9a5a160b56807c51"
  },
  {
    "url": "assets/js/5.0f3b268c.js",
    "revision": "b67ffa8c3c89aa3df22b1a55bfd7bd60"
  },
  {
    "url": "assets/js/6.e0ea0291.js",
    "revision": "b58efd829c0c5245f3bd3025d90234f7"
  },
  {
    "url": "assets/js/7.8eeaac71.js",
    "revision": "1a6ab7c13a11899050ae1595a8ff277c"
  },
  {
    "url": "assets/js/8.b72590dd.js",
    "revision": "df83bce0d660afa129f45afac2f3a6c3"
  },
  {
    "url": "assets/js/9.06a604d1.js",
    "revision": "d440ccdf5d18e2a8bcef51c081450e6d"
  },
  {
    "url": "assets/js/app.4dd42823.js",
    "revision": "fd6874db1fa2748cebc9398b3e63877a"
  },
  {
    "url": "conclusion/index.html",
    "revision": "9a290b6cb68f39ef5e85cff59b794f5e"
  },
  {
    "url": "design/index.html",
    "revision": "3a8a0b44e37d8bdf3678d4b2fddc0436"
  },
  {
    "url": "index.html",
    "revision": "70355461e8f77173785d1fb0a8012a07"
  },
  {
    "url": "intro/index.html",
    "revision": "ff1151373040c23b799e926c48a57da2"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "eba78f01404a164b187d5c0cc613fed6"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "2971ad6a47f6c44679f6d27f408d31fd"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "d6bcca8654e20d63e923348647b2ecf5"
  },
  {
    "url": "software/index.html",
    "revision": "e8066ce67dc47e51a918288f45079b1e"
  },
  {
    "url": "test/index.html",
    "revision": "31c4e065023c8d475311ed6f9babe9e8"
  },
  {
    "url": "use cases/index.html",
    "revision": "e2e2a730f845fbae83f6c9bf6c848e1e"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
