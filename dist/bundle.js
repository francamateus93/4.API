(()=>{"use strict";var t={300:function(t,e){var n=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(c,i){function r(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?c(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}u((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.fetchJoke=void 0,e.fetchJoke=()=>n(void 0,void 0,void 0,(function*(){const t=yield fetch("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});return(yield t.json()).joke}))},156:function(t,e,n){var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(c,i){function r(t){try{u(o.next(t))}catch(t){i(t)}}function a(t){try{u(o.throw(t))}catch(t){i(t)}}function u(t){var e;t.done?c(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}u((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});const c=n(300);document.addEventListener("DOMContentLoaded",(()=>{const t=document.getElementById("joke-text"),e=document.getElementById("joke-next"),n=document.querySelectorAll(".score-btn");let i=[],r=null,a="";const u=()=>o(void 0,void 0,void 0,(function*(){const e=yield(0,c.fetchJoke)();r=null,a=e,t.textContent=e,console.clear(),console.log(i)}));e.addEventListener("click",(()=>{if(a){const t={joke:a,score:r,date:(new Date).toString()};i.push(t)}u()})),n.forEach((t=>{t.addEventListener("click",(()=>{const e=parseInt(t.getAttribute("data-score")||"0");r=e}))})),u()}))}},e={};!function n(o){var c=e[o];if(void 0!==c)return c.exports;var i=e[o]={exports:{}};return t[o].call(i.exports,i,i.exports,n),i.exports}(156)})();