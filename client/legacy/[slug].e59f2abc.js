import{_ as t,a as n,b as e,c as r,i as c,s as a,d as o,S as s,f as u,t as i,e as f,j as l,k as h,l as p,g as v,h as d,m,o as y,p as $,v as R,u as g,r as x,x as b,y as D,z as E,q as j,A as H,B as k,C as w,D as S,E as q}from"./client.e3abdbb1.js";function A(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var o=n(this).constructor;c=Reflect.construct(a,arguments,o)}else c=a.apply(this,arguments);return e(this,c)}}function L(t){var n,e,r,c,a,o,s,b,D,E=t[0].title+"",j=t[0].date+"",H=t[0].author+"",k=t[0].html+"";return{c:function(){n=u("h1"),e=i(E),r=f(),c=u("h5"),a=i(j),o=i(" - "),s=i(H),b=f(),D=u("div"),this.h()},l:function(t){n=l(t,"H1",{});var u=h(n);e=p(u,E),u.forEach(v),r=d(t),c=l(t,"H5",{});var i=h(c);a=p(i,j),o=p(i," - "),s=p(i,H),i.forEach(v),b=d(t),D=l(t,"DIV",{class:!0}),h(D).forEach(v),this.h()},h:function(){m(D,"class","content")},m:function(t,u){y(t,n,u),$(n,e),y(t,r,u),y(t,c,u),$(c,a),$(c,o),$(c,s),y(t,b,u),y(t,D,u),D.innerHTML=k},p:function(t,n){var r=R(n,1)[0];1&r&&E!==(E=t[0].title+"")&&g(e,E),1&r&&j!==(j=t[0].date+"")&&g(a,j),1&r&&H!==(H=t[0].author+"")&&g(s,H),1&r&&k!==(k=t[0].html+"")&&(D.innerHTML=k)},i:x,o:x,d:function(t){t&&v(n),t&&v(r),t&&v(c),t&&v(b),t&&v(D)}}}function M(t,n,e){var r=n.content;return t.$set=function(t){"content"in t&&e(0,r=t.content)},[r]}var P=function(n){t(u,s);var e=A(u);function u(t){var n;return r(this,u),n=e.call(this),c(o(n),t,M,L,a,{content:0}),n}return u}();function T(t){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var c,a=n(t);if(r){var o=n(this).constructor;c=Reflect.construct(a,arguments,o)}else c=a.apply(this,arguments);return e(this,c)}}function z(t){var n,e,r;document.title=n=t[0].title;var c=new P({props:{content:t[0]}});return{c:function(){e=f(),E(c.$$.fragment)},l:function(t){j('[data-svelte="svelte-1sclao"]',document.head).forEach(v),e=d(t),H(c.$$.fragment,t)},m:function(t,n){y(t,e,n),k(c,t,n),r=!0},p:function(t,e){var a=R(e,1)[0];(!r||1&a)&&n!==(n=t[0].title)&&(document.title=n);var o={};1&a&&(o.content=t[0]),c.$set(o)},i:function(t){r||(w(c.$$.fragment,t),r=!0)},o:function(t){S(c.$$.fragment,t),r=!1},d:function(t){t&&v(e),q(c,t)}}}function B(t){return C.apply(this,arguments)}function C(){return(C=b(D.mark((function t(n){var e,r,c,a;return D.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=n.params,n.query,r=e.slug,t.next=4,this.fetch("blog/".concat(r,".json"));case 4:if(200!==(c=t.sent).status){t.next=10;break}return t.next=8,c.json();case 8:return a=t.sent,t.abrupt("return",{content:a});case 10:this.error(404,"No dice, Ace.");case 11:case"end":return t.stop()}}),t,this)})))).apply(this,arguments)}function I(t,n,e){var r=n.content;return t.$set=function(t){"content"in t&&e(0,r=t.content)},[r]}var N=function(n){t(u,s);var e=T(u);function u(t){var n;return r(this,u),n=e.call(this),c(o(n),t,I,z,a,{content:0}),n}return u}();export default N;export{B as preload};
