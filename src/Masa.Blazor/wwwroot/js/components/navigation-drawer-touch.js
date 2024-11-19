function t(t,e,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(t):o?o.value:e.get(t)}var e,n;"function"==typeof SuppressedError&&SuppressedError;class o{constructor(t){this.size=t,e.set(this,[]),n.set(this,0)}push(o){t(this,e,"f")[t(this,n,"f")]=o,function(t,e,n,o,i){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===o?i.call(t,n):i?i.value=n:e.set(t,n)}(this,n,(t(this,n,"f")+1)%this.size,"f")}values(){return t(this,e,"f").slice(t(this,n,"f")).concat(t(this,e,"f").slice(0,t(this,n,"f")))}}e=new WeakMap,n=new WeakMap;function i(t){return(t<0?-1:1)*Math.sqrt(Math.abs(t))*1.41421356237}function r(t){if(t.length<2)return 0;if(2===t.length)return t[1].t===t[0].t?0:(t[1].d-t[0].d)/(t[1].t-t[0].t);let e=0;for(let n=t.length-1;n>0;n--){if(t[n].t===t[n-1].t)continue;const o=i(e),r=(t[n].d-t[n-1].d)/(t[n].t-t[n-1].t);e+=(r-o)*Math.abs(r),n===t.length-1&&(e*=.5)}return 1e3*i(e)}function s(){const t={};return{addMovement:function(e){Array.from(e.changedTouches).forEach((n=>{var i;(null!==(i=t[n.identifier])&&void 0!==i?i:t[n.identifier]=new o(20)).push([e.timeStamp,n])}))},endTouch:function(e){Array.from(e.changedTouches).forEach((e=>{delete t[e.identifier]}))},getVelocity:function(e){var n;const o=null===(n=t[e])||void 0===n?void 0:n.values().reverse();if(!o)throw new Error(`No samples for touch id ${e}`);const i=o[0],s=[],c=[];for(const t of o){if(i[0]-t[0]>100)break;s.push({t:t[0],d:t[1].clientX}),c.push({t:t[0],d:t[1].clientY})}return{x:r(s),y:r(c),get direction(){const{x:t,y:e}=this,[n,o]=[Math.abs(t),Math.abs(e)];return n>o&&t>=0?"right":n>o&&t<=0?"left":o>n&&e>=0?"down":o>n&&e<=0?"up":function(){throw new Error}()}}}}}const c="undefined"!=typeof window;let a=!1;try{if(c){const t=Object.defineProperty({},"passive",{get:()=>{a=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(t){console.warn(t)}function d(t,e,n){var o,i;const r=function(t){return"string"==typeof t?document.querySelector(t):t}(t);r||h(),window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",M,{passive:!1}),window.addEventListener("touchend",T,{passive:!0});const c=["left","right"].includes(n.position),{addMovement:a,endTouch:d,getVelocity:l}=s();let u,f=!1,p=!1,m=0,w=0,v=null!==(o=r.style.transform)&&void 0!==o?o:null,y=null!==(i=r.style.transition)&&void 0!==i?i:null;function g(t,e){return("left"===n.position?t:"right"===n.position?document.documentElement.clientWidth-t:"top"===n.position?t:"bottom"===n.position?document.documentElement.clientHeight-t:h())-(e?n.width:0)}function E(t,e=!0){const o="left"===n.position?(t-w)/n.width:"right"===n.position?(document.documentElement.clientWidth-t-w)/n.width:"top"===n.position?(t-w)/n.width:"bottom"===n.position?(document.documentElement.clientHeight-t-w)/n.width:h();return e?Math.max(0,Math.min(1,o)):o}function b(t){var e,o;if(n.touchless)return;v=null!==(e=r.style.transform)&&void 0!==e?e:null,y=null!==(o=r.style.transition)&&void 0!==o?o:null;const i=t.changedTouches[0].clientX,s=t.changedTouches[0].clientY,l="left"===n.position?i<25:"right"===n.position?i>document.documentElement.clientWidth-25:"top"===n.position?s<25:"bottom"===n.position?s>document.documentElement.clientHeight-25:h(),p=n.isActive&&("left"===n.position?i<n.width:"right"===n.position?i>document.documentElement.clientWidth-n.width:"top"===n.position?s<n.width:"bottom"===n.position?s>document.documentElement.clientHeight-n.width:h());(l||p||n.isActive&&n.isTemporary)&&(u=[i,s],w=g(c?i:s,n.isActive),m=E(c?i:s),f=w>-20&&w<80,d(t),a(t))}function M(t){const n=t.changedTouches[0].clientX,o=t.changedTouches[0].clientY;if(f){if(!t.cancelable)return void(f=!1);const e=Math.abs(n-u[0]),i=Math.abs(o-u[1]);(c?e>i&&e>3:i>e&&i>3)?(p=!0,f=!1):(c?i:e)>3&&(f=!1)}if(x(),!p)return;t.preventDefault(),a(t);const i=E(c?n:o,!1);m=Math.max(0,Math.min(1,i)),i>1?w=g(c?n:o,!0):i<0&&(w=g(c?n:o,!1)),e.invokeMethodAsync("TouchMove",p,m)}function T(t){if(f=!1,!p)return;a(t),p=!1,x();const o=l(t.changedTouches[0].identifier),i=Math.abs(o.x),r=Math.abs(o.y),s=c?i>r&&i>400:r>i&&r>3;n.isActive=s?o.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.position]||h()):m>.5,e.invokeMethodAsync("TouchEnd",n.isActive)}const x=()=>{const t=p?{transform:"left"===n.position?`translateX(calc(-100% + ${m*n.width}px))`:"right"===n.position?`translateX(calc(100% - ${m*n.width}px))`:"top"===n.position?`translateY(calc(-100% + ${m*n.width}px))`:"bottom"===n.position?`translateY(calc(100% - ${m*n.width}px))`:h(),transition:"none"}:void 0;p?(r.style.setProperty("transform",(null==t?void 0:t.transform)||"none"),r.style.setProperty("transition",(null==t?void 0:t.transition)||null)):(r.style.setProperty("transform",v),r.style.setProperty("transition",y))};return{syncState:t=>{n=t},dispose:()=>{e.dispose(),window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",M),window.removeEventListener("touchend",T)}}}function h(){throw new Error}Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});export{d as useTouch};
//# sourceMappingURL=navigation-drawer-touch.js.map
