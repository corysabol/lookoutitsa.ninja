import{s as e,n as t,S as s,i as r,e as n,t as a,a as o,c as l,b as c,d as i,f as u,g as p,h,j as m,o as f,k as d,m as g,l as v,p as $,q as b,r as E,u as y,v as S,w as _,x as w,y as N,z as L}from"./chunk.4beaa34a.js";function P(s,r=t){let n;const a=[];function o(t){if(e(s,t)){if(s=t,!n)return;a.forEach(e=>e[1]()),a.forEach(e=>e[0](s))}}return{set:o,update:function(e){o(e(s))},subscribe:function(e,l=t){const c=[e,l];return a.push(c),1===a.length&&(n=r(o)||t),e(s),()=>{const e=a.indexOf(c);-1!==e&&a.splice(e,1),0===a.length&&n()}}}}const x={},R=()=>({});function A(e){var s,r,f,d,g,v,$,b,E,y,S,_,w,N,L,P,x,R,A,C,j,k,U,q,I,O;return{c(){s=n("nav"),r=n("ul"),f=n("li"),d=n("a"),g=a("home"),$=o(),b=n("li"),E=n("a"),y=a("about"),_=o(),w=n("li"),N=n("a"),L=a("blog"),x=o(),R=n("li"),A=n("div"),C=n("label"),j=n("input"),k=o(),U=n("div"),q=o(),I=n("em"),O=a("Become one with the shadows."),this.h()},l(e){s=l(e,"NAV",{class:!0},!1);var t=c(s);r=l(t,"UL",{class:!0},!1);var n=c(r);f=l(n,"LI",{class:!0},!1);var a=c(f);d=l(a,"A",{class:!0,href:!0},!1);var o=c(d);g=i(o,"home"),o.forEach(u),a.forEach(u),$=i(n,"\n\t\t"),b=l(n,"LI",{class:!0},!1);var p=c(b);E=l(p,"A",{class:!0,href:!0},!1);var h=c(E);y=i(h,"about"),h.forEach(u),p.forEach(u),_=i(n,"\n\n\t\t\n\t\t"),w=l(n,"LI",{class:!0},!1);var m=c(w);N=l(m,"A",{rel:!0,class:!0,href:!0},!1);var v=c(N);L=i(v,"blog"),v.forEach(u),m.forEach(u),x=i(n,"\n    "),R=l(n,"LI",{class:!0},!1);var S=c(R);A=l(S,"DIV",{class:!0},!1);var P=c(A);C=l(P,"LABEL",{class:!0,for:!0},!1);var D=c(C);j=l(D,"INPUT",{type:!0,id:!0,class:!0},!1),c(j).forEach(u),k=i(D,"\n          "),U=l(D,"DIV",{class:!0},!1),c(U).forEach(u),D.forEach(u),q=i(P,"\n        "),I=l(P,"EM",{class:!0},!1);var B=c(I);O=i(B,"Become one with the shadows."),B.forEach(u),P.forEach(u),S.forEach(u),n.forEach(u),t.forEach(u),this.h()},h(){d.className=v=(void 0===e.segment?"selected":"")+" svelte-17hnnrt",d.href=".",f.className="svelte-17hnnrt",E.className=S=("about"===e.segment?"selected":"")+" svelte-17hnnrt",E.href="about",b.className="svelte-17hnnrt",N.rel="prefetch",N.className=P=("blog"===e.segment?"selected":"")+" svelte-17hnnrt",N.href="blog",w.className="svelte-17hnnrt",p(j,"type","checkbox"),j.id="checkbox",j.className="svelte-17hnnrt",U.className="slider round svelte-17hnnrt",C.className="theme-switch svelte-17hnnrt",C.htmlFor="checkbox",I.className="svelte-17hnnrt",A.className="theme-switch-wrapper svelte-17hnnrt",R.className="svelte-17hnnrt",r.className="svelte-17hnnrt",s.className="svelte-17hnnrt"},m(e,t){h(e,s,t),m(s,r),m(r,f),m(f,d),m(d,g),m(r,$),m(r,b),m(b,E),m(E,y),m(r,_),m(r,w),m(w,N),m(N,L),m(r,x),m(r,R),m(R,A),m(A,C),m(C,j),m(C,k),m(C,U),m(A,q),m(A,I),m(I,O)},p(e,t){e.segment&&v!==(v=(void 0===t.segment?"selected":"")+" svelte-17hnnrt")&&(d.className=v),e.segment&&S!==(S=("about"===t.segment?"selected":"")+" svelte-17hnnrt")&&(E.className=S),e.segment&&P!==(P=("blog"===t.segment?"selected":"")+" svelte-17hnnrt")&&(N.className=P)},i:t,o:t,d(e){e&&u(s)}}}function C(e,t,s){f(()=>{document.querySelector('.theme-switch input[type="checkbox"]').addEventListener("change",e=>{e.target.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")},!1)});let{segment:r}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment)}),{segment:r}}class j extends s{constructor(t){super(),r(this,t,C,A,e,["segment"])}}function k(e){var t,s,r,a=new j({props:{segment:e.segment}});const p=e.$$slots.default,m=d(p,e,null);return{c(){a.$$.fragment.c(),t=o(),s=n("main"),m&&m.c(),this.h()},l(e){a.$$.fragment.l(e),t=i(e,"\n\n"),s=l(e,"MAIN",{class:!0},!1);var r=c(s);m&&m.l(r),r.forEach(u),this.h()},h(){s.className="svelte-7hdbxu"},m(e,n){g(a,e,n),h(e,t,n),h(e,s,n),m&&m.m(s,null),r=!0},p(e,t){var s={};e.segment&&(s.segment=t.segment),a.$set(s),m&&m.p&&e.$$scope&&m.p(v(p,t,e,null),$(p,t,null))},i(e){r||(a.$$.fragment.i(e),m&&m.i&&m.i(e),r=!0)},o(e){a.$$.fragment.o(e),m&&m.o&&m.o(e),r=!1},d(e){a.$destroy(e),e&&(u(t),u(s)),m&&m.d(e)}}}function U(e,t,s){let{segment:r}=t,{$$slots:n={},$$scope:a}=t;return e.$set=(e=>{"segment"in e&&s("segment",r=e.segment),"$$scope"in e&&s("$$scope",a=e.$$scope)}),{segment:r,$$slots:n,$$scope:a}}class q extends s{constructor(t){super(),r(this,t,U,k,e,["segment"])}}function I(e){var t,s,r=e.error.stack;return{c(){t=n("pre"),s=a(r)},l(e){t=l(e,"PRE",{},!1);var n=c(t);s=i(n,r),n.forEach(u)},m(e,r){h(e,t,r),m(t,s)},p(e,t){e.error&&r!==(r=t.error.stack)&&b(s,r)},d(e){e&&u(t)}}}function O(e){var s,r,p,f,d,g,v,$,y,S=e.error.message;document.title=s=e.status;var _=e.dev&&e.error.stack&&I(e);return{c(){r=o(),p=n("h1"),f=a(e.status),d=o(),g=n("p"),v=a(S),$=o(),_&&_.c(),y=E(),this.h()},l(t){r=i(t,"\n\n"),p=l(t,"H1",{class:!0},!1);var s=c(p);f=i(s,e.status),s.forEach(u),d=i(t,"\n\n"),g=l(t,"P",{class:!0},!1);var n=c(g);v=i(n,S),n.forEach(u),$=i(t,"\n\n"),_&&_.l(t),y=E(),this.h()},h(){p.className="svelte-8od9u6",g.className="svelte-8od9u6"},m(e,t){h(e,r,t),h(e,p,t),m(p,f),h(e,d,t),h(e,g,t),m(g,v),h(e,$,t),_&&_.m(e,t),h(e,y,t)},p(e,t){e.status&&s!==(s=t.status)&&(document.title=s),e.status&&b(f,t.status),e.error&&S!==(S=t.error.message)&&b(v,S),t.dev&&t.error.stack?_?_.p(e,t):((_=I(t)).c(),_.m(y.parentNode,y)):_&&(_.d(1),_=null)},i:t,o:t,d(e){e&&(u(r),u(p),u(d),u(g),u($)),_&&_.d(e),e&&u(y)}}}function D(e,t,s){let{status:r,error:n}=t;return e.$set=(e=>{"status"in e&&s("status",r=e.status),"error"in e&&s("error",n=e.error)}),{status:r,error:n,dev:!1}}class B extends s{constructor(t){super(),r(this,t,D,O,e,["status","error"])}}function H(e){var t,s,r=[e.level1.props],n=e.level1.component;function a(e){let t={};for(var s=0;s<r.length;s+=1)t=y(t,r[s]);return{props:t}}if(n)var o=new n(a());return{c(){o&&o.$$.fragment.c(),t=E()},l(e){o&&o.$$.fragment.l(e),t=E()},m(e,r){o&&g(o,e,r),h(e,t,r),s=!0},p(e,s){var l=e.level1?S(r,[s.level1.props]):{};if(n!==(n=s.level1.component)){if(o){L();const e=o;w(()=>{e.$destroy()}),e.$$.fragment.o(1),N()}n?((o=new n(a())).$$.fragment.c(),o.$$.fragment.i(1),g(o,t.parentNode,t)):o=null}else n&&o.$set(l)},i(e){s||(o&&o.$$.fragment.i(e),s=!0)},o(e){o&&o.$$.fragment.o(e),s=!1},d(e){e&&u(t),o&&o.$destroy(e)}}}function V(e){var t,s=new B({props:{error:e.error,status:e.status}});return{c(){s.$$.fragment.c()},l(e){s.$$.fragment.l(e)},m(e,r){g(s,e,r),t=!0},p(e,t){var r={};e.error&&(r.error=t.error),e.status&&(r.status=t.status),s.$set(r)},i(e){t||(s.$$.fragment.i(e),t=!0)},o(e){s.$$.fragment.o(e),t=!1},d(e){s.$destroy(e)}}}function J(e){var t,s,r,n,a=[V,H],o=[];function l(e){return e.error?0:1}return t=l(e),s=o[t]=a[t](e),{c(){s.c(),r=E()},l(e){s.l(e),r=E()},m(e,s){o[t].m(e,s),h(e,r,s),n=!0},p(e,n){var c=t;(t=l(n))===c?o[t].p(e,n):(L(),w(()=>{o[c].d(1),o[c]=null}),s.o(1),N(),(s=o[t])||(s=o[t]=a[t](n)).c(),s.i(1),s.m(r.parentNode,r))},i(e){n||(s&&s.i(),n=!0)},o(e){s&&s.o(),n=!1},d(e){o[t].d(e),e&&u(r)}}}function T(e){var t,s=[{segment:e.segments[0]},e.level0.props];let r={$$slots:{default:[J]},$$scope:{ctx:e}};for(var n=0;n<s.length;n+=1)r=y(r,s[n]);var a=new q({props:r});return{c(){a.$$.fragment.c()},l(e){a.$$.fragment.l(e)},m(e,s){g(a,e,s),t=!0},p(e,t){var r=e.segments||e.level0?S(s,[e.segments&&{segment:t.segments[0]},e.level0&&t.level0.props]):{};(e.$$scope||e.error||e.status||e.level1)&&(r.$$scope={changed:e,ctx:t}),a.$set(r)},i(e){t||(a.$$.fragment.i(e),t=!0)},o(e){a.$$.fragment.o(e),t=!1},d(e){a.$destroy(e)}}}function K(e,t,s){let{stores:r,error:n,status:a,segments:o,level0:l,level1:c=null}=t;return _(x,r),e.$set=(e=>{"stores"in e&&s("stores",r=e.stores),"error"in e&&s("error",n=e.error),"status"in e&&s("status",a=e.status),"segments"in e&&s("segments",o=e.segments),"level0"in e&&s("level0",l=e.level0),"level1"in e&&s("level1",c=e.level1)}),{stores:r,error:n,status:a,segments:o,level0:l,level1:c}}class M extends s{constructor(t){super(),r(this,t,K,T,e,["stores","error","status","segments","level0","level1"])}}const z=[/^\/blog.json$/,/^\/blog\/([^\/]+?).json$/],F=[{js:()=>import("./index.d2bfcdd4.js"),css:["index.d2bfcdd4.css"]},{js:()=>import("./about.9f60be10.js"),css:[]},{js:()=>import("./index.0d119bc0.js"),css:["index.0d119bc0.css"]},{js:()=>import("./[slug].2619f302.js"),css:[]},{js:()=>import("./404.ed988a10.js"),css:["404.ed988a10.css"]}],G=(e=>[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:e(t[1])})}]},{pattern:/^\/404\/?$/,parts:[{i:4}]}])(decodeURIComponent);const W="undefined"!=typeof __SAPPER__&&__SAPPER__;let X,Y,Q,Z=!1,ee=[],te="{}";const se={page:P({}),preloading:P(null),session:P(W&&W.session)};let re,ne;se.session.subscribe(async e=>{if(re=e,!Z)return;ne=!0;const t=he(new URL(location.href)),s=Y={},{redirect:r,props:n,branch:a}=await ge(t);s===Y&&await de(r,a,n,t.page)});let ae,oe=null;let le,ce=1;const ie="undefined"!=typeof history?history:{pushState:(e,t,s)=>{},replaceState:(e,t,s)=>{},scrollRestoration:""},ue={};function pe(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,s,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[s]&&(t[s]=[t[s]]),"object"==typeof t[s]?t[s].push(r):t[s]=r}),t}function he(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(W.baseUrl))return null;let t=e.pathname.slice(W.baseUrl.length);if(""===t&&(t="/"),!z.some(e=>e.test(t)))for(let s=0;s<G.length;s+=1){const r=G[s],n=r.pattern.exec(t);if(n){const s=pe(e.search),a=r.parts[r.parts.length-1],o=a.params?a.params(n):{},l={path:t,query:s,params:o};return{href:e.href,route:r,match:n,page:l}}}}function me(){return{x:pageXOffset,y:pageYOffset}}async function fe(e,t,s,r){if(t)le=t;else{const e=me();ue[le]=e,t=le=++ce,ue[le]=s?e:{x:0,y:0}}le=t,X&&se.preloading.set(!0);const n=oe&&oe.href===e.href?oe.promise:ge(e);oe=null;const a=Y={},{redirect:o,props:l,branch:c}=await n;if(a===Y&&(await de(o,c,l,e.page),document.activeElement&&document.activeElement.blur(),!s)){let e=ue[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top})}ue[le]=e,e&&scrollTo(e.x,e.y)}}async function de(e,t,s,r){if(e)return function(e,t={replaceState:!1}){const s=he(new URL(e,document.baseURI));return s?(ie[t.replaceState?"replaceState":"pushState"]({id:le},"",e),fe(s,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}(e.location,{replaceState:!0});if(se.page.set(r),se.preloading.set(!1),X)X.$set(s);else{s.stores={page:{subscribe:se.page.subscribe},preloading:{subscribe:se.preloading.subscribe},session:se.session},s.level0={props:await Q};const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)$e(e.nextSibling);$e(e),$e(t)}X=new M({target:ae,props:s,hydrate:!0})}ee=t,te=JSON.stringify(r.query),Z=!0,ne=!1}async function ge(e){const{route:t,page:s}=e,r=s.path.split("/").filter(Boolean);let n=null;const a={error:null,status:200,segments:[r[0]]},o={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(n&&(n.statusCode!==e||n.location!==t))throw new Error("Conflicting redirects");n={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let l;Q||(Q=W.preloaded[0]||R.call(o,{path:s.path,query:s.query,params:{}},re));let c=1;try{const n=JSON.stringify(s.query),i=t.pattern.exec(s.path);let u=!1;l=await Promise.all(t.parts.map(async(t,l)=>{const p=r[l];if(function(e,t,s,r){if(r!==te)return!0;const n=ee[e];return!!n&&(t!==n.segment||!(!n.match||JSON.stringify(n.match.slice(1,e+2))===JSON.stringify(s.slice(1,e+2)))||void 0)}(l,p,i,n)&&(u=!0),a.segments[c]=r[l+1],!t)return{segment:p};const h=c++;if(!ne&&!u&&ee[l]&&ee[l].part===t.i)return ee[l];u=!1;const{default:m,preload:f}=await function(e){const t="string"==typeof e.css?[]:e.css.map(ve);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(F[t.i]);let d;return d=Z||!W.preloaded[l+1]?f?await f.call(o,{path:s.path,query:s.query,params:t.params?t.params(e.match):{}},re):{}:W.preloaded[l+1],a[`level${h}`]={component:m,props:d,segment:p,match:i,part:t.i}}))}catch(e){a.error=e,a.status=500,l=[]}return{redirect:n,props:a,branch:l}}function ve(e){const t=`client/${e}`;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,s)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=(()=>e()),r.onerror=s,document.head.appendChild(r)})}function $e(e){e.parentNode.removeChild(e)}function be(e){const t=he(new URL(e,document.baseURI));if(t)return oe&&e===oe.href||function(e,t){oe={href:e,promise:t}}(e,ge(t)),oe.promise}let Ee;function ye(e){clearTimeout(Ee),Ee=setTimeout(()=>{Se(e)},20)}function Se(e){const t=we(e.target);t&&"prefetch"===t.rel&&be(t.href)}function _e(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=we(e.target);if(!t)return;if(!t.href)return;const s="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(s?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(s?t.target.baseVal:t.target)return;const n=new URL(r);if(n.pathname===location.pathname&&n.search===location.search)return;const a=he(n);if(a){fe(a,null,t.hasAttribute("sapper-noscroll"),n.hash),e.preventDefault(),ie.pushState({id:le},"",n.href)}}function we(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function Ne(e){if(ue[le]=me(),e.state){const t=he(new URL(location.href));t?fe(t,e.state.id):location.href=location.href}else(function(e){le=e})(ce=ce+1),ie.replaceState({id:le},"",location.href)}!function(e){var t;"scrollRestoration"in ie&&(ie.scrollRestoration="manual"),t=e.target,ae=t,addEventListener("click",_e),addEventListener("popstate",Ne),addEventListener("touchstart",Se),addEventListener("mousemove",ye),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ie.replaceState({id:ce},"",t);const s=new URL(location.href);if(W.error)return function(e){const{pathname:t,search:s}=location,{session:r,preloaded:n,status:a,error:o}=W;Q||(Q=n&&n[0]),de(null,[],{error:o,status:a,session:r,level0:{props:Q},level1:{props:{status:a,error:o},component:B},segments:n},{path:t,query:pe(s),params:{}})}();const r=he(s);return r?fe(r,ce,!0,e):void 0})}({target:document.querySelector("#sapper")});
//# sourceMappingURL=client.5024fc85.js.map
