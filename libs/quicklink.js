!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports):"function"==typeof define&&define.amd?define(["exports"],n):n((e=e||self).quicklink={})}(this,function(e){function n(e){return new Promise(function(n,t,r){(r=new XMLHttpRequest).open("GET",e,r.withCredentials=!0),r.onload=function(){200===r.status?n():t()},r.send()})}function t(e){return window.fetch?fetch(e,{credentials:"include"}):n(e)}var r,o=(r=document.createElement("link")).relList&&r.relList.supports&&r.relList.supports("prefetch")?function(e){return new Promise(function(n,t,r){(r=document.createElement("link")).rel="prefetch",r.href=e,r.onload=n,r.onerror=t,document.head.appendChild(r)})}:n,i=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},c=new Set;function f(e,n,r){if(r=navigator.connection){if(r.saveData)return Promise.reject(new Error("Cannot prefetch, Save-Data is enabled"));if(/2g/.test(r.effectiveType))return Promise.reject(new Error("Cannot prefetch, network conditions are poor"))}return Promise.all([].concat(e).map(function(e){if(!c.has(e))return c.add(e),(n?t:o)(new URL(e,location.href).toString())}))}e.listen=function(e){if(e||(e={}),window.IntersectionObserver){var n=function(e){e=e||1;var n=[],t=0;function r(){t<e&&n.length>0&&(n.shift()(),t++)}return[function(e){n.push(e)>1||r()},function(){t--,r()}]}(e.throttle||1/0),t=n[0],r=n[1],o=e.limit||1/0,u=e.origins||[location.hostname],s=e.ignores||[],a=e.delay||0,l=[],d=e.timeoutFn||i,h="function"==typeof e.hrefFn&&e.hrefFn,m=new IntersectionObserver(function(n){n.forEach(function(n){if(n.isIntersecting)l.push((n=n.target).href),function(e,n){n?setTimeout(e,n):e()}(function(){-1!==l.indexOf(n.href)&&(m.unobserve(n),c.size<o&&t(function(){f(h?h(n):n.href,e.priority).then(r).catch(function(n){r(),e.onError&&e.onError(n)})}))},a);else{var i=l.indexOf((n=n.target).href);i>-1&&l.splice(i)}})});return d(function(){(e.el||document).querySelectorAll("a").forEach(function(e){u.length&&!u.includes(e.hostname)||function e(n,t){return Array.isArray(t)?t.some(function(t){return e(n,t)}):(t.test||t).call(t,n.href,n)}(e,s)||m.observe(e)})},{timeout:e.timeout||2e3}),function(){c.clear(),m.disconnect()}}},e.prefetch=f});