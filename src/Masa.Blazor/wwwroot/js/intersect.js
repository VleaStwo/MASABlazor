function e(e,n,o,t){return new(o||(o=Promise))((function(r,i){function c(e){try{u(t.next(e))}catch(e){i(e)}}function s(e){try{u(t.throw(e))}catch(e){i(e)}}function u(e){var n;e.done?r(e.value):(n=e.value,n instanceof o?n:new o((function(e){e(n)}))).then(c,s)}u((t=t.apply(e,n||[])).next())}))}function n(n,t,r){var i;if(!t)throw new Error("the handle cannot be null");const c=null!==(i=null==r?void 0:r.once)&&void 0!==i&&i,s=function(e){if(!e)return null;return{rootMargin:e.rootMargin,root:e.rootSelector?document.querySelector(e.rootSelector):null,threshold:e.threshold}}(r),u=new IntersectionObserver(((r=[],i)=>e(this,void 0,void 0,(function*(){const e=r.some((e=>e.isIntersecting));c&&!e||(yield t.invokeMethodAsync("Invoke",{isIntersecting:e})),e&&c&&o(n)}))),s);n._observe=Object(n._observe),n._observe={handle:t,observer:u},u.observe(n)}function o(e){if(!e)return;const n=e._observe;n&&(n.observer.unobserve(e),n.handle.dispose(),delete e._observe)}export{n as observe,o as unobserve};
//# sourceMappingURL=intersect.js.map
