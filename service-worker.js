if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,n,i)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const o={uri:location.origin+s.slice(1)};return Promise.all(n.map((s=>{switch(s){case"exports":return r;case"module":return o;default:return e(s)}}))).then((e=>{const s=i(...e);return r.default||(r.default=s),r}))})))}}define("./service-worker.js",["./workbox-15dd0bab"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.clientsClaim(),e.precacheAndRoute([{url:"Logo192x192.png",revision:"15e06927b5e6e2b55c5ae6fb783d2618"},{url:"Logo48x48.png",revision:"65270f0df7353ad8c75ba5140d6d7c6a"},{url:"Logo512x512.png",revision:"50991847b13d0d0de738dc34d15e0920"},{url:"css/app.49b5b99f.css",revision:null},{url:"css/chunk-vendors.31e6963c.css",revision:null},{url:"favicon.png",revision:"f3da3682ba8d648ebaa9e09a27875c20"},{url:"fonts/OpenSans-Bold.21b37d1a.woff2",revision:"21b37d1abf90816560781f286c7dfa90"},{url:"fonts/OpenSans-BoldItalic.95149f80.woff2",revision:"95149f80a181cfb7c63078e3f44134cb"},{url:"fonts/OpenSans-Italic.ee451d9a.woff2",revision:"ee451d9aa59d5cf65407f17971d12090"},{url:"fonts/OpenSans-Regular.8abbb9d9.woff2",revision:"8abbb9d98c0c7304060190592408ab78"},{url:"fonts/OpenSans-SemiBold.2595cae6.woff2",revision:"2595cae6483bb50cbeb0cb40e3292231"},{url:"fonts/OpenSans-SemiBoldItalic.40ca9121.woff2",revision:"40ca91217266fa60c6e81c539a059190"},{url:"img/file.f5540c43.png",revision:"f5540c433396049050945be85ee9c4b1"},{url:"index.html",revision:"99eeac15051621926e7dc185788b4508"},{url:"js/_worker.ccad6094.worker.js",revision:null},{url:"js/app.eb71628a.js",revision:null},{url:"js/chunk-60cbf026.37d9df6c.js",revision:null},{url:"js/chunk-vendors.9641d639.js",revision:null},{url:"js/sql-wasm.wasm",revision:"9c34150f08c238863469557d63821fd6"},{url:"manifest.webmanifest",revision:"6b085b7ef6a4cd86a1cf5ad97b0d7160"}],{})}));
//# sourceMappingURL=service-worker.js.map
