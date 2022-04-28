(()=>{"use strict";var e,t,r,n,o,a,i,c,s,p,l,u,d,f,m={247:(e,t,r)=>{r.d(t,{Z:()=>c});var n=r(81),o=r.n(n),a=r(645),i=r.n(a)()(o());i.push([e.id,"body {\r\n  background-color: #000;\r\n}\r\n.master {\r\n  width: 100%;\r\n  height: auto;\r\n  gap: 20px;\r\n  display: grid;\r\n  grid-template-columns: repeat(4, 1fr);\r\n}\r\n.master div {\r\n  border: solid 2px green;\r\n  box-shadow: rgba(94, 89, 89, 0.25) 0px 14px 28px,\r\n    rgba(128, 124, 124, 0.22) 0px 10px 10px;\r\n  text-align: center;\r\n  font-size: 1em;\r\n  font-weight: 700;\r\n  padding: 5px;\r\n  background-color: #000;\r\n  color: rgb(15, 160, 228);\r\n}\r\n.master div img {\r\n  width: 100%;\r\n  height: 300px;\r\n}\r\n.seconsd {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  font-size: 15px !important;\r\n  border: none !important;\r\n}\r\nh1 {\r\n  text-align: center;\r\n  color: #fff;\r\n  text-transform: capitalize;\r\n}\r\n",""]);const c=i},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var r="",n=void 0!==t[5];return t[4]&&(r+="@supports (".concat(t[4],") {")),t[2]&&(r+="@media ".concat(t[2]," {")),n&&(r+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),r+=e(t),n&&(r+="}"),t[2]&&(r+="}"),t[4]&&(r+="}"),r})).join("")},t.i=function(e,r,n,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(n)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var p=0;p<e.length;p++){var l=[].concat(e[p]);n&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var t=[];function r(e){for(var r=-1,n=0;n<t.length;n++)if(t[n].identifier===e){r=n;break}return r}function n(e,n){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],p=n.base?s[0]+n.base:s[0],l=a[p]||0,u="".concat(p," ").concat(l);a[p]=l+1;var d=r(u),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)t[d].references++,t[d].updater(f);else{var m=o(f,n);n.byIndex=c,t.splice(c,0,{identifier:u,updater:m,references:1})}i.push(u)}return i}function o(e,t){var r=t.domAPI(t);return r.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;r.update(e=t)}else r.remove()}}e.exports=function(e,o){var a=n(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=r(a[i]);t[c].references--}for(var s=n(e,o),p=0;p<a.length;p++){var l=r(a[p]);0===t[l].references&&(t[l].updater(),t.splice(l,1))}a=s}}},569:e=>{var t={};e.exports=function(e,r){var n=function(e){if(void 0===t[e]){var r=document.querySelector(e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}(e);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");n.appendChild(r)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,r)=>{e.exports=function(e){var t=r.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){var t=e.insertStyleElement(e);return{update:function(r){!function(e,t,r){var n="";r.supports&&(n+="@supports (".concat(r.supports,") {")),r.media&&(n+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(n+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),n+=r.css,o&&(n+="}"),r.media&&(n+="}"),r.supports&&(n+="}");var a=r.sourceMap;a&&"undefined"!=typeof btoa&&(n+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(n,e,t.options)}(t,e,r)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},v={};function h(e){var t=v[e];if(void 0!==t)return t.exports;var r=v[e]={id:e,exports:{}};return m[e](r,r.exports,h),r.exports}h.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return h.d(t,{a:t}),t},h.d=(e,t)=>{for(var r in t)h.o(t,r)&&!h.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},h.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),e=h(379),t=h.n(e),r=h(795),n=h.n(r),o=h(569),a=h.n(o),i=h(565),c=h.n(i),s=h(216),p=h.n(s),l=h(589),u=h.n(l),d=h(247),(f={}).styleTagTransform=u(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=n(),f.insertStyleElement=p(),t()(d.Z,f),d.Z&&d.Z.locals&&d.Z.locals,(async e=>{try{const t=await fetch(e);(async e=>{const t=document.querySelector(".master");t.innerHTML=null,e.map((e=>{let r=document.createElement("div"),n=document.createElement("img");n.src="https://image.tmdb.org/t/p/w500"+e.poster_path;let o=document.createElement("p");o.innerText=e.title;let a=document.createElement("div");a.setAttribute("class","seconsd");let i=document.createElement("p");i.innerText="Poularity "+e.popularity;let c=document.createElement("p");c.innerText="Rating: "+e.vote_average,a.append(i,c),r.append(n,o,a),t.append(r)}))})((await t.json()).results)}catch(e){console.log("err:",e)}})(`https://api.themoviedb.org/3/movie/popular?api_key=9db190054bf203144a8b44b46857dfa8&language=en-US&page=${Math.floor(9*Math.random())+1}`)})();