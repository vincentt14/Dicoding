if(!self.define){let e,i={};const n=(n,c)=>(n=new URL(n+".js",c).href,i[n]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=i,document.head.appendChild(e)}else e=n,importScripts(n),i()})).then((()=>{let e=i[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(c,d)=>{const f=e||("document"in self?document.currentScript.src:"")||location.href;if(i[f])return;let a={};const r=e=>n(e,f),s={module:{uri:f},exports:a,require:r};i[f]=Promise.all(c.map((e=>s[e]||r(e)))).then((e=>(d(...e),a)))}}define(["./workbox-d249b2c8"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"2.bundle.js",revision:"3f7fd89ccc2dbb0154f339dc619a1429"},{url:"946.bundle.js",revision:"cc582ae0cd0fdff61d2e587ce1c4092d"},{url:"app.webmanifest",revision:"f22061e8ad0c18d45e4ce8358bbbefe1"},{url:"app~166a29e1.bundle.js",revision:"b8e0cab6222e97e21d8527a9489f04d1"},{url:"app~166a29e1.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~a51fa3f5.bundle.js",revision:"06fb4e4a98fc4761dd59c1d02057ac7f"},{url:"app~a51fa3f5.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~ca0940c6.bundle.js",revision:"d2ea3b3095fb1929dbe472f73d8c3e77"},{url:"app~ca0940c6.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~e4317507.bundle.js",revision:"102168c874acf1128f68c09b6db6ae53"},{url:"app~e4317507.bundle.js.LICENSE.txt",revision:"4e0e34f265fae8f33b01b27ae29d9d6f"},{url:"app~f6563343.bundle.js",revision:"9ad9d82e5b52b180a3b7bb26cc671297"},{url:"favicon.png",revision:"f1029eb0a26a1f2cd2c7e77ad8ecd4ae"},{url:"icons/icon-128x128.png",revision:"fad8ba5a7d6e306060eebb5beaf7ee7e"},{url:"icons/icon-144x144.png",revision:"9a9a4f4a302ce6c991fd2dda4d2f138c"},{url:"icons/icon-152x152.png",revision:"0c9e1bed65615429a66ce295cca31ef1"},{url:"icons/icon-192x192.png",revision:"03e7abb8825c027f80ebc9eb600f8923"},{url:"icons/icon-384x384.png",revision:"c92554b13195a89a9ed9cd43a7876aed"},{url:"icons/icon-512x512.png",revision:"f9ae4a404abfdf869bf055ea911b92dd"},{url:"icons/icon-72x72.png",revision:"2c23e881cbdaf6bcb35f5a0f626716a8"},{url:"icons/icon-96x96.png",revision:"7eb15c322ed8b4ea212ef3a828171f05"},{url:"index.html",revision:"b3f921dc1d5fb33ab81140bb70099409"}],{})}));
//# sourceMappingURL=sw.bundle.js.map