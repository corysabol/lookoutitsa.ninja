function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function l(t,e,n,r,s,o,a){const l=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(l){const s=c(e,n,r,a);t.p(s,l)}}function i(t){return null==t?"":t}function u(t,e){t.appendChild(e)}function f(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function d(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function m(t){return document.createTextNode(t)}function g(){return m(" ")}function $(){return m("")}function v(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t){return Array.from(t.childNodes)}function y(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;for(;e<s.attributes.length;){const t=s.attributes[e];n[t.name]?e++:s.removeAttribute(t.name)}return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):h(e)}function E(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return m(e)}function _(t){return E(t," ")}function w(t,e){e=""+e,t.data!==e&&(t.data=e)}function S(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function x(t,e=document.body){return Array.from(e.querySelectorAll(t))}let A;function L(t){A=t}function P(){if(!A)throw new Error("Function called outside component initialization");return A}const R=[],j=[],C=[],z=[],N=Promise.resolve();let k=!1;function q(t){C.push(t)}let O=!1;const U=new Set;function I(){if(!O){O=!0;do{for(let t=0;t<R.length;t+=1){const e=R[t];L(e),D(e.$$)}for(R.length=0;j.length;)j.pop()();for(let t=0;t<C.length;t+=1){const e=C[t];U.has(e)||(U.add(e),e())}C.length=0}while(R.length);for(;z.length;)z.pop()();k=!1,O=!1,U.clear()}}function D(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(q)}}const B=new Set;let H;function T(){H={r:0,c:[],p:H}}function V(){H.r||s(H.c),H=H.p}function J(t,e){t&&t.i&&(B.delete(t),t.i(e))}function M(t,e,n,r){if(t&&t.o){if(B.has(t))return;B.add(t),H.c.push(()=>{B.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function K(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function Y(t){return"object"==typeof t&&null!==t?t:{}}function F(t){t&&t.c()}function G(t,e){t&&t.l(e)}function W(t,e,r){const{fragment:a,on_mount:c,on_destroy:l,after_update:i}=t.$$;a&&a.m(e,r),q(()=>{const e=c.map(n).filter(o);l?l.push(...e):s(e),t.$$.on_mount=[]}),i.forEach(q)}function X(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(R.push(t),k||(k=!0,N.then(I)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Z(e,n,o,a,c,l,i=[-1]){const u=A;L(e);const f=n.props||{},d=e.$$={fragment:null,ctx:null,props:l,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:i};let h=!1;if(d.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return d.ctx&&c(d.ctx[t],d.ctx[t]=s)&&(d.bound[t]&&d.bound[t](s),h&&Q(e,t)),n}):[],d.update(),h=!0,s(d.before_update),d.fragment=!!a&&a(d.ctx),n.target){if(n.hydrate){const t=b(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&J(e.$$.fragment),W(e,n.target,n.anchor),I()}L(u)}class tt{$destroy(){X(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(){}}const et=[];function nt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!et.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),et.push(n,e)}if(t){for(let t=0;t<et.length;t+=2)et[t][0](et[t+1]);et.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const l=[a,c];return s.push(l),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(l);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const rt={},st=()=>({});function ot(e){let n,r,s,o,a,c,l,d,$,w,S,x,A,L,P,R,j,C,z,N,k,q,O,U,I,D;return{c(){n=h("nav"),r=h("ul"),s=h("li"),o=h("a"),a=m("home"),l=g(),d=h("li"),$=h("a"),w=m("about"),x=g(),A=h("li"),L=h("a"),P=m("blog"),j=g(),C=h("li"),z=h("div"),N=h("label"),k=h("input"),q=g(),O=h("div"),U=g(),I=h("em"),D=m("Become one with the shadows."),this.h()},l(t){n=y(t,"NAV",{class:!0});var e=b(n);r=y(e,"UL",{class:!0});var c=b(r);s=y(c,"LI",{class:!0});var i=b(s);o=y(i,"A",{class:!0,href:!0});var u=b(o);a=E(u,"home"),u.forEach(p),i.forEach(p),l=_(c),d=y(c,"LI",{class:!0});var f=b(d);$=y(f,"A",{class:!0,href:!0});var h=b($);w=E(h,"about"),h.forEach(p),f.forEach(p),x=_(c),A=y(c,"LI",{class:!0});var m=b(A);L=y(m,"A",{rel:!0,class:!0,href:!0});var g=b(L);P=E(g,"blog"),g.forEach(p),m.forEach(p),j=_(c),C=y(c,"LI",{class:!0});var v=b(C);z=y(v,"DIV",{class:!0});var S=b(z);N=y(S,"LABEL",{class:!0,for:!0});var R=b(N);k=y(R,"INPUT",{type:!0,id:!0,class:!0}),q=_(R),O=y(R,"DIV",{class:!0}),b(O).forEach(p),R.forEach(p),U=_(S),I=y(S,"EM",{class:!0});var B=b(I);D=E(B,"Become one with the shadows."),B.forEach(p),S.forEach(p),v.forEach(p),c.forEach(p),e.forEach(p),this.h()},h(){v(o,"class",c=i(void 0===e[0]?"selected":"")+" svelte-1dn1lzg"),v(o,"href","."),v(s,"class","svelte-1dn1lzg"),v($,"class",S=i("about"===e[0]?"selected":"")+" svelte-1dn1lzg"),v($,"href","about"),v(d,"class","svelte-1dn1lzg"),v(L,"rel","prefetch"),v(L,"class",R=i("blog"===e[0]?"selected":"")+" svelte-1dn1lzg"),v(L,"href","blog"),v(A,"class","svelte-1dn1lzg"),v(k,"type","checkbox"),v(k,"id","checkbox"),v(k,"class","svelte-1dn1lzg"),v(O,"class","slider round svelte-1dn1lzg"),v(N,"class","theme-switch svelte-1dn1lzg"),v(N,"for","checkbox"),v(I,"class","svelte-1dn1lzg"),v(z,"class","theme-switch-wrapper svelte-1dn1lzg"),v(C,"class","svelte-1dn1lzg"),v(r,"class","svelte-1dn1lzg"),v(n,"class","svelte-1dn1lzg")},m(t,e){f(t,n,e),u(n,r),u(r,s),u(s,o),u(o,a),u(r,l),u(r,d),u(d,$),u($,w),u(r,x),u(r,A),u(A,L),u(L,P),u(r,j),u(r,C),u(C,z),u(z,N),u(N,k),u(N,q),u(N,O),u(z,U),u(z,I),u(I,D)},p(t,[e]){1&e&&c!==(c=i(void 0===t[0]?"selected":"")+" svelte-1dn1lzg")&&v(o,"class",c),1&e&&S!==(S=i("about"===t[0]?"selected":"")+" svelte-1dn1lzg")&&v($,"class",S),1&e&&R!==(R=i("blog"===t[0]?"selected":"")+" svelte-1dn1lzg")&&v(L,"class",R)},i:t,o:t,d(t){t&&p(n)}}}function at(t,e,n){var r;r=()=>{document.querySelector('.theme-switch input[type="checkbox"]').addEventListener("change",t=>{t.target.checked?document.documentElement.setAttribute("data-theme","dark"):document.documentElement.setAttribute("data-theme","light")},!1)},P().$$.on_mount.push(r);let{segment:s}=e;return t.$set=t=>{"segment"in t&&n(0,s=t.segment)},[s]}class ct extends tt{constructor(t){super(),Z(this,t,at,ot,a,{segment:0})}}function lt(t){let e,n,r;const s=new ct({props:{segment:t[0]}}),o=t[2].default,a=function(t,e,n,r){if(t){const s=c(t,e,n,r);return t[0](s)}}(o,t,t[1],null);return{c(){F(s.$$.fragment),e=g(),n=h("main"),a&&a.c(),this.h()},l(t){G(s.$$.fragment,t),e=_(t),n=y(t,"MAIN",{class:!0});var r=b(n);a&&a.l(r),r.forEach(p),this.h()},h(){v(n,"class","svelte-7hdbxu")},m(t,o){W(s,t,o),f(t,e,o),f(t,n,o),a&&a.m(n,null),r=!0},p(t,[e]){const n={};1&e&&(n.segment=t[0]),s.$set(n),a&&a.p&&2&e&&l(a,o,t,t[1],e,null,null)},i(t){r||(J(s.$$.fragment,t),J(a,t),r=!0)},o(t){M(s.$$.fragment,t),M(a,t),r=!1},d(t){X(s,t),t&&p(e),t&&p(n),a&&a.d(t)}}}function it(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(1,o=t.$$scope)},[r,o,s]}class ut extends tt{constructor(t){super(),Z(this,t,it,lt,a,{segment:0})}}function ft(t){let e,n,r=t[1].stack+"";return{c(){e=h("pre"),n=m(r)},l(t){e=y(t,"PRE",{});var s=b(e);n=E(s,r),s.forEach(p)},m(t,r){f(t,e,r),u(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&w(n,r)},d(t){t&&p(e)}}}function pt(e){let n,r,s,o,a,c,l,i,d,S=e[1].message+"";document.title=n=e[0];let A=e[2]&&e[1].stack&&ft(e);return{c(){r=g(),s=h("h1"),o=m(e[0]),a=g(),c=h("p"),l=m(S),i=g(),A&&A.c(),d=$(),this.h()},l(t){x('[data-svelte="svelte-1o9r2ue"]',document.head).forEach(p),r=_(t),s=y(t,"H1",{class:!0});var n=b(s);o=E(n,e[0]),n.forEach(p),a=_(t),c=y(t,"P",{class:!0});var u=b(c);l=E(u,S),u.forEach(p),i=_(t),A&&A.l(t),d=$(),this.h()},h(){v(s,"class","svelte-8od9u6"),v(c,"class","svelte-8od9u6")},m(t,e){f(t,r,e),f(t,s,e),u(s,o),f(t,a,e),f(t,c,e),u(c,l),f(t,i,e),A&&A.m(t,e),f(t,d,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),1&e&&w(o,t[0]),2&e&&S!==(S=t[1].message+"")&&w(l,S),t[2]&&t[1].stack?A?A.p(t,e):(A=ft(t),A.c(),A.m(d.parentNode,d)):A&&(A.d(1),A=null)},i:t,o:t,d(t){t&&p(r),t&&p(s),t&&p(a),t&&p(c),t&&p(i),A&&A.d(t),t&&p(d)}}}function dt(t,e,n){let{status:r}=e,{error:s}=e;return t.$set=t=>{"status"in t&&n(0,r=t.status),"error"in t&&n(1,s=t.error)},[r,s,!1]}class ht extends tt{constructor(t){super(),Z(this,t,dt,pt,a,{status:0,error:1})}}function mt(t){let n,r;const s=[t[4].props];var o=t[4].component;function a(t){let n={};for(let t=0;t<s.length;t+=1)n=e(n,s[t]);return{props:n}}if(o)var c=new o(a());return{c(){c&&F(c.$$.fragment),n=$()},l(t){c&&G(c.$$.fragment,t),n=$()},m(t,e){c&&W(c,t,e),f(t,n,e),r=!0},p(t,e){const r=16&e?K(s,[Y(t[4].props)]):{};if(o!==(o=t[4].component)){if(c){T();const t=c;M(t.$$.fragment,1,0,()=>{X(t,1)}),V()}o?(F((c=new o(a())).$$.fragment),J(c.$$.fragment,1),W(c,n.parentNode,n)):c=null}else o&&c.$set(r)},i(t){r||(c&&J(c.$$.fragment,t),r=!0)},o(t){c&&M(c.$$.fragment,t),r=!1},d(t){t&&p(n),c&&X(c,t)}}}function gt(t){let e;const n=new ht({props:{error:t[0],status:t[1]}});return{c(){F(n.$$.fragment)},l(t){G(n.$$.fragment,t)},m(t,r){W(n,t,r),e=!0},p(t,e){const r={};1&e&&(r.error=t[0]),2&e&&(r.status=t[1]),n.$set(r)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){M(n.$$.fragment,t),e=!1},d(t){X(n,t)}}}function $t(t){let e,n,r,s;const o=[gt,mt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=$()},l(t){n.l(t),r=$()},m(t,n){a[e].m(t,n),f(t,r,n),s=!0},p(t,s){let l=e;e=c(t),e===l?a[e].p(t,s):(T(),M(a[l],1,1,()=>{a[l]=null}),V(),n=a[e],n||(n=a[e]=o[e](t),n.c()),J(n,1),n.m(r.parentNode,r))},i(t){s||(J(n),s=!0)},o(t){M(n),s=!1},d(t){a[e].d(t),t&&p(r)}}}function vt(t){let n;const r=[{segment:t[2][0]},t[3].props];let s={$$slots:{default:[$t]},$$scope:{ctx:t}};for(let t=0;t<r.length;t+=1)s=e(s,r[t]);const o=new ut({props:s});return{c(){F(o.$$.fragment)},l(t){G(o.$$.fragment,t)},m(t,e){W(o,t,e),n=!0},p(t,[e]){const n=12&e?K(r,[4&e&&{segment:t[2][0]},8&e&&Y(t[3].props)]):{};147&e&&(n.$$scope={dirty:e,ctx:t}),o.$set(n)},i(t){n||(J(o.$$.fragment,t),n=!0)},o(t){M(o.$$.fragment,t),n=!1},d(t){X(o,t)}}}function bt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:l=null}=e,{notify:i}=e;var u,f,p;return u=i,P().$$.after_update.push(u),f=rt,p=r,P().$$.context.set(f,p),t.$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,l=t.level1),"notify"in t&&n(6,i=t.notify)},[s,o,a,c,l,r,i]}class yt extends tt{constructor(t){super(),Z(this,t,bt,vt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Et=[/^\/blog\.json$/,/^\/blog\/([^\/]+?)\.json$/],_t=[{js:()=>import("./index.a8b048b9.js"),css:["index.a8b048b9.css","client.94a0117c.css"]},{js:()=>import("./about.4267c85a.js"),css:["client.94a0117c.css"]},{js:()=>import("./index.ff454523.js"),css:["index.ff454523.css","client.94a0117c.css"]},{js:()=>import("./[slug].0359fc72.js"),css:["client.94a0117c.css"]},{js:()=>import("./404.dc31f90f.js"),css:["404.dc31f90f.css","client.94a0117c.css"]}],wt=(St=decodeURIComponent,[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/blog\/?$/,parts:[{i:2}]},{pattern:/^\/blog\/([^\/]+?)\/?$/,parts:[null,{i:3,params:t=>({slug:St(t[1])})}]},{pattern:/^\/404\/?$/,parts:[{i:4}]}]);var St;const xt="undefined"!=typeof __SAPPER__&&__SAPPER__;let At,Lt,Pt,Rt=!1,jt=[],Ct="{}";const zt={page:function(t){const e=nt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:nt(null),session:nt(xt&&xt.session)};let Nt,kt;zt.session.subscribe(async t=>{if(Nt=t,!Rt)return;kt=!0;const e=Tt(new URL(location.href)),n=Lt={},{redirect:r,props:s,branch:o}=await Kt(e);n===Lt&&await Mt(r,o,s,e.page)});let qt,Ot=null;let Ut,It=1;const Dt="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},Bt={};function Ht(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function Tt(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(xt.baseUrl))return null;let e=t.pathname.slice(xt.baseUrl.length);if(""===e&&(e="/"),!Et.some(t=>t.test(e)))for(let n=0;n<wt.length;n+=1){const r=wt[n],s=r.pattern.exec(e);if(s){const n=Ht(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function Vt(){return{x:pageXOffset,y:pageYOffset}}async function Jt(t,e,n,r){if(e)Ut=e;else{const t=Vt();Bt[Ut]=t,e=Ut=++It,Bt[Ut]=n?t:{x:0,y:0}}Ut=e,At&&zt.preloading.set(!0);const s=Ot&&Ot.href===t.href?Ot.promise:Kt(t);Ot=null;const o=Lt={},{redirect:a,props:c,branch:l}=await s;if(o===Lt&&(await Mt(a,l,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=Bt[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}Bt[Ut]=t,t&&scrollTo(t.x,t.y)}}async function Mt(t,e,n,r){if(t)return function(t,e={replaceState:!1}){const n=Tt(new URL(t,document.baseURI));return n?(Dt[e.replaceState?"replaceState":"pushState"]({id:Ut},"",t),Jt(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}(t.location,{replaceState:!0});if(zt.page.set(r),zt.preloading.set(!1),At)At.$set(n);else{n.stores={page:{subscribe:zt.page.subscribe},preloading:{subscribe:zt.preloading.subscribe},session:zt.session},n.level0={props:await Pt},n.notify=zt.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)Ft(t.nextSibling);Ft(t),Ft(e)}At=new yt({target:qt,props:n,hydrate:!0})}jt=e,Ct=JSON.stringify(r.query),Rt=!0,kt=!1}async function Kt(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;Pt||(Pt=xt.preloaded[0]||st.call(a,{host:n.host,path:n.path,query:n.query,params:{}},Nt));let l=1;try{const s=JSON.stringify(n.query),i=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==Ct)return!0;const s=jt[t];return!!s&&(e!==s.segment||(!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0))}(c,f,i,s)&&(u=!0),o.segments[l]=r[c+1],!e)return{segment:f};const p=l++;if(!kt&&!u&&jt[c]&&jt[c].part===e.i)return jt[c];u=!1;const{default:d,preload:h}=await function(t){const e="string"==typeof t.css?[]:t.css.map(Yt);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(_t[e.i]);let m;return m=Rt||!xt.preloaded[c+1]?h?await h.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},Nt):{}:xt.preloaded[c+1],o["level"+p]={component:d,props:m,segment:f,match:i,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function Yt(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function Ft(t){t.parentNode.removeChild(t)}function Gt(t){const e=Tt(new URL(t,document.baseURI));if(e)return Ot&&t===Ot.href||function(t,e){Ot={href:t,promise:e}}(t,Kt(e)),Ot.promise}let Wt;function Xt(t){clearTimeout(Wt),Wt=setTimeout(()=>{Qt(t)},20)}function Qt(t){const e=te(t.target);e&&"prefetch"===e.rel&&Gt(e.href)}function Zt(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=te(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=Tt(s);if(o){Jt(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),Dt.pushState({id:Ut},"",s.href)}}function te(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function ee(t){if(Bt[Ut]=Vt(),t.state){const e=Tt(new URL(location.href));e?Jt(e,t.state.id):location.href=location.href}else It=It+1,function(t){Ut=t}(It),Dt.replaceState({id:Ut},"",location.href)}var ne;ne={target:document.querySelector("#sapper")},"scrollRestoration"in Dt&&(Dt.scrollRestoration="manual"),addEventListener("beforeunload",()=>{Dt.scrollRestoration="auto"}),addEventListener("load",()=>{Dt.scrollRestoration="manual"}),function(t){qt=t}(ne.target),addEventListener("click",Zt),addEventListener("popstate",ee),addEventListener("touchstart",Qt),addEventListener("mousemove",Xt),Promise.resolve().then(()=>{const{hash:t,href:e}=location;Dt.replaceState({id:It},"",e);const n=new URL(location.href);if(xt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=xt;Pt||(Pt=o&&o[0]),Mt(null,[],{error:c,status:a,session:s,level0:{props:Pt},level1:{props:{status:a,error:c},component:ht},segments:o},{host:e,path:n,query:Ht(r),params:{}})}();const r=Tt(n);return r?Jt(r,It,!0,t):void 0});export{tt as S,g as a,y as b,_ as c,p as d,h as e,b as f,E as g,v as h,Z as i,S as j,f as k,u as l,w as m,t as n,d as o,F as p,x as q,G as r,a as s,m as t,W as u,J as v,M as w,X as x};
