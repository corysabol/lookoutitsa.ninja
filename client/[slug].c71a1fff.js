import{S as t,i as n,s,a as e,e as o,t as c,d as a,c as r,b as i,f as u,g as l,h,o as f,n as m}from"./chunk.d7b899e1.js";function d(t){var n,s,d,g,p,b,j=t.content.slug,v=t.content.html;return document.title=n=t.content.slug,{c(){s=e(),d=o("h1"),g=c(j),p=e(),b=o("div"),this.h()},l(t){s=a(t,"\n\n"),d=r(t,"H1",{},!1);var n=i(d);g=a(n,j),n.forEach(u),p=a(t,"\n\n"),b=r(t,"DIV",{class:!0},!1),i(b).forEach(u),this.h()},h(){b.className="content"},m(t,n){l(t,s,n),l(t,d,n),h(d,g),l(t,p,n),l(t,b,n),b.innerHTML=v},p(t,s){t.content&&n!==(n=s.content.slug)&&(document.title=n),t.content&&j!==(j=s.content.slug)&&f(g,j),t.content&&v!==(v=s.content.html)&&(b.innerHTML=v)},i:m,o:m,d(t){t&&(u(s),u(d),u(p),u(b))}}}async function g({params:t,query:n}){const{slug:s}=t,e=await this.fetch(`blog/${s}.json`);return{content:await e.json()}}function p(t,n,s){let{content:e}=n;return t.$set=(t=>{"content"in t&&s("content",e=t.content)}),{content:e}}export default class extends t{constructor(t){super(),n(this,t,p,d,s,["content"])}}export{g as preload};
//# sourceMappingURL=[slug].c71a1fff.js.map