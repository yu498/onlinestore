(function(){"use strict";var e={1499:function(e,n,t){var o=t(3751),a=t(1250),r=t(1021),l=t(3688),s=t.n(l),c=(t(454),t(5261)),i=t(3505),d=t(7013),u=t(1066);function f(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function p(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var m=t(1600);function h(e,n="更新"){if(e.data.success)m.A.emit("push-message",{style:"success",title:`${n}成功`});else{const t="string"===typeof e.data.message?[e.data.message]:e.data.message;m.A.emit("push-message",{style:"danger",title:`${n}失敗`,content:t.join("、")})}}var v=t(641);function b(e,n){const t=(0,v.g2)("router-view");return(0,v.uX)(),(0,v.Wv)(t)}var g=t(6262);const k={},y=(0,g.A)(k,[["render",b]]);var x=y,L=t(5220);function w(e,n,t,o,a,r){const l=(0,v.g2)("NavBar"),s=(0,v.g2)("HomeMode");return(0,v.uX)(),(0,v.CE)(v.FK,null,[(0,v.bF)(l),(0,v.bF)(s)],64)}var E=t.p+"img/BGImage1.155db682.jpg",F=t.p+"img/homepage284_04.4a9d6c4a.jpg";const O=(0,v.Fv)('<header class="container"><div><div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel"><div class="carousel-inner"><div class="carousel-item active"><img src="'+E+'" class="d-block w-100 img-fluid" alt="1"><div class="carousel-caption d-none d-md-block"><h5>速報</h5><p>歡慶開幕，全館下單輸入專屬優惠碼。</p></div></div><div class="carousel-item"><img src="'+E+'" class="d-block w-100" alt="2"><div class="carousel-caption d-none d-md-block"><h5>夏季特賣</h5><p>全館夏季服飾，打折拍賣</p></div></div></div></div></div></header>',1),A={class:"container mt-5"},j=(0,v.Lk)("div",{class:"border py-2"},[(0,v.Lk)("p",{class:"text-center"},[(0,v.eW)(" 為慶祝開幕本店，當月購物享5折優惠"),(0,v.Lk)("br"),(0,v.eW)(" 輸入"),(0,v.Lk)("span",{class:"fw-bold"},"sho50"),(0,v.eW)("即可50%享有折扣 ")])],-1),C={class:"row d-flex flex-column mt-5"},T={class:"d-lg-flex d-md-flex-column mb-3"},S=(0,v.Lk)("div",{class:"col-lg-6 col-md-12"},[(0,v.Lk)("img",{src:F,alt:"",class:"w-100"})],-1),P={class:"col-lg-6 col-md-12 d-flex flex-column justify-content-center"},_=(0,v.Lk)("h2",{class:"fw-bold"},"精選服飾",-1),N=(0,v.Lk)("p",null,"日韓歐風格，成為路上焦點",-1),W={class:"d-lg-flex flex-row-reverse d-md-flex-column mb-3"},M=(0,v.Lk)("div",{class:"col-lg-6 col-md-12"},[(0,v.Lk)("img",{src:F,alt:"",class:"w-100"})],-1),B={class:"col-md-6 col-md-12 d-flex flex-column justify-content-center"},D=(0,v.Lk)("h2",{class:"fw-bold"},"精品配件",-1),I=(0,v.Lk)("p",null,"各式精美飾品，讓你身上不再單調",-1),K=(0,v.Fv)('<div class="mt-3"><h3 class="text-center">常見問題</h3><div class="accordion accordion-flush" id="accordionFlushExample"><div class="accordion-item"><h2 class="accordion-header" id="flush-headingOne"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne"> 收件地址要變更，請問如何更改？ </button></h2><div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample"><div class="accordion-body"> 由於出貨作業非常的快速，完成訂購後請恕無法直接在網路上變更，若是未完成付款，請直接將欲變更收件地址通知我們修改，或是重新訂購一筆亦可。 </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingTwo"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo"> 我選擇「超商取貨」，請問下訂後多久商品會送達指定門市？ </button></h2><div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample"><div class="accordion-body"> 如果您是中午12:00前下訂，商品約在隔天中午過後會送達；如果您是中午12:00後下訂， 商品約在後天送達(送達時間以系統通知為準)。商品送達指定門市時會發送簡訊和Email提醒您前往取貨， 送達門市後逾期未前往取貨(常溫七天/低溫四天) ，本訂單將自動取消(辦理退貨)。 </div></div></div><div class="accordion-item"><h2 class="accordion-header" id="flush-headingThree"><button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree"> 選擇「i郵箱取貨」商品的運送時間以及取貨方式為何？ </button></h2><div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample"><div class="accordion-body"> 商品抵達指定據點後，郵局會發送簡訊密碼通知您前往取貨，送達據點後逾三天未前往取貨， 將轉為郵局招領，若逾二天未前往招領，本訂單將自動取消。 </div></div></div></div></div>',1);function $(e,n,t,o,a,r){const l=(0,v.g2)("router-link"),s=(0,v.g2)("Footer");return(0,v.uX)(),(0,v.CE)(v.FK,null,[O,(0,v.Lk)("main",A,[j,(0,v.Lk)("div",C,[(0,v.Lk)("div",T,[S,(0,v.Lk)("div",P,[_,N,(0,v.bF)(l,{to:"/user/products",class:"btn btn-outline-secondary me-2"},{default:(0,v.k6)((()=>[(0,v.eW)("選購商品")])),_:1})])]),(0,v.Lk)("div",W,[M,(0,v.Lk)("div",B,[D,I,(0,v.bF)(l,{to:"/user/products",class:"btn btn-outline-secondary me-2"},{default:(0,v.k6)((()=>[(0,v.eW)("選購商品")])),_:1})])])]),K]),(0,v.bF)(s)],64)}var X=t(916),H={components:{Footer:X.A}};const V=(0,g.A)(H,[["render",$]]);var q=V,z=t(2334),U={name:"HomeView",components:{HomeMode:q,NavBar:z.A}};const G=(0,g.A)(U,[["render",w]]);var J=G;const Q=[{path:"/",name:"home",component:J},{path:"/login",component:()=>Promise.all([t.e(114),t.e(82)]).then(t.bind(t,2082))},{path:"/dashboard",component:()=>Promise.all([t.e(114),t.e(606),t.e(408)]).then(t.bind(t,8408)),children:[{path:"products",component:()=>Promise.all([t.e(606),t.e(668),t.e(223)]).then(t.bind(t,6223))},{path:"order",component:()=>Promise.all([t.e(606),t.e(668),t.e(270)]).then(t.bind(t,2889))},{path:"coupon",component:()=>Promise.all([t.e(606),t.e(668),t.e(634)]).then(t.bind(t,9634))}]},{path:"/user",component:()=>Promise.all([t.e(114),t.e(606),t.e(39)]).then(t.bind(t,8039)),children:[{path:"products",component:()=>Promise.all([t.e(114),t.e(464)]).then(t.bind(t,464))},{path:"product/:productID",component:()=>t.e(386).then(t.bind(t,3386))},{path:"cart",component:()=>Promise.all([t.e(114),t.e(871)]).then(t.bind(t,8871))},{path:"checkout/:orderId",component:()=>t.e(889).then(t.bind(t,889))}]}],R=(0,L.aE)({history:(0,L.Bt)(),routes:Q});var Y=R;const Z=(0,o.Ef)(x);Z.config.globalProperties.$filters={currency:f,date:p},Object.keys(i).forEach((e=>{(0,c.Km)(e,i[e])})),(0,c.jK)({generateMessage:(0,d.kg)({zh_TW:u}),validateOnInput:!0}),(0,d.xS)("zh_TW"),Z.use(r.A,a.A),Z.component("LoadingAnimation",s()),Z.component("V-Form",c.lV),Z.component("V-Field",c.D0),Z.component("ErrorMessage",c.Kw),Z.config.globalProperties.$httpMessageState=h,Z.use(Y),Z.mount("#app")},1600:function(e,n,t){var o=t(7380);const a=(0,o.A)();n.A=a},916:function(e,n,t){t.d(n,{A:function(){return f}});var o=t(641);const a={class:"bg-light text-center py-3"},r=(0,o.Lk)("p",{class:"mb-0"},"Copyright © 2024 ",-1),l=(0,o.Lk)("p",{class:"mb-0"},"個人練習作品，非商業用途，素材來源：unsplash",-1),s=[r,l];function c(e,n){return(0,o.uX)(),(0,o.CE)("footer",a,s)}var i=t(6262);const d={},u=(0,i.A)(d,[["render",c]]);var f=u},2334:function(e,n,t){t.d(n,{A:function(){return y}});var o=t(641),a=t.p+"img/logo.3959c8d4.jpg";const r={class:"navbar navbar-expand-lg navbar-light bg-light mx-2 sticky-top"},l={class:"container-fluid"},s=(0,o.Lk)("a",{class:"navbar-brand",href:"#"},[(0,o.Lk)("img",{src:a,alt:"",width:"100",height:"30"})],-1),c=(0,o.Lk)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,o.Lk)("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarSupportedContent"},d={class:"navbar-nav me-auto mb-2 mb-lg-0"},u={class:"nav-item"},f={class:"nav-item"},p={class:"nav-item"},m={class:"d-flex justify-content-end"},h=(0,o.Lk)("i",{class:"bi bi-person-circle logo-icon"},null,-1);function v(e,n){const t=(0,o.g2)("router-link");return(0,o.uX)(),(0,o.CE)("nav",r,[(0,o.Lk)("div",l,[s,c,(0,o.Lk)("div",i,[(0,o.Lk)("ul",d,[(0,o.Lk)("li",u,[(0,o.bF)(t,{to:"/",class:"nav-link mx-4 my-2"},{default:(0,o.k6)((()=>[(0,o.eW)("首頁")])),_:1})]),(0,o.Lk)("li",f,[(0,o.bF)(t,{to:"/user/products",class:"nav-link mx-4 my-2"},{default:(0,o.k6)((()=>[(0,o.eW)("產品列表")])),_:1})]),(0,o.Lk)("li",p,[(0,o.bF)(t,{to:"/user/cart",class:"nav-link mx-4 my-2"},{default:(0,o.k6)((()=>[(0,o.eW)("購物車")])),_:1})])]),(0,o.Lk)("div",m,[(0,o.bF)(t,{class:"nav-link m-2",to:"/login"},{default:(0,o.k6)((()=>[h])),_:1})])])])])}var b=t(6262);const g={},k=(0,b.A)(g,[["render",v]]);var y=k}},n={};function t(o){var a=n[o];if(void 0!==a)return a.exports;var r=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,a,r){if(!o){var l=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],r=e[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&r||l>=r)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(s=!1,r<l&&(l=r));if(s){e.splice(d--,1);var i=a();void 0!==i&&(n=i)}}return n}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[o,a,r]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{39:"87c5964f",82:"26228c15",114:"cc7e4462",223:"47a7ae3a",270:"04ec0e6b",386:"82202b46",408:"903d3ecd",464:"6d3f355e",606:"55be7285",634:"0f7da974",668:"521ec7c7",871:"fbf36ee8",889:"f98029dc"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{464:"431a7a53",871:"bb659dd8"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="onlinestore:";t.l=function(o,a,r,l){if(e[o])e[o].push(a);else{var s,c;if(void 0!==r)for(var i=document.getElementsByTagName("script"),d=0;d<i.length;d++){var u=i[d];if(u.getAttribute("src")==o||u.getAttribute("data-webpack")==n+r){s=u;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+r),s.src=o),e[o]=[a];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var a=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),a&&a.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/onlinestore/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,a){var r=document.createElement("link");r.rel="stylesheet",r.type="text/css";var l=function(t){if(r.onerror=r.onload=null,"load"===t.type)o();else{var l=t&&t.type,s=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+l+": "+s+")");c.name="ChunkLoadError",c.code="CSS_CHUNK_LOAD_FAILED",c.type=l,c.request=s,r.parentNode&&r.parentNode.removeChild(r),a(c)}};return r.onerror=r.onload=l,r.href=n,t?t.parentNode.insertBefore(r,t.nextSibling):document.head.appendChild(r),r},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var a=t[o],r=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(r===e||r===n))return a}var l=document.getElementsByTagName("style");for(o=0;o<l.length;o++){a=l[o],r=a.getAttribute("data-href");if(r===e||r===n)return a}},o=function(o){return new Promise((function(a,r){var l=t.miniCssF(o),s=t.p+l;if(n(l,s))return a();e(o,s,null,a,r)}))},a={524:0};t.f.miniCss=function(e,n){var t={464:1,871:1};a[e]?n.push(a[e]):0!==a[e]&&t[e]&&n.push(a[e]=o(e).then((function(){a[e]=0}),(function(n){throw delete a[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,o){var a=t.o(e,n)?e[n]:void 0;if(0!==a)if(a)o.push(a[2]);else{var r=new Promise((function(t,o){a=e[n]=[t,o]}));o.push(a[2]=r);var l=t.p+t.u(n),s=new Error,c=function(o){if(t.o(e,n)&&(a=e[n],0!==a&&(e[n]=void 0),a)){var r=o&&("load"===o.type?"missing":o.type),l=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+r+": "+l+")",s.name="ChunkLoadError",s.type=r,s.request=l,a[1](s)}};t.l(l,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var a,r,l=o[0],s=o[1],c=o[2],i=0;if(l.some((function(n){return 0!==e[n]}))){for(a in s)t.o(s,a)&&(t.m[a]=s[a]);if(c)var d=c(t)}for(n&&n(o);i<l.length;i++)r=l[i],t.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return t.O(d)},o=self["webpackChunkonlinestore"]=self["webpackChunkonlinestore"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[504],(function(){return t(1499)}));o=t.O(o)})();
//# sourceMappingURL=app.56cb9be0.js.map