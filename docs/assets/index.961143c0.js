import{o as i,c as l,p as d,a as f,b as s,d as v,e as h,f as u,w as y,u as _,R as $,g as k,F as m,r as x,t as g,h as F,i as B,j as L,k as O,l as E,m as V,n as W}from"./vendor.8d99c991.js";const A=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const c of a.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function r(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerpolicy&&(a.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?a.credentials="include":n.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=r(n);fetch(n.href,a)}};A();var p=(t,e)=>{const r=t.__vccOpts||t;for(const[o,n]of e)r[o]=n;return r};const N={},P=t=>(d("data-v-3796fcf8"),t=t(),f(),t),H=P(()=>s("p",null,[v("Made with \u{1F499} by "),s("a",{href:"https://taggart-tech.com"},"Taggart Tech")],-1)),R=[H];function D(t,e){return i(),l("footer",null,R)}var j=p(N,[["render",D],["__scopeId","data-v-3796fcf8"]]);const M={class:"wrapper"},q=s("h1",null,"WTFBins",-1),J=v("Home"),U=v("About"),K=v("Contribute"),z=h({setup(t){return(e,r)=>(i(),l(m,null,[s("header",null,[s("div",M,[q,s("nav",null,[u(_($),{to:"/"},{default:y(()=>[J]),_:1}),u(_($),{to:"/about"},{default:y(()=>[U]),_:1}),u(_($),{to:"/contribute"},{default:y(()=>[K]),_:1})])])]),u(_(k)),u(j)],64))}}),G="modulepreload",C={},Q="/",I=function(e,r){return!r||r.length===0?e():Promise.all(r.map(o=>{if(o=`${Q}${o}`,o in C)return;C[o]=!0;const n=o.endsWith(".css"),a=n?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${a}`))return;const c=document.createElement("link");if(c.rel=n?"stylesheet":G,n||(c.as="script",c.crossOrigin=""),c.href=o,document.head.appendChild(c),n)return new Promise((b,w)=>{c.addEventListener("load",b),c.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};const X=t=>(d("data-v-3d90fb11"),t=t(),f(),t),Y={class:"tag-container"},Z=X(()=>s("h3",null,"Tags",-1)),tt=["onClick"],et=h({props:{tags:null,addTag:null},setup(t){return(e,r)=>(i(),l("div",Y,[Z,s("ul",null,[(i(!0),l(m,null,x(t.tags,(o,n)=>(i(),l("li",{key:n,onClick:()=>t.addTag(o),class:"wtfbin-tag"},g(o),9,tt))),128))])]))}});var nt=p(et,[["__scopeId","data-v-3d90fb11"]]);const S=t=>(d("data-v-04bfc335"),t=t(),f(),t),ot={class:"bin-item"},rt=S(()=>s("hr",null,null,-1)),st=S(()=>s("b",null,"Contributed By:",-1)),at=["href"],it=h({props:{wtfbin:null,addTag:null},setup(t){return(e,r)=>(i(),l("li",ot,[s("h2",null,g(t.wtfbin.name),1),rt,s("p",null,[st,v(" "+g(t.wtfbin.contributor),1)]),s("p",null,g(t.wtfbin.description),1),s("footer",null,[s("a",{href:t.wtfbin.documentation},"Documentation",8,at),u(nt,{tags:t.wtfbin.tags,"add-tag":t.addTag},null,8,["tags","add-tag"])])]))}});var ct=p(it,[["__scopeId","data-v-04bfc335"]]);const lt=t=>(d("data-v-4bc0c94c"),t=t(),f(),t),ut={class:"search-form"},_t=lt(()=>s("label",null,"Search",-1)),dt=h({props:{updateHandler:null},setup(t){return(e,r)=>(i(),l("div",ut,[_t,s("input",{type:"text",onInput:r[0]||(r[0]=(...o)=>t.updateHandler&&t.updateHandler(...o))},null,32)]))}});var ft=p(dt,[["__scopeId","data-v-4bc0c94c"]]);const ht=t=>(d("data-v-3845a03a"),t=t(),f(),t),pt={key:0},gt=ht(()=>s("h4",null," Active Tags ",-1)),mt=[gt],vt=["onClick"],bt=h({props:{tags:null,removeTag:null},setup(t){return(e,r)=>(i(),l(m,null,[t.tags.length>0?(i(),l("div",pt,mt)):F("",!0),s("ul",null,[(i(!0),l(m,null,x(t.tags,o=>(i(),l("li",{class:"active-tag",onClick:()=>t.removeTag(o)},g(o)+" [x] ",9,vt))),256))])],64))}});var wt=p(bt,[["__scopeId","data-v-3845a03a"]]);const yt="https://raw.githubusercontent.com/mttaggart/wtfbins/main/wtfbins.json",$t=(t,e)=>e.length==0?!0:t.some(r=>e.indexOf(r)>=0),xt=(t,e)=>{if(e=="")return!0;const r=t.name.toLowerCase(),o=t.description.toLowerCase(),n=t.contributor.toLowerCase();return r.indexOf(e)>=0||o.toLowerCase().indexOf(e)>=0||n.toLowerCase().indexOf(e)>=0},Tt=B({id:"wtfbin",state:()=>({wtfbins:[],textFilter:"",tagFilter:[]}),getters:{filterBins:t=>t.wtfbins.filter(e=>xt(e,t.textFilter)&&$t(e.tags,t.tagFilter))},actions:{async retrieveWtfBins(){let e=await(await fetch(yt)).json();console.log(e),this.wtfbins=e},updateTextFilter(t){this.textFilter=t},addTagFilter(t){this.tagFilter.push(t)},removeTagFilter(t){const e=this.tagFilter.indexOf(t);e>=0&&this.tagFilter.splice(e,1)}}});const Ct=t=>(d("data-v-09f01233"),t=t(),f(),t),It=Ct(()=>s("p",null,"WTF, Bin?!",-1)),Ft={class:"bin-container"},St={key:0,class:".no-bins"},kt=h({setup(t){const e=Tt();e.retrieveWtfBins();const r=a=>{let c=a.target.value.toLowerCase();e.updateTextFilter(c)},o=a=>{e.addTagFilter(a)},n=a=>{e.removeTagFilter(a)};return(a,c)=>(i(),l("main",null,[It,u(ft,{"update-handler":r}),u(wt,{"remove-tag":n,tags:_(e).tagFilter},null,8,["tags"]),s("ul",Ft,[(i(!0),l(m,null,x(_(e).filterBins,(b,w)=>(i(),L(ct,{key:w,wtfbin:b,"add-tag":o},null,8,["wtfbin"]))),128))]),_(e).filterBins.length==0?(i(),l("div",St," I got no bins for ya! ")):F("",!0)]))}});var Bt=p(kt,[["__scopeId","data-v-09f01233"]]);const Lt=O({history:E("/"),routes:[{path:"/",name:"home",component:Bt},{path:"/about",name:"about",component:()=>I(()=>import("./AboutView.436a8e6f.js"),["assets/AboutView.436a8e6f.js","assets/AboutView.63486694.css","assets/vendor.8d99c991.js"])},{path:"/contribute",name:"contribute",component:()=>I(()=>import("./ContributeView.ed453af1.js"),["assets/ContributeView.ed453af1.js","assets/vendor.8d99c991.js"])}]}),T=V(z);T.use(W());T.use(Lt);T.mount("#app");export{p as _};
