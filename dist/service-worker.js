"use strict";var precacheConfig=[["index.html","edf5d216025346574d8eae546c9c97e1"],["service-worker.js","29e57a8326506391f0d2913828746227"],["static/css/app.432132b59436b0c235da3b2f691881c7.css","91e75b141c620687c6aa26653f9a878a"],["static/demo-files/demo.css","7e3b27ecd37adfc17f5077668147bf26"],["static/demo-files/demo.js","3b9d1a0e781f00d1ef22bc48202efab1"],["static/demo.html","c2ae258cdeca9b5deb30f8edc8add502"],["static/fonts/icomoon.svg","4101235af736e0b4eee19a3594b66513"],["static/img/icons/android-chrome-192x192.png","f130a0b70e386170cf6f011c0ca8c4f4"],["static/img/icons/android-chrome-512x512.png","0ff1bc4d14e5c9abcacba7c600d97814"],["static/img/icons/android-icon-144x144.png","9161a0812dde234278ed241e7d83c677"],["static/img/icons/android-icon-192x192.png","26b2a9251fdf04888b58d185e6796c09"],["static/img/icons/android-icon-36x36.png","621a7823f8d7e6afcd98ac8ebdc58ed5"],["static/img/icons/android-icon-48x48.png","180528e7fedd2eeda09dd80b40eb14dc"],["static/img/icons/android-icon-512x512.png","c1182bcabb8f89fddfee7f84e689d034"],["static/img/icons/android-icon-72x72.png","f6e4d6796375b6583b84344f0315cb69"],["static/img/icons/android-icon-96x96.png","3ac4b33c1470de2631866006dd30fca4"],["static/img/icons/apple-icon-114x114.png","43a385e098ba4698cd8585ffd5c46e42"],["static/img/icons/apple-icon-120x120.png","2ae7b0010d6b594cf8298ea7cb7b178d"],["static/img/icons/apple-icon-144x144.png","9161a0812dde234278ed241e7d83c677"],["static/img/icons/apple-icon-152x152.png","1cfec84b75ecc92879be25fb18e8fab3"],["static/img/icons/apple-icon-180x180.png","f42211b43481624663f1afebe12e7456"],["static/img/icons/apple-icon-57x57.png","52bb15325ed99f452c5465860aa61f48"],["static/img/icons/apple-icon-60x60.png","dcd02eb9c045eb4cb2b83a52707c3fb6"],["static/img/icons/apple-icon-72x72.png","f6e4d6796375b6583b84344f0315cb69"],["static/img/icons/apple-icon-76x76.png","e442893a21a05670ade3028971cb0f5d"],["static/img/icons/apple-icon-precomposed.png","f6ac188babbf8589f0b522061fb811e7"],["static/img/icons/apple-icon.png","f6ac188babbf8589f0b522061fb811e7"],["static/img/icons/apple-touch-icon-120x120.png","936d6e411cabd71f0e627011c3f18fe2"],["static/img/icons/apple-touch-icon-152x152.png","1a034e64d80905128113e5272a5ab95e"],["static/img/icons/apple-touch-icon-180x180.png","c43cd371a49ee4ca17ab3a60e72bdd51"],["static/img/icons/apple-touch-icon-60x60.png","9a2b5c0f19de617685b7b5b42464e7db"],["static/img/icons/apple-touch-icon-76x76.png","af28d69d59284dd202aa55e57227b11b"],["static/img/icons/apple-touch-icon.png","66830ea6be8e7e94fb55df9f7b778f2e"],["static/img/icons/favicon-16x16.png","ad2962abc02e57ac003d0c65b420eeff"],["static/img/icons/favicon-32x32.png","94c93bc11003ea502a6973902f22b4ac"],["static/img/icons/favicon-96x96.png","3ac4b33c1470de2631866006dd30fca4"],["static/img/icons/favicon.ico","9a2015e02af3391c4d8313f484b49dfa"],["static/img/icons/ms-icon-144x144.png","9161a0812dde234278ed241e7d83c677"],["static/img/icons/ms-icon-150x150.png","4b5d73f88785c39dca48acbd85349d0f"],["static/img/icons/ms-icon-310x310.png","4c2a90e7b2277a4b0e43b5fde2fee0df"],["static/img/icons/ms-icon-70x70.png","50def3ff62e027b1b330689b3ba375eb"],["static/img/icons/msapplication-icon-144x144.png","b89032a4a5a1879f30ba05a13947f26f"],["static/img/icons/mstile-150x150.png","058a3335d15a3eb84e7ae3707ba09620"],["static/img/icons/safari-pinned-tab.svg","f22d501a35a87d9f21701cb031f6ea17"],["static/img/logo.c1182bc.png","c1182bcabb8f89fddfee7f84e689d034"],["static/js/app.459d81b22980fc34eada.js","d9e95b7f488fd720037d9818485d95c4"],["static/js/manifest.2ae2e69a05c33dfc65f8.js","2f4fd3b092ed7f7e76dbb3976729742e"],["static/js/vendor.abfcc738b8c29688b834.js","d57a817ee4509a1695c8c9a0f2e28a1a"],["static/style.css","b47ad6b9b6ee7a139039bee10b75661a"]],cacheName="sw-precache-v3-gpcalc-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,n,r){var o=new URL(e);return r&&o.pathname.match(r)||(o.search+=(o.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),o.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,t){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],r=new URL(t,self.location),o=createCacheKey(r,hashParamName,n,!1);return[r.toString(),o]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!t.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+n+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(n,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!t.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),t=urlsToCacheKeys.has(n));0,t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}}),function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).toolbox=e()}}(function(){return function e(t,n,r){function o(a,i){if(!n[a]){if(!t[a]){var s="function"==typeof require&&require;if(!i&&s)return s(a,!0);if(c)return c(a,!0);var u=new Error("Cannot find module '"+a+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[a]={exports:{}};t[a][0].call(f.exports,function(e){var n=t[a][1][e];return o(n||e)},f,f.exports,e,t,n,r)}return n[a].exports}for(var c="function"==typeof require&&require,a=0;a<r.length;a++)o(r[a]);return o}({1:[function(e,t,n){function r(e,t){((t=t||{}).debug||s.debug)&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||s.cache.name,caches.open(t)}function c(e,t,n){var o=e.url,c=n.maxAgeSeconds,a=n.maxEntries,i=n.name,s=Date.now();return r("Updating LRU order for "+o+". Max entries is "+a+", max age is "+c),u.getDb(i).then(function(e){return u.setTimestampForUrl(e,o,s)}).then(function(e){return u.expireEntries(e,a,c,s)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}var i,s=e("./options"),u=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:function(e,t){var n=(t=t||{}).successResponses||s.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||s.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&function(e,t,n){var r=c.bind(null,e,t,n);i=i?i.then(r):r()}(e,n,r)})}),r.clone()})},openCache:o,renameCache:function(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})},cache:function(e,t){return o(t).then(function(t){return t.add(e)})},uncache:function(e,t){return o(t).then(function(t){return t.delete(e)})},precache:function(e){e instanceof Promise||a(e),s.preCacheItems=s.preCacheItems.concat(e)},validatePrecacheInput:a,isResponseFresh:function(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r&&new Date(r).getTime()+1e3*t<n)return!1}return!0}}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){var r="sw-toolbox-",o=1,c="store",a="url",i="timestamp",s={};t.exports={getDb:function(e){return e in s||(s[e]=function(e){return new Promise(function(t,n){var s=indexedDB.open(r+e,o);s.onupgradeneeded=function(){s.result.createObjectStore(c,{keyPath:a}).createIndex(i,i,{unique:!1})},s.onsuccess=function(){t(s.result)},s.onerror=function(){n(s.error)}})}(e)),s[e]},setTimestampForUrl:function(e,t,n){return new Promise(function(r,o){var a=e.transaction(c,"readwrite");a.objectStore(c).put({url:t,timestamp:n}),a.oncomplete=function(){r(e)},a.onabort=function(){o(a.error)}})},expireEntries:function(e,t,n,r){return function(e,t,n){return t?new Promise(function(r,o){var s=1e3*t,u=[],f=e.transaction(c,"readwrite"),p=f.objectStore(c);p.index(i).openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-s>t.value[i]){var r=t.value[a];u.push(r),p.delete(r),t.continue()}},f.oncomplete=function(){r(u)},f.onabort=o}):Promise.resolve([])}(e,n,r).then(function(n){return function(e,t){return t?new Promise(function(n,r){var o=[],s=e.transaction(c,"readwrite"),u=s.objectStore(c),f=u.index(i),p=f.count();f.count().onsuccess=function(){var e=p.result;e>t&&(f.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var c=r.value[a];o.push(c),u.delete(c),e-o.length>t&&r.continue()}})},s.oncomplete=function(){n(o)},s.onabort=r}):Promise.resolve([])}(e,t).then(function(e){return n.concat(e)})})}}},{}],3:[function(e,t,n){function r(e){return e.reduce(function(e,t){return e.concat(t)},[])}e("serviceworker-cache-polyfill");var o=e("./helpers"),c=e("./router"),a=e("./options");t.exports={fetchListener:function(e){var t=c.match(e.request);t?e.respondWith(t(e.request)):c.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(c.default(e.request))},activateListener:function(e){o.debug("activate event fired");var t=a.cache.name+"$$$inactive$$$";e.waitUntil(o.renameCache(t,a.cache.name))},installListener:function(e){var t=a.cache.name+"$$$inactive$$$";o.debug("install event fired"),o.debug("creating cache ["+t+"]"),e.waitUntil(o.openCache({cache:{name:t}}).then(function(e){return Promise.all(a.preCacheItems).then(r).then(o.validatePrecacheInput).then(function(t){return o.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){var r=new URL("./",self.location).pathname,o=e("path-to-regexp"),c=function(e,t,n,c){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=r+t),this.keys=[],this.regexp=o(t,this.keys)),this.method=e,this.options=c,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){var r=e("./route"),o=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){new RegExp(r.value[0]).test(t)&&o.push(r.value[1]),r=n.next()}return o},a=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){a.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),a.prototype.add=function(e,t,n,c){var a;c=c||{},t instanceof RegExp?a=RegExp:a=(a=c.origin||self.location.origin)instanceof RegExp?a.source:function(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}(a),e=e.toLowerCase();var i=new r(e,t,n,c);this.routes.has(a)||this.routes.set(a,new Map);var s=this.routes.get(a);s.has(e)||s.set(e,new Map);var u=s.get(e),f=i.regexp||i.fullUrlRegExp;u.has(f.source)&&o.debug('"'+t+'" resolves to same regex as existing route.'),u.set(f.source,i)},a.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},a.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],a=o&&o.get(e.toLowerCase());if(a){var i=c(a,n);if(i.length>0)return i[0].makeHandler(n)}}return null},a.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new a},{"./helpers":1,"./route":5}],7:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache first ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(t){var c=n.cache||r.cache,a=Date.now();return o.isResponseFresh(t,c.maxAgeSeconds,a)?t:o.fetchAndCache(e,n)})})}},{"../helpers":1,"../options":4}],8:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){return n=n||{},o.debug("Strategy: cache only ["+e.url+"]",n),o.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||r.cache,c=Date.now();if(o.isResponseFresh(e,t.maxAgeSeconds,c))return e})})}},{"../helpers":1,"../options":4}],9:[function(e,t,n){var r=e("../helpers"),o=e("./cacheOnly");t.exports=function(e,t,n){return r.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(c,a){var i=!1,s=[],u=function(e){s.push(e.toString()),i?a(new Error('Both cache and network failed: "'+s.join('", "')+'"')):i=!0},f=function(e){e instanceof Response?c(e):u("No result returned")};r.fetchAndCache(e.clone(),n).then(f,u),o(e,t,n).then(f,u)})}},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){var r=e("../options"),o=e("../helpers");t.exports=function(e,t,n){var c=(n=n||{}).successResponses||r.successResponses,a=n.networkTimeoutSeconds||r.networkTimeoutSeconds;return o.debug("Strategy: network first ["+e.url+"]",n),o.openCache(n).then(function(t){var i,s,u=[];if(a){var f=new Promise(function(c){i=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||r.cache,a=Date.now(),i=t.maxAgeSeconds;o.isResponseFresh(e,i,a)&&c(e)})},1e3*a)});u.push(f)}var p=o.fetchAndCache(e,n).then(function(e){if(i&&clearTimeout(i),c.test(e.status))return e;throw o.debug("Response was an HTTP error: "+e.statusText,n),s=e,new Error("Bad response")}).catch(function(r){return o.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(s)return s;throw r})});return u.push(p),Promise.race(u)})}},{"../helpers":1,"../options":4}],12:[function(e,t,n){var r=e("../helpers");t.exports=function(e,t,n){return r.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}},{"../helpers":1}],13:[function(e,t,n){var r=e("./options"),o=e("./router"),c=e("./helpers"),a=e("./strategies"),i=e("./listeners");c.debug("Service Worker Toolbox is loading"),self.addEventListener("install",i.installListener),self.addEventListener("activate",i.activateListener),self.addEventListener("fetch",i.fetchListener),t.exports={networkOnly:a.networkOnly,networkFirst:a.networkFirst,cacheOnly:a.cacheOnly,cacheFirst:a.cacheFirst,fastest:a.fastest,router:o,options:r,cache:c.cache,uncache:c.uncache,precache:c.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,c=0,a="",u=t&&t.delimiter||"/";null!=(n=d.exec(e));){var f=n[0],p=n[1],h=n.index;if(a+=e.slice(c,h),c=h+f.length,p)a+=p[1];else{var l=e[c],g=n[2],m=n[3],b=n[4],v=n[5],x=n[6],w=n[7];a&&(r.push(a),a="");var y=null!=g&&null!=l&&l!==g,E="+"===x||"*"===x,R="?"===x||"*"===x,C=n[2]||u,k=b||v;r.push({name:m||o++,prefix:g||"",delimiter:C,optional:R,repeat:E,partial:y,asterisk:!!w,pattern:k?s(k):w?".*":"[^"+i(C)+"]+?"})}}return c<e.length&&(a+=e.substr(c)),a&&r.push(a),r}function o(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function a(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var a="",i=n||{},s=(r||{}).pretty?o:encodeURIComponent,u=0;u<e.length;u++){var f=e[u];if("string"!=typeof f){var p,h=i[f.name];if(null==h){if(f.optional){f.partial&&(a+=f.prefix);continue}throw new TypeError('Expected "'+f.name+'" to be defined')}if(l(h)){if(!f.repeat)throw new TypeError('Expected "'+f.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(f.optional)continue;throw new TypeError('Expected "'+f.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(p=s(h[d]),!t[u].test(p))throw new TypeError('Expected all "'+f.name+'" to match "'+f.pattern+'", but received `'+JSON.stringify(p)+"`");a+=(0===d?f.prefix:f.delimiter)+p}}else{if(p=f.asterisk?c(h):s(h),!t[u].test(p))throw new TypeError('Expected "'+f.name+'" to match "'+f.pattern+'", but received "'+p+'"');a+=f.prefix+p}}else a+=f}return a}}function i(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function s(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function u(e,t){return e.keys=t,e}function f(e){return e.sensitive?"":"i"}function p(e,t,n){l(t)||(n=t||n,t=[]);for(var r=(n=n||{}).strict,o=!1!==n.end,c="",a=0;a<e.length;a++){var s=e[a];if("string"==typeof s)c+=i(s);else{var p=i(s.prefix),h="(?:"+s.pattern+")";t.push(s),s.repeat&&(h+="(?:"+p+h+")*"),c+=h=s.optional?s.partial?p+"("+h+")?":"(?:"+p+"("+h+"))?":p+"("+h+")"}}var d=i(n.delimiter||"/"),g=c.slice(-d.length)===d;return r||(c=(g?c.slice(0,-d.length):c)+"(?:"+d+"(?=$))?"),c+=o?"$":r&&g?"":"(?="+d+"|$)",u(new RegExp("^"+c,f(n)),t)}function h(e,t,n){return l(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?function(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return u(e,t)}(e,t):l(e)?function(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(h(e[o],t,n).source);return u(new RegExp("(?:"+r.join("|")+")",f(n)),t)}(e,t,n):function(e,t,n){return p(r(e,n),t,n)}(e,t,n)}var l=e("isarray");t.exports=h,t.exports.parse=r,t.exports.compile=function(e,t){return a(r(e,t))},t.exports.tokensToFunction=a,t.exports.tokensToRegExp=p;var d=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)}),toolbox.router.get(/^https:\/\/fonts\.googleapis\.com\//,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/fonts\.gstatic\.com\//,toolbox.cacheFirst,{}),toolbox.router.get(/^https:\/\/cdnjs\.cloudflare\.com\//,toolbox.cacheFirst,{});