"use strict";(self["webpackChunkonlinestore"]=self["webpackChunkonlinestore"]||[]).push([[386],{3386:function(t,s,o){o.r(s),o.d(s,{default:function(){return b}});var e=o(641),c=o(33);const a={class:"container"},i={class:"row justify-content-center"},n={class:"col-md-5"},d=["src"],l={class:"col-md-6"},r={class:"fw-bold"},u=(0,e.Lk)("hr",null,null,-1),h=(0,e.Lk)("div",{class:"mx-2"},[(0,e.Lk)("h2",null,"產品資訊:"),(0,e.Lk)("p",null," Some quick example text to build on the card title and make up the bulk of the card' content. ")],-1),p={class:"d-flex"},k={class:"h2 mx-2"};function m(t,s,o,m,L,g){return(0,e.uX)(),(0,e.CE)("div",a,[(0,e.Lk)("div",i,[(0,e.Lk)("div",n,[(0,e.Lk)("img",{src:L.product.imageUrl,alt:"",class:"img-fluid mb-3"},null,8,d)]),(0,e.Lk)("div",l,[(0,e.Lk)("h1",r,(0,c.v_)(L.product.title),1),u,h,(0,e.Lk)("div",p,[(0,e.Lk)("p",k,[(0,e.eW)("售價: "),(0,e.Lk)("span",null,"$"+(0,c.v_)(L.product.price),1)]),(0,e.Lk)("button",{type:"button",class:"btn btn-outline-secondary mx-2",onClick:s[0]||(s[0]=t=>g.addToCart(L.product.id))}," 加到購物車 ")])])])])}var L={data(){return{product:{},id:"",status:{loadingItem:""}}},methods:{getProduct(){const t=`https://vue3-course-api.hexschool.io/api/bsstore-api/product/${this.id}`;this.isLoading=!0,this.$http.get(t).then((t=>{t.data.success&&(this.product=t.data.product)})).catch((t=>console.log(t)))},addToCart(t){const s="https://vue3-course-api.hexschool.io/api/bsstore-api/cart",o={product_id:t,qty:1};this.status.loadingItem=t,this.$http.post(s,{data:o}).then((t=>{this.status.loadingItem="",this.$httpMessageState(t,"已加入購物車")})).catch((t=>console.log(t)))}},created(){this.id=this.$route.params.productID,this.getProduct()}},g=o(6262);const v=(0,g.A)(L,[["render",m]]);var b=v}}]);
//# sourceMappingURL=386.82202b46.js.map