(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{8424:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(7736)}])},8497:(e,t,r)=>{"use strict";r.d(t,{A:()=>l});var n=r(4848);r(6540);var o=r(1106),i=r.n(o),a=r(1169),c=r(5681),u=r.n(c);let l=()=>(0,n.jsx)("header",{className:u().header,children:(0,n.jsx)("nav",{className:u().nav,children:(0,n.jsxs)("ul",{className:u().navList,children:[(0,n.jsx)("li",{className:u().navItem,children:(0,n.jsx)(i(),{href:"/",className:u().navLink,children:(0,n.jsx)(a.rQ8,{size:24,title:"Home"})})}),(0,n.jsx)("li",{className:u().navItem,children:(0,n.jsx)(i(),{href:"/about",className:u().navLink,children:(0,n.jsx)(a.x$1,{size:24,title:"About"})})}),(0,n.jsx)("li",{className:u().navItem,children:(0,n.jsx)(i(),{href:"/portfolio",className:u().navLink,children:(0,n.jsx)(a._yv,{size:24,title:"Portfolio"})})}),(0,n.jsx)("li",{className:u().navItem,children:(0,n.jsx)(i(),{href:"/contact",className:u().navLink,children:(0,n.jsx)(a.maD,{size:24,title:"Contact"})})})]})})})},5157:(e,t,r)=>{"use strict";function n(e,t,r,n){return!1}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getDomainLocale",{enumerable:!0,get:function(){return n}}),r(2063),("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6397:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return m}});let n=r(7677),o=r(4848),i=n._(r(6540)),a=r(6847),c=r(7785),u=r(2772),l=r(1278),s=r(6185),f=r(7644),d=r(6334),p=r(5157),y=r(296),h=r(1903),_=new Set;function b(e,t,r,n){if((0,c.isLocalURL)(t)){if(!n.bypassPrefetchedCheck){let o=t+"%"+r+"%"+(void 0!==n.locale?n.locale:"locale"in e?e.locale:void 0);if(_.has(o))return;_.add(o)}e.prefetch(t,r,n).catch(e=>{})}}function v(e){return"string"==typeof e?e:(0,u.formatUrl)(e)}let m=i.default.forwardRef(function(e,t){let r,n;let{href:u,as:_,children:m,prefetch:g=null,passHref:w,replace:O,shallow:E,scroll:j,locale:x,onClick:P,onMouseEnter:S,onTouchStart:C,legacyBehavior:M=!1,...N}=e;r=m,M&&("string"==typeof r||"number"==typeof r)&&(r=(0,o.jsx)("a",{children:r}));let z=i.default.useContext(f.RouterContext),k=!1!==g,{href:L,as:T}=i.default.useMemo(()=>{if(!z){let e=v(u);return{href:e,as:_?v(_):e}}let[e,t]=(0,a.resolveHref)(z,u,!0);return{href:e,as:_?(0,a.resolveHref)(z,_):t||e}},[z,u,_]),R=i.default.useRef(L),A=i.default.useRef(T);M&&(n=i.default.Children.only(r));let D=M?n&&"object"==typeof n&&n.ref:t,[I,F,V]=(0,d.useIntersection)({rootMargin:"200px"}),H=i.default.useCallback(e=>{(A.current!==T||R.current!==L)&&(V(),A.current=T,R.current=L),I(e)},[T,L,V,I]),U=(0,h.useMergedRef)(H,D);i.default.useEffect(()=>{z&&F&&k&&b(z,L,T,{locale:x})},[T,L,F,x,k,null==z?void 0:z.locale,z]);let $={ref:U,onClick(e){M||"function"!=typeof P||P(e),M&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(e),z&&!e.defaultPrevented&&function(e,t,r,n,o,i,a,u){let{nodeName:l}=e.currentTarget;"A"===l.toUpperCase()&&(function(e){let t=e.currentTarget.getAttribute("target");return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)||!(0,c.isLocalURL)(r))||(e.preventDefault(),(()=>{let e=null==a||a;"beforePopState"in t?t[o?"replace":"push"](r,n,{shallow:i,locale:u,scroll:e}):t[o?"replace":"push"](n||r,{scroll:e})})())}(e,z,L,T,O,E,j,x)},onMouseEnter(e){M||"function"!=typeof S||S(e),M&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),z&&b(z,L,T,{locale:x,priority:!0,bypassPrefetchedCheck:!0})},onTouchStart:function(e){M||"function"!=typeof C||C(e),M&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),z&&b(z,L,T,{locale:x,priority:!0,bypassPrefetchedCheck:!0})}};if((0,l.isAbsoluteUrl)(T))$.href=T;else if(!M||w||"a"===n.type&&!("href"in n.props)){let e=void 0!==x?x:null==z?void 0:z.locale,t=(null==z?void 0:z.isLocaleDomain)&&(0,p.getDomainLocale)(T,e,null==z?void 0:z.locales,null==z?void 0:z.domainLocales);$.href=t||(0,y.addBasePath)((0,s.addLocale)(T,e,null==z?void 0:z.defaultLocale))}return M?i.default.cloneElement(n,$):(0,o.jsx)("a",{...N,...$,children:r})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6334:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useIntersection",{enumerable:!0,get:function(){return u}});let n=r(6540),o=r(4959),i="function"==typeof IntersectionObserver,a=new Map,c=[];function u(e){let{rootRef:t,rootMargin:r,disabled:u}=e,l=u||!i,[s,f]=(0,n.useState)(!1),d=(0,n.useRef)(null),p=(0,n.useCallback)(e=>{d.current=e},[]);return(0,n.useEffect)(()=>{if(i){if(l||s)return;let e=d.current;if(e&&e.tagName)return function(e,t,r){let{id:n,observer:o,elements:i}=function(e){let t;let r={root:e.root||null,margin:e.rootMargin||""},n=c.find(e=>e.root===r.root&&e.margin===r.margin);if(n&&(t=a.get(n)))return t;let o=new Map;return t={id:r,observer:new IntersectionObserver(e=>{e.forEach(e=>{let t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)})},e),elements:o},c.push(r),a.set(r,t),t}(r);return i.set(e,t),o.observe(e),function(){if(i.delete(e),o.unobserve(e),0===i.size){o.disconnect(),a.delete(n);let e=c.findIndex(e=>e.root===n.root&&e.margin===n.margin);e>-1&&c.splice(e,1)}}}(e,e=>e&&f(e),{root:null==t?void 0:t.current,rootMargin:r})}else if(!s){let e=(0,o.requestIdleCallback)(()=>f(!0));return()=>(0,o.cancelIdleCallback)(e)}},[l,r,t,s,d.current]),[p,s,(0,n.useCallback)(()=>{f(!1)},[])]}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1903:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return o}});let n=r(6540);function o(e,t){let r=(0,n.useRef)(()=>{}),o=(0,n.useRef)(()=>{});return(0,n.useMemo)(()=>e&&t?n=>{null===n?(r.current(),o.current()):(r.current=i(e,n),o.current=i(t,n))}:e||t,[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1169:(e,t,r)=>{"use strict";r.d(t,{Z0P:()=>d,_yv:()=>p,maD:()=>y,hL4:()=>s,YNd:()=>h,rQ8:()=>_,QEs:()=>f,x$1:()=>b});var n=r(6540),o={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},i=n.createContext&&n.createContext(o),a=function(){return(a=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&0>t.indexOf(n)&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,n=Object.getOwnPropertySymbols(e);o<n.length;o++)0>t.indexOf(n[o])&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]]);return r};function u(e){return function(t){return n.createElement(l,a({attr:a({},e.attr)},t),function e(t){return t&&t.map(function(t,r){return n.createElement(t.tag,a({key:r},t.attr),e(t.child))})}(e.child))}}function l(e){var t=function(t){var r,o=e.attr,i=e.size,u=e.title,l=c(e,["attr","size","title"]),s=i||t.size||"1em";return t.className&&(r=t.className),e.className&&(r=(r?r+" ":"")+e.className),n.createElement("svg",a({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,o,l,{className:r,style:a(a({color:e.color||t.color},t.style),e.style),height:s,width:s,xmlns:"http://www.w3.org/2000/svg"}),u&&n.createElement("title",null,u),e.children)};return void 0!==i?n.createElement(i.Consumer,null,function(e){return t(e)}):t(o)}function s(e){return u({tag:"svg",attr:{viewBox:"0 0 496 512"},child:[{tag:"path",attr:{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"}}]})(e)}function f(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}}]})(e)}function d(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z"}}]})(e)}function p(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M320 336c0 8.84-7.16 16-16 16h-96c-8.84 0-16-7.16-16-16v-48H0v144c0 25.6 22.4 48 48 48h416c25.6 0 48-22.4 48-48V288H320v48zm144-208h-80V80c0-25.6-22.4-48-48-48H176c-25.6 0-48 22.4-48 48v48H48c-25.6 0-48 22.4-48 48v80h512v-80c0-25.6-22.4-48-48-48zm-144 0H192V96h128v32z"}}]})(e)}function y(e){return u({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"}}]})(e)}function h(e){return u({tag:"svg",attr:{viewBox:"0 0 640 512"},child:[{tag:"path",attr:{d:"M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"}}]})(e)}function _(e){return u({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"}}]})(e)}function b(e){return u({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"}}]})(e)}},7736:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>eJ});var n,o=r(4848),i=r(6540);r(8418);var a=Symbol.for("react.forward_ref"),c=Symbol.for("react.memo"),u={notify(){},get:()=>[]},l=!!("undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement),s="undefined"!=typeof navigator&&"ReactNative"===navigator.product,f=l||s?i.useLayoutEffect:i.useEffect,d={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},p={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},y={[a]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[c]:p};Object.getOwnPropertyNames,Object.getOwnPropertySymbols,Object.getOwnPropertyDescriptor,Object.getPrototypeOf,Object.prototype;var h=Symbol.for("react-redux-context"),_="undefined"!=typeof globalThis?globalThis:{},b=function(){if(!i.createContext)return{};let e=_[h]??=new Map,t=e.get(i.createContext);return t||(t=i.createContext(null),e.set(i.createContext,t)),t}(),v=function(e){let{children:t,context:r,serverState:n,store:o}=e,a=i.useMemo(()=>{let e=function(e,t){let r;let n=u,o=0,i=!1;function a(){s.onStateChange&&s.onStateChange()}function c(){if(o++,!r){let t,o;r=e.subscribe(a),t=null,o=null,n={clear(){t=null,o=null},notify(){(()=>{let e=t;for(;e;)e.callback(),e=e.next})()},get(){let e=[],r=t;for(;r;)e.push(r),r=r.next;return e},subscribe(e){let r=!0,n=o={callback:e,next:null,prev:o};return n.prev?n.prev.next=n:t=n,function(){r&&null!==t&&(r=!1,n.next?n.next.prev=n.prev:o=n.prev,n.prev?n.prev.next=n.next:t=n.next)}}}}}function l(){o--,r&&0===o&&(r(),r=void 0,n.clear(),n=u)}let s={addNestedSub:function(e){c();let t=n.subscribe(e),r=!1;return()=>{r||(r=!0,t(),l())}},notifyNestedSubs:function(){n.notify()},handleChangeWrapper:a,isSubscribed:function(){return i},trySubscribe:function(){i||(i=!0,c())},tryUnsubscribe:function(){i&&(i=!1,l())},getListeners:()=>n};return s}(o);return{store:o,subscription:e,getServerState:n?()=>n:void 0}},[o,n]),c=i.useMemo(()=>o.getState(),[o]);return f(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),c!==o.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,c]),i.createElement((r||b).Provider,{value:a},t)},m=r(8497);function g(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var w="function"==typeof Symbol&&Symbol.observable||"@@observable",O=()=>Math.random().toString(36).substring(7).split("").join("."),E={INIT:`@@redux/INIT${O()}`,REPLACE:`@@redux/REPLACE${O()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${O()}`};function j(e){if("object"!=typeof e||null===e)return!1;let t=e;for(;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||null===Object.getPrototypeOf(e)}function x(...e){return 0===e.length?e=>e:1===e.length?e[0]:e.reduce((e,t)=>(...r)=>e(t(...r)))}function P(e){return({dispatch:t,getState:r})=>n=>o=>"function"==typeof o?o(t,r,e):n(o)}var S=P(),C=Symbol.for("immer-nothing"),M=Symbol.for("immer-draftable"),N=Symbol.for("immer-state");function z(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var k=Object.getPrototypeOf;function L(e){return!!e&&!!e[N]}function T(e){return!!e&&(A(e)||Array.isArray(e)||!!e[M]||!!e.constructor?.[M]||H(e)||U(e))}var R=Object.prototype.constructor.toString();function A(e){if(!e||"object"!=typeof e)return!1;let t=k(e);if(null===t)return!0;let r=Object.hasOwnProperty.call(t,"constructor")&&t.constructor;return r===Object||"function"==typeof r&&Function.toString.call(r)===R}function D(e,t){0===I(e)?Reflect.ownKeys(e).forEach(r=>{t(r,e[r],e)}):e.forEach((r,n)=>t(n,r,e))}function I(e){let t=e[N];return t?t.type_:Array.isArray(e)?1:H(e)?2:U(e)?3:0}function F(e,t){return 2===I(e)?e.has(t):Object.prototype.hasOwnProperty.call(e,t)}function V(e,t,r){let n=I(e);2===n?e.set(t,r):3===n?e.add(r):e[t]=r}function H(e){return e instanceof Map}function U(e){return e instanceof Set}function $(e){return e.copy_||e.base_}function K(e,t){if(H(e))return new Map(e);if(U(e))return new Set(e);if(Array.isArray(e))return Array.prototype.slice.call(e);let r=A(e);if(!0!==t&&("class_only"!==t||r)){let t=k(e);return null!==t&&r?{...e}:Object.assign(Object.create(t),e)}{let t=Object.getOwnPropertyDescriptors(e);delete t[N];let r=Reflect.ownKeys(t);for(let n=0;n<r.length;n++){let o=r[n],i=t[o];!1===i.writable&&(i.writable=!0,i.configurable=!0),(i.get||i.set)&&(t[o]={configurable:!0,writable:!0,enumerable:i.enumerable,value:e[o]})}return Object.create(k(e),t)}}function B(e,t=!1){return X(e)||L(e)||!T(e)||(I(e)>1&&(e.set=e.add=e.clear=e.delete=W),Object.freeze(e),t&&Object.entries(e).forEach(([e,t])=>B(t,!0))),e}function W(){z(2)}function X(e){return Object.isFrozen(e)}var q={};function Q(e){let t=q[e];return t||z(0,e),t}function Y(e,t){t&&(Q("Patches"),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Z(e){G(e),e.drafts_.forEach(ee),e.drafts_=null}function G(e){e===n&&(n=e.parent_)}function J(e){return n={drafts_:[],parent_:n,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0}}function ee(e){let t=e[N];0===t.type_||1===t.type_?t.revoke_():t.revoked_=!0}function et(e,t){t.unfinalizedDrafts_=t.drafts_.length;let r=t.drafts_[0];return void 0!==e&&e!==r?(r[N].modified_&&(Z(t),z(4)),T(e)&&(e=er(t,e),t.parent_||eo(t,e)),t.patches_&&Q("Patches").generateReplacementPatches_(r[N].base_,e,t.patches_,t.inversePatches_)):e=er(t,r,[]),Z(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e!==C?e:void 0}function er(e,t,r){if(X(t))return t;let n=t[N];if(!n)return D(t,(o,i)=>en(e,n,t,o,i,r)),t;if(n.scope_!==e)return t;if(!n.modified_)return eo(e,n.base_,!0),n.base_;if(!n.finalized_){n.finalized_=!0,n.scope_.unfinalizedDrafts_--;let t=n.copy_,o=t,i=!1;3===n.type_&&(o=new Set(t),t.clear(),i=!0),D(o,(o,a)=>en(e,n,t,o,a,r,i)),eo(e,t,!1),r&&e.patches_&&Q("Patches").generatePatches_(n,r,e.patches_,e.inversePatches_)}return n.copy_}function en(e,t,r,n,o,i,a){if(L(o)){let a=er(e,o,i&&t&&3!==t.type_&&!F(t.assigned_,n)?i.concat(n):void 0);if(V(r,n,a),!L(a))return;e.canAutoFreeze_=!1}else a&&r.add(o);if(T(o)&&!X(o)){if(!e.immer_.autoFreeze_&&e.unfinalizedDrafts_<1)return;er(e,o),(!t||!t.scope_.parent_)&&"symbol"!=typeof n&&Object.prototype.propertyIsEnumerable.call(r,n)&&eo(e,o)}}function eo(e,t,r=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&B(t,r)}var ei={get(e,t){if(t===N)return e;let r=$(e);if(!F(r,t))return function(e,t,r){let n=eu(t,r);return n?"value"in n?n.value:n.get?.call(e.draft_):void 0}(e,r,t);let n=r[t];return e.finalized_||!T(n)?n:n===ec(e.base_,t)?(es(e),e.copy_[t]=ef(n,e)):n},has:(e,t)=>t in $(e),ownKeys:e=>Reflect.ownKeys($(e)),set(e,t,r){let n=eu($(e),t);if(n?.set)return n.set.call(e.draft_,r),!0;if(!e.modified_){let n=ec($(e),t),o=n?.[N];if(o&&o.base_===r)return e.copy_[t]=r,e.assigned_[t]=!1,!0;if((r===n?0!==r||1/r==1/n:r!=r&&n!=n)&&(void 0!==r||F(e.base_,t)))return!0;es(e),el(e)}return!!(e.copy_[t]===r&&(void 0!==r||t in e.copy_)||Number.isNaN(r)&&Number.isNaN(e.copy_[t]))||(e.copy_[t]=r,e.assigned_[t]=!0,!0)},deleteProperty:(e,t)=>(void 0!==ec(e.base_,t)||t in e.base_?(e.assigned_[t]=!1,es(e),el(e)):delete e.assigned_[t],e.copy_&&delete e.copy_[t],!0),getOwnPropertyDescriptor(e,t){let r=$(e),n=Reflect.getOwnPropertyDescriptor(r,t);return n?{writable:!0,configurable:1!==e.type_||"length"!==t,enumerable:n.enumerable,value:r[t]}:n},defineProperty(){z(11)},getPrototypeOf:e=>k(e.base_),setPrototypeOf(){z(12)}},ea={};function ec(e,t){let r=e[N];return(r?$(r):e)[t]}function eu(e,t){if(!(t in e))return;let r=k(e);for(;r;){let e=Object.getOwnPropertyDescriptor(r,t);if(e)return e;r=k(r)}}function el(e){!e.modified_&&(e.modified_=!0,e.parent_&&el(e.parent_))}function es(e){e.copy_||(e.copy_=K(e.base_,e.scope_.immer_.useStrictShallowCopy_))}function ef(e,t){let r=H(e)?Q("MapSet").proxyMap_(e,t):U(e)?Q("MapSet").proxySet_(e,t):function(e,t){let r=Array.isArray(e),o={type_:r?1:0,scope_:t?t.scope_:n,modified_:!1,finalized_:!1,assigned_:{},parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1},i=o,a=ei;r&&(i=[o],a=ea);let{revoke:c,proxy:u}=Proxy.revocable(i,a);return o.draft_=u,o.revoke_=c,u}(e,t);return(t?t.scope_:n).drafts_.push(r),r}D(ei,(e,t)=>{ea[e]=function(){return arguments[0]=arguments[0][0],t.apply(this,arguments)}}),ea.deleteProperty=function(e,t){return ea.set.call(this,e,t,void 0)},ea.set=function(e,t,r){return ei.set.call(this,e[0],t,r,e[0])};var ed=new class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.produce=(e,t,r)=>{let n;if("function"==typeof e&&"function"!=typeof t){let r=t;t=e;let n=this;return function(e=r,...o){return n.produce(e,e=>t.call(this,e,...o))}}if("function"!=typeof t&&z(6),void 0!==r&&"function"!=typeof r&&z(7),T(e)){let o=J(this),i=ef(e,void 0),a=!0;try{n=t(i),a=!1}finally{a?Z(o):G(o)}return Y(o,r),et(n,o)}if(e&&"object"==typeof e)z(1,e);else{if(void 0===(n=t(e))&&(n=e),n===C&&(n=void 0),this.autoFreeze_&&B(n,!0),r){let t=[],o=[];Q("Patches").generateReplacementPatches_(e,n,t,o),r(t,o)}return n}},this.produceWithPatches=(e,t)=>{let r,n;return"function"==typeof e?(t,...r)=>this.produceWithPatches(t,t=>e(t,...r)):[this.produce(e,t,(e,t)=>{r=e,n=t}),r,n]},"boolean"==typeof e?.autoFreeze&&this.setAutoFreeze(e.autoFreeze),"boolean"==typeof e?.useStrictShallowCopy&&this.setUseStrictShallowCopy(e.useStrictShallowCopy)}createDraft(e){var t;T(e)||z(8),L(e)&&(L(t=e)||z(10,t),e=function e(t){let r;if(!T(t)||X(t))return t;let n=t[N];if(n){if(!n.modified_)return n.base_;n.finalized_=!0,r=K(t,n.scope_.immer_.useStrictShallowCopy_)}else r=K(t,!0);return D(r,(t,n)=>{V(r,t,e(n))}),n&&(n.finalized_=!1),r}(t));let r=J(this),n=ef(e,void 0);return n[N].isManual_=!0,G(r),n}finishDraft(e,t){let r=e&&e[N];r&&r.isManual_||z(9);let{scope_:n}=r;return Y(n,t),et(void 0,n)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}applyPatches(e,t){let r;for(r=t.length-1;r>=0;r--){let n=t[r];if(0===n.path.length&&"replace"===n.op){e=n.value;break}}r>-1&&(t=t.slice(r+1));let n=Q("Patches").applyPatches_;return L(e)?n(e,t):this.produce(e,e=>n(e,t))}},ep=ed.produce;ed.produceWithPatches.bind(ed),ed.setAutoFreeze.bind(ed),ed.setUseStrictShallowCopy.bind(ed),ed.applyPatches.bind(ed),ed.createDraft.bind(ed),ed.finishDraft.bind(ed),r(7836);var ey="undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(0!=arguments.length)return"object"==typeof arguments[0]?x:x.apply(null,arguments)};"undefined"!=typeof window&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var eh=e=>e&&"function"==typeof e.match;function e_(e,t){function r(...n){if(t){let r=t(...n);if(!r)throw Error(eq(0));return{type:e,payload:r.payload,..."meta"in r&&{meta:r.meta},..."error"in r&&{error:r.error}}}return{type:e,payload:n[0]}}return r.toString=()=>`${e}`,r.type=e,r.match=t=>j(t)&&"type"in t&&"string"==typeof t.type&&t.type===e,r}function eb(e){return["type","payload","error","meta"].indexOf(e)>-1}var ev=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return 1===t.length&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function em(e){return T(e)?ep(e,()=>{}):e}function eg(e,t,r){return e.has(t)?e.get(t):e.set(t,r(t)).get(t)}var ew=()=>function(e){let{thunk:t=!0,immutableCheck:r=!0,serializableCheck:n=!0,actionCreatorCheck:o=!0}=e??{},i=new ev;return t&&("boolean"==typeof t?i.push(S):i.push(P(t.extraArgument))),i},eO=e=>t=>{setTimeout(t,e)},eE=(e={type:"raf"})=>t=>(...r)=>{let n=t(...r),o=!0,i=!1,a=!1,c=new Set,u="tick"===e.type?queueMicrotask:"raf"===e.type?"undefined"!=typeof window&&window.requestAnimationFrame?window.requestAnimationFrame:eO(10):"callback"===e.type?e.queueNotification:eO(e.timeout),l=()=>{a=!1,i&&(i=!1,c.forEach(e=>e()))};return Object.assign({},n,{subscribe(e){let t=n.subscribe(()=>o&&e());return c.add(e),()=>{t(),c.delete(e)}},dispatch(e){try{return(i=!(o=!e?.meta?.RTK_autoBatch))&&!a&&(a=!0,u(l)),n.dispatch(e)}finally{o=!0}}})},ej=e=>function(t){let{autoBatch:r=!0}=t??{},n=new ev(e);return r&&n.push(eE("object"==typeof r?r:void 0)),n};function ex(e){let t;let r={},n=[],o={addCase(e,t){let n="string"==typeof e?e:e.type;if(!n)throw Error(eq(28));if(n in r)throw Error(eq(29));return r[n]=t,o},addMatcher:(e,t)=>(n.push({matcher:e,reducer:t}),o),addDefaultCase:e=>(t=e,o)};return e(o),[r,n,t]}var eP=(e,t)=>eh(e)?e.match(t):e(t),eS=(e=21)=>{let t="",r=e;for(;r--;)t+="ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW"[64*Math.random()|0];return t},eC=["name","message","stack","code"],eM=Symbol.for("rtk-slice-createasyncthunk"),eN=(e=>(e.reducer="reducer",e.reducerWithPrepare="reducerWithPrepare",e.asyncThunk="asyncThunk",e))(eN||{}),ez=function({creators:e}={}){let t=e?.asyncThunk?.[eM];return function(e){let r;let{name:n,reducerPath:o=n}=e;if(!n)throw Error(eq(11));let i=("function"==typeof e.reducers?e.reducers(function(){function e(e,t){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer:e=>Object.assign({[e.name]:(...t)=>e(...t)}[e.name],{_reducerDefinitionType:"reducer"}),preparedReducer:(e,t)=>({_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:t}),asyncThunk:e}}()):e.reducers)||{},a=Object.keys(i),c={},u={},l={},s=[],f={addCase(e,t){let r="string"==typeof e?e:e.type;if(!r)throw Error(eq(12));if(r in u)throw Error(eq(13));return u[r]=t,f},addMatcher:(e,t)=>(s.push({matcher:e,reducer:t}),f),exposeAction:(e,t)=>(l[e]=t,f),exposeCaseReducer:(e,t)=>(c[e]=t,f)};function d(){let[t={},r=[],n]="function"==typeof e.extraReducers?ex(e.extraReducers):[e.extraReducers],o={...t,...u};return function(e,t){let r;let[n,o,i]=ex(t);if("function"==typeof e)r=()=>em(e());else{let t=em(e);r=()=>t}function a(e=r(),t){let c=[n[t.type],...o.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return 0===c.filter(e=>!!e).length&&(c=[i]),c.reduce((e,r)=>{if(r){if(L(e)){let n=r(e,t);return void 0===n?e:n}if(T(e))return ep(e,e=>r(e,t));{let n=r(e,t);if(void 0===n){if(null===e)return e;throw Error("A case reducer on a non-draftable value must not return undefined")}return n}}return e},e)}return a.getInitialState=r,a}(e.initialState,e=>{for(let t in o)e.addCase(t,o[t]);for(let t of s)e.addMatcher(t.matcher,t.reducer);for(let t of r)e.addMatcher(t.matcher,t.reducer);n&&e.addDefaultCase(n)})}a.forEach(r=>{let o=i[r],a={reducerName:r,type:`${n}/${r}`,createNotation:"function"==typeof e.reducers};"asyncThunk"===o._reducerDefinitionType?function({type:e,reducerName:t},r,n,o){if(!o)throw Error(eq(18));let{payloadCreator:i,fulfilled:a,pending:c,rejected:u,settled:l,options:s}=r,f=o(e,i,s);n.exposeAction(t,f),a&&n.addCase(f.fulfilled,a),c&&n.addCase(f.pending,c),u&&n.addCase(f.rejected,u),l&&n.addMatcher(f.settled,l),n.exposeCaseReducer(t,{fulfilled:a||ek,pending:c||ek,rejected:u||ek,settled:l||ek})}(a,o,f,t):function({type:e,reducerName:t,createNotation:r},n,o){let i,a;if("reducer"in n){if(r&&"reducerWithPrepare"!==n._reducerDefinitionType)throw Error(eq(17));i=n.reducer,a=n.prepare}else i=n;o.addCase(e,i).exposeCaseReducer(t,i).exposeAction(t,a?e_(e,a):e_(e))}(a,o,f)});let p=e=>e,y=new Map;function h(e,t){return r||(r=d()),r(e,t)}function _(){return r||(r=d()),r.getInitialState()}function b(t,r=!1){function n(e){let n=e[t];return void 0===n&&r&&(n=_()),n}function o(t=p){let n=eg(y,r,()=>new WeakMap);return eg(n,t,()=>{let n={};for(let[o,i]of Object.entries(e.selectors??{}))n[o]=function(e,t,r,n){function o(i,...a){let c=t(i);return void 0===c&&n&&(c=r()),e(c,...a)}return o.unwrapped=e,o}(i,t,_,r);return n})}return{reducerPath:t,getSelectors:o,get selectors(){return o(n)},selectSlice:n}}let v={name:n,reducer:h,actions:l,caseReducers:c,getInitialState:_,...b(o),injectInto(e,{reducerPath:t,...r}={}){let n=t??o;return e.inject({reducerPath:n,reducer:h},r),{...v,...b(n,!0)}}};return v}}();function ek(){}var eL=class{constructor(e){this.code=e,this.message=`task cancelled (reason: ${e})`}name="TaskAbortError";message},eT=(e,t)=>{if("function"!=typeof e)throw TypeError(eq(32))},eR=()=>{},eA=(e,t=eR)=>(e.catch(t),e),eD=(e,t)=>(e.addEventListener("abort",t,{once:!0}),()=>e.removeEventListener("abort",t)),eI=(e,t)=>{let r=e.signal;r.aborted||("reason"in r||Object.defineProperty(r,"reason",{enumerable:!0,value:t,configurable:!0,writable:!0}),e.abort(t))},eF=e=>{if(e.aborted){let{reason:t}=e;throw new eL(t)}},eV=e=>t=>eA((function(e,t){let r=eR;return new Promise((n,o)=>{let i=()=>o(new eL(e.reason));if(e.aborted){i();return}r=eD(e,i),t.finally(()=>r()).then(n,o)}).finally(()=>{r=eR})})(e,t).then(t=>(eF(e),t))),{assign:eH}=Object,eU="listenerMiddleware",e$=e=>{let{type:t,actionCreator:r,matcher:n,predicate:o,effect:i}=e;if(t)o=e_(t).match;else if(r)t=r.type,o=r.match;else if(n)o=n;else if(o);else throw Error(eq(21));return eT(i,"options.listener"),{predicate:o,type:t,effect:i}},eK=eH(e=>{let{type:t,predicate:r,effect:n}=e$(e);return{id:eS(),effect:n,type:t,predicate:r,pending:new Set,unsubscribe:()=>{throw Error(eq(22))}}},{withTypes:()=>eK}),eB=eH(e_(`${eU}/add`),{withTypes:()=>eB}),eW=eH(e_(`${eU}/remove`),{withTypes:()=>eW}),eX=Symbol.for("rtk-state-proxy-original");function eq(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}let eQ=ez({name:"modal",initialState:{isOpen:!1,type:null,props:null},reducers:{openModal:(e,t)=>{e.isOpen=!0,e.type=t.payload.type,e.props=t.payload.props},closeModal:e=>{e.isOpen=!1,e.type=null,e.props=null}}}),{openModal:eY,closeModal:eZ}=eQ.actions,eG=function(e){let t,r;let n=ew(),{reducer:o,middleware:i,devTools:a=!0,preloadedState:c,enhancers:u}=e||{};if("function"==typeof o)t=o;else if(j(o))t=function(e){let t;let r=Object.keys(e),n={};for(let t=0;t<r.length;t++){let o=r[t];"function"==typeof e[o]&&(n[o]=e[o])}let o=Object.keys(n);try{!function(e){Object.keys(e).forEach(t=>{let r=e[t];if(void 0===r(void 0,{type:E.INIT}))throw Error(g(12));if(void 0===r(void 0,{type:E.PROBE_UNKNOWN_ACTION()}))throw Error(g(13))})}(n)}catch(e){t=e}return function(e={},r){if(t)throw t;let i=!1,a={};for(let t=0;t<o.length;t++){let c=o[t],u=n[c],l=e[c],s=u(l,r);if(void 0===s)throw r&&r.type,Error(g(14));a[c]=s,i=i||s!==l}return(i=i||o.length!==Object.keys(e).length)?a:e}}(o);else throw Error(eq(1));r="function"==typeof i?i(n):n();let l=x;a&&(l=ey({trace:!1,..."object"==typeof a&&a}));let s=ej(function(...e){return t=>(r,n)=>{let o=t(r,n),i=()=>{throw Error(g(15))},a={getState:o.getState,dispatch:(e,...t)=>i(e,...t)};return i=x(...e.map(e=>e(a)))(o.dispatch),{...o,dispatch:i}}}(...r));return function e(t,r,n){if("function"!=typeof t)throw Error(g(2));if("function"==typeof r&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw Error(g(0));if("function"==typeof r&&void 0===n&&(n=r,r=void 0),void 0!==n){if("function"!=typeof n)throw Error(g(1));return n(e)(t,r)}let o=t,i=r,a=new Map,c=a,u=0,l=!1;function s(){c===a&&(c=new Map,a.forEach((e,t)=>{c.set(t,e)}))}function f(){if(l)throw Error(g(3));return i}function d(e){if("function"!=typeof e)throw Error(g(4));if(l)throw Error(g(5));let t=!0;s();let r=u++;return c.set(r,e),function(){if(t){if(l)throw Error(g(6));t=!1,s(),c.delete(r),a=null}}}function p(e){if(!j(e))throw Error(g(7));if(void 0===e.type)throw Error(g(8));if("string"!=typeof e.type)throw Error(g(17));if(l)throw Error(g(9));try{l=!0,i=o(i,e)}finally{l=!1}return(a=c).forEach(e=>{e()}),e}return p({type:E.INIT}),{dispatch:p,subscribe:d,getState:f,replaceReducer:function(e){if("function"!=typeof e)throw Error(g(10));o=e,p({type:E.REPLACE})},[w]:function(){return{subscribe(e){if("object"!=typeof e||null===e)throw Error(g(11));function t(){e.next&&e.next(f())}return t(),{unsubscribe:d(t)}},[w](){return this}}}}}(t,c,l(..."function"==typeof u?u(s):s()))}({reducer:{modal:eQ.reducer}});function eJ(e){let{Component:t,pageProps:r}=e;return(0,o.jsx)(v,{store:eG,children:(0,o.jsxs)("div",{className:"layout",children:[(0,o.jsx)(m.A,{}),(0,o.jsx)("main",{children:(0,o.jsx)(t,{...r})})]})})}r(3164)},3164:()=>{},5681:e=>{e.exports={header:"Header_header__sSSiY",nav:"Header_nav__5PAUe",navList:"Header_navList__dnQLf",navItem:"Header_navItem__eFUKF",navLink:"Header_navLink__ZIzXj"}},1106:(e,t,r)=>{e.exports=r(6397)},5160:(e,t,r)=>{"use strict";var n=r(6540);"function"==typeof Object.is&&Object.is,n.useSyncExternalStore,n.useRef,n.useEffect,n.useMemo,n.useDebugValue},8418:(e,t,r)=>{"use strict";r(5160)}},e=>{var t=t=>e(e.s=t);e.O(0,[593,792],()=>(t(8424),t(8440))),_N_E=e.O()}]);