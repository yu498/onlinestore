"use strict";(self["webpackChunkonlinestore"]=self["webpackChunkonlinestore"]||[]).push([[464],{464:function(t,s,e){e.r(s),e.d(s,{default:function(){return x}});var i=e(641),a=e(3751),c=e(33);const o={class:"content"},l={class:"container"},d={class:"row"},n={class:"card mb-4"},r={class:"card-img"},u=["onClick"],h=["src","alt"],p={class:"card-body"},k={class:"card-title fw-bold"},g=(0,i.Lk)("p",{class:"card-text"},"Some quick example text to build on the card title and make up the bulk of the card' content. ",-1),v={class:"fs-3"},L=["disabled","onClick"],b=(0,i.Lk)("i",{class:"bi bi-cart-fill"},null,-1);function m(t,s,e,m,f,C){const $=(0,i.g2)("LoadingAnimation");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)($,{active:f.isLoading},null,8,["active"]),(0,i.Lk)("div",o,[(0,i.Lk)("div",l,[(0,i.Lk)("div",d,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(f.products,(s=>((0,i.uX)(),(0,i.CE)("div",{class:"col-md-6 col-lg-4 d-flex align-items-stretch",key:s.id},[(0,i.Lk)("div",n,[(0,i.Lk)("div",r,[(0,i.Lk)("a",{href:"#",onClick:(0,a.D$)((t=>C.getProduct(s.id)),["prevent"])},[(0,i.Lk)("img",{src:s.imageUrl,class:"card-img-top",alt:s.title},null,8,h)],8,u)]),(0,i.Lk)("div",p,[(0,i.Lk)("h5",k,(0,c.v_)(s.title),1),g,(0,i.Lk)("span",v," $ "+(0,c.v_)(t.$filters.currency(s.price)),1),(0,i.Lk)("div",null,[(0,i.Lk)("button",{type:"button",class:"btn btn-outline-secondary w-100",disabled:this.status.loadingItem===s.id,onClick:(0,a.D$)((t=>C.addToCart(s.id)),["prevent"])},[b,(0,i.eW)(" 加入購物車 ")],8,L)])])])])))),128))])])])],64)}e(4114);var f={data(){return{products:[],product:{},status:{loadingItem:""},isLoading:!1}},methods:{getProducts(){const t="https://vue3-course-api.hexschool.io/api/bsstore-api/products/all";this.isLoading=!0,this.$http.get(t).then((t=>{this.isLoading=!1,this.products=t.data.products})).catch((t=>console.log(t)))},getProduct(t){this.$router.push(`/user/product/${t}`)},addToCart(t){const s="https://vue3-course-api.hexschool.io/api/bsstore-api/cart",e={product_id:t,qty:1};this.status.loadingItem=t,this.$http.post(s,{data:e}).then((t=>{this.$httpMessageState(t,"已加入購物車"),this.status.loadingItem=""})).catch((t=>console.log(t)))}},created(){this.getProducts()}},C=e(6262);const $=(0,C.A)(f,[["render",m]]);var x=$}}]);
//# sourceMappingURL=464.6d3f355e.js.map