import{_ as t,a as n,b as r,c as e,i as a,s as o,d as s,S as c,f,t as u,e as i,j as l,k as h,l as p,g as v,h as g,m,o as d,p as y,u as b,q as E,v as R,r as j,w as x}from"./client.e3abdbb1.js";function P(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var a,o=n(t);if(e){var s=n(this).constructor;a=Reflect.construct(o,arguments,s)}else a=o.apply(this,arguments);return r(this,a)}}function q(t,n,r){var e=t.slice();return e[1]=n[r],e}function D(t){var n,r,e,a,o,s,c,E,R,j,x,P,q,D=t[1].title+"",L=t[1].date+"",S=t[1].author+"",k=t[1].summary+"";return{c:function(){n=f("li"),r=f("a"),e=u(D),o=i(),s=f("p"),c=u(L),E=u(" - "),R=u(S),j=i(),x=f("p"),P=u(k),q=i(),this.h()},l:function(t){n=l(t,"LI",{});var a=h(n);r=l(a,"A",{rel:!0,href:!0});var f=h(r);e=p(f,D),f.forEach(v),o=g(a),s=l(a,"P",{});var u=h(s);c=p(u,L),E=p(u," - "),R=p(u,S),u.forEach(v),j=g(a),x=l(a,"P",{});var i=h(x);P=p(i,k),i.forEach(v),q=g(a),a.forEach(v),this.h()},h:function(){m(r,"rel","prefetch"),m(r,"href",a="blog/"+t[1].slug)},m:function(t,a){d(t,n,a),y(n,r),y(r,e),y(n,o),y(n,s),y(s,c),y(s,E),y(s,R),y(n,j),y(n,x),y(x,P),y(n,q)},p:function(t,n){1&n&&D!==(D=t[1].title+"")&&b(e,D),1&n&&a!==(a="blog/"+t[1].slug)&&m(r,"href",a),1&n&&L!==(L=t[1].date+"")&&b(c,L),1&n&&S!==(S=t[1].author+"")&&b(R,S),1&n&&k!==(k=t[1].summary+"")&&b(P,k)},d:function(t){t&&v(n)}}}function L(t){for(var n,r,e,a,o,s=t[0],c=[],b=0;b<s.length;b+=1)c[b]=D(q(t,s,b));return{c:function(){n=i(),r=f("h1"),e=u("Recent posts"),a=i(),o=f("ul");for(var t=0;t<c.length;t+=1)c[t].c();this.h()},l:function(t){E('[data-svelte="svelte-hfp9t8"]',document.head).forEach(v),n=g(t),r=l(t,"H1",{});var s=h(r);e=p(s,"Recent posts"),s.forEach(v),a=g(t),o=l(t,"UL",{class:!0});for(var f=h(o),u=0;u<c.length;u+=1)c[u].l(f);f.forEach(v),this.h()},h:function(){document.title="Blog",m(o,"class","svelte-1frg2tf")},m:function(t,s){d(t,n,s),d(t,r,s),y(r,e),d(t,a,s),d(t,o,s);for(var f=0;f<c.length;f+=1)c[f].m(o,null)},p:function(t,n){var r=R(n,1)[0];if(1&r){var e;for(s=t[0],e=0;e<s.length;e+=1){var a=q(t,s,e);c[e]?c[e].p(a,r):(c[e]=D(a),c[e].c(),c[e].m(o,null))}for(;e<c.length;e+=1)c[e].d(1);c.length=s.length}},i:j,o:j,d:function(t){t&&v(n),t&&v(r),t&&v(a),t&&v(o),x(c,t)}}}function S(t){t.params,t.query;return this.fetch("blog.json").then((function(t){return t.json()})).then((function(t){return{posts:t}}))}function k(t,n,r){var e=n.posts;return t.$set=function(t){"posts"in t&&r(0,e=t.posts)},[e]}var w=function(n){t(f,c);var r=P(f);function f(t){var n;return e(this,f),n=r.call(this),a(s(n),t,k,L,o,{posts:0}),n}return f}();export default w;export{S as preload};
