!function(){"use strict";const e=["client/client.a86768f0.js","client/404.4a0e4f39.js","client/index.0ffc4ff0.js","client/[slug].e29d3dcb.js","client/about.ad8cb481.js","client/index.e6598878.js","client/client.37a5c3e9.js"].concat(["service-worker-index.html","favicon.svg","global.css","great-success.png","logo-192.png","logo-512.png","logo.svg","manifest.json","techstacklogos.png"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1657127615252").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1657127615252"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1657127615252").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const c=await t.match(e.request);if(c)return c;throw s}}))))})}();
