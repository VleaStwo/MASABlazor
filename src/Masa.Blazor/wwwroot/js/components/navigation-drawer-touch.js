function t(t,e,n,o){if("a"===n&&!o)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!o:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?o:"a"===n?o.call(t):o?o.value:e.get(t)}var e,n;"function"==typeof SuppressedError&&SuppressedError;class o{constructor(t){this.size=t,e.set(this,[]),n.set(this,0)}push(o){t(this,e,"f")[t(this,n,"f")]=o,function(t,e,n,o,i){if("m"===o)throw new TypeError("Private method is not writable");if("a"===o&&!i)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof e?t!==e||!i:!e.has(t))throw new TypeError("Cannot write private member to an object whose class did not declare it");"a"===o?i.call(t,n):i?i.value=n:e.set(t,n)}(this,n,(t(this,n,"f")+1)%this.size,"f")}values(){return t(this,e,"f").slice(t(this,n,"f")).concat(t(this,e,"f").slice(0,t(this,n,"f")))}}e=new WeakMap,n=new WeakMap;function i(t){return(t<0?-1:1)*Math.sqrt(Math.abs(t))*1.41421356237}function s(t){if(t.length<2)return 0;if(2===t.length)return t[1].t===t[0].t?0:(t[1].d-t[0].d)/(t[1].t-t[0].t);let e=0;for(let n=t.length-1;n>0;n--){if(t[n].t===t[n-1].t)continue;const o=i(e),s=(t[n].d-t[n-1].d)/(t[n].t-t[n-1].t);e+=(s-o)*Math.abs(s),n===t.length-1&&(e*=.5)}return 1e3*i(e)}function r(){const t={};return{addMovement:function(e){Array.from(e.changedTouches).forEach((n=>{var i;(null!==(i=t[n.identifier])&&void 0!==i?i:t[n.identifier]=new o(20)).push([e.timeStamp,n])}))},endTouch:function(e){Array.from(e.changedTouches).forEach((e=>{delete t[e.identifier]}))},getVelocity:function(e){var n;const o=null===(n=t[e])||void 0===n?void 0:n.values().reverse();if(!o)throw new Error(`No samples for touch id ${e}`);const i=o[0],r=[],c=[];for(const t of o){if(i[0]-t[0]>100)break;r.push({t:t[0],d:t[1].clientX}),c.push({t:t[0],d:t[1].clientY})}return{x:s(r),y:s(c),get direction(){const{x:t,y:e}=this,[n,o]=[Math.abs(t),Math.abs(e)];return n>o&&t>=0?"right":n>o&&t<=0?"left":o>n&&e>=0?"down":o>n&&e<=0?"up":function(){throw new Error}()}}}}}const c="undefined"!=typeof window;let a=!1;try{if(c){const t=Object.defineProperty({},"passive",{get:()=>{a=!0}});window.addEventListener("testListener",t,t),window.removeEventListener("testListener",t,t)}}catch(t){console.warn(t)}function d(t,e,n){var o,i;const s=function(t){return"string"==typeof t?document.querySelector(t):t}(t);console.log("el",s),console.log("state",n),window.addEventListener("touchstart",b,{passive:!0}),window.addEventListener("touchmove",M,{passive:!1}),window.addEventListener("touchend",T,{passive:!0});const c=["left","right"].includes(n.position),{addMovement:a,endTouch:d,getVelocity:h}=r();let u,f=!1,p=!1,m=0,w=0,v=null!==(o=s.style.transform)&&void 0!==o?o:null,g=null!==(i=s.style.transition)&&void 0!==i?i:null;function y(t,e){return("left"===n.position?t:"right"===n.position?document.documentElement.clientWidth-t:"top"===n.position?t:"bottom"===n.position?document.documentElement.clientHeight-t:l())-(e?n.width:0)}function E(t,e=!0){const o="left"===n.position?(t-w)/n.width:"right"===n.position?(document.documentElement.clientWidth-t-w)/n.width:"top"===n.position?(t-w)/n.width:"bottom"===n.position?(document.documentElement.clientHeight-t-w)/n.width:l();return e?Math.max(0,Math.min(1,o)):o}function b(t){var e,o;if(n.touchless)return;v=null!==(e=s.style.transform)&&void 0!==e?e:null,g=null!==(o=s.style.transition)&&void 0!==o?o:null;const i=t.changedTouches[0].clientX,r=t.changedTouches[0].clientY,h="left"===n.position?i<25:"right"===n.position?i>document.documentElement.clientWidth-25:"top"===n.position?r<25:"bottom"===n.position?r>document.documentElement.clientHeight-25:l(),p=n.isActive&&("left"===n.position?i<n.width:"right"===n.position?i>document.documentElement.clientWidth-n.width:"top"===n.position?r<n.width:"bottom"===n.position?r>document.documentElement.clientHeight-n.width:l());console.log("inElement",p,"isActive",n.isActive,"state.width",n.width),console.log("touchX",i,"document.documentElement.clientWidth",document.documentElement.clientWidth,"state.width",n.width),(h||p||n.isActive&&n.isTemporary)&&(u=[i,r],w=y(c?i:r,n.isActive),m=E(c?i:r),f=w>-20&&w<80,d(t),a(t))}function M(t){const n=t.changedTouches[0].clientX,o=t.changedTouches[0].clientY;if(f){if(!t.cancelable)return void(f=!1);const e=Math.abs(n-u[0]),i=Math.abs(o-u[1]);(c?e>i&&e>3:i>e&&i>3)?(p=!0,f=!1):(c?i:e)>3&&(f=!1)}if(A(),!p)return;t.preventDefault(),a(t);const i=E(c?n:o,!1);m=Math.max(0,Math.min(1,i)),i>1?w=y(c?n:o,!0):i<0&&(w=y(c?n:o,!1)),e.invokeMethodAsync("TouchMove",p,m)}function T(t){if(f=!1,!p)return;a(t),p=!1,A();const o=h(t.changedTouches[0].identifier),i=Math.abs(o.x),s=Math.abs(o.y),r=c?i>s&&i>400:s>i&&s>3;n.isActive=r?o.direction===({left:"right",right:"left",top:"down",bottom:"up"}[n.position]||l()):m>.5,e.invokeMethodAsync("TouchEnd",n.isActive)}const A=()=>{const t=p?{transform:"left"===n.position?`translateX(calc(-100% + ${m*n.width}px))`:"right"===n.position?`translateX(calc(100% - ${m*n.width}px))`:"top"===n.position?`translateY(calc(-100% + ${m*n.width}px))`:"bottom"===n.position?`translateY(calc(100% - ${m*n.width}px))`:l(),transition:"none"}:void 0;p?(s.style.setProperty("transform",(null==t?void 0:t.transform)||"none"),s.style.setProperty("transition",(null==t?void 0:t.transition)||null)):(s.style.setProperty("transform",v),s.style.setProperty("transition",g))};return{syncState:t=>{n=t},dispose:()=>{e.invokeMethodAsync("Dispose"),window.removeEventListener("touchstart",b),window.removeEventListener("touchmove",M),window.removeEventListener("touchend",T)}}}function l(){throw new Error}Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});export{d as useTouch};
//# sourceMappingURL=navigation-drawer-touch.js.map
