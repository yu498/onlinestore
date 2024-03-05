"use strict";(self["webpackChunkonlinestore"]=self["webpackChunkonlinestore"]||[]).push([[634],{9634:function(o,e,t){t.r(e),t.d(e,{default:function(){return P}});var n=t(641),l=t(33);const a={class:"text-end"},s={class:"table mt-4"},d=(0,n.Lk)("thead",null,[(0,n.Lk)("tr",null,[(0,n.Lk)("th",null,"名稱"),(0,n.Lk)("th",null,"折扣百分比"),(0,n.Lk)("th",null,"到期日"),(0,n.Lk)("th",null,"是否啟用"),(0,n.Lk)("th",null,"編輯")])],-1),p={key:0,class:"text-success"},u={key:1,class:"text-success text-muted"},i={class:"btn-group"},c=["onClick"],r=["onClick"];function h(o,e,t,h,m,b){const k=(0,n.g2)("couponModal"),C=(0,n.g2)("DelModal");return(0,n.uX)(),(0,n.CE)(n.FK,null,[(0,n.Lk)("div",a,[(0,n.Lk)("button",{class:"btn btn-primary",type:"button",onClick:e[0]||(e[0]=o=>b.openCouponModal(!0))}," 新增優惠卷 ")]),(0,n.Lk)("table",s,[d,(0,n.Lk)("tbody",null,[((0,n.uX)(!0),(0,n.CE)(n.FK,null,(0,n.pI)(m.coupons,((e,t)=>((0,n.uX)(),(0,n.CE)("tr",{key:t},[(0,n.Lk)("td",null,(0,l.v_)(e.title),1),(0,n.Lk)("td",null,(0,l.v_)(e.percent)+"%",1),(0,n.Lk)("td",null,(0,l.v_)(o.$filters.date(e.due_date)),1),(0,n.Lk)("td",null,[1===e.is_enabled?((0,n.uX)(),(0,n.CE)("span",p,"啟用")):((0,n.uX)(),(0,n.CE)("span",u,"未啟用"))]),(0,n.Lk)("td",null,[(0,n.Lk)("div",i,[(0,n.Lk)("button",{class:"btn btn-outline-primary btn-sm",onClick:o=>b.openCouponModal(!1,e)},"編輯",8,c),(0,n.Lk)("button",{class:"btn btn-outline-danger btn-sm",onClick:o=>b.openDelModal(e)},"刪除",8,r)])])])))),128))])]),(0,n.bF)(k,{coupon:m.tempCoupon,ref:"couponModal",onUpdateCoupon:b.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,n.bF)(C,{item:m.tempCoupon,onDelItem:b.delCoupon,ref:"delModal"},null,8,["item","onDelItem"])],64)}var m=t(3751);const b={class:"modal fade",id:"couponModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},k={class:"modal-dialog",role:"document"},C={class:"modal-content"},L=(0,n.Lk)("div",{class:"modal-header"},[(0,n.Lk)("h5",{class:"modal-title",id:"exampleModalLabel"},"Modal title"),(0,n.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),f={class:"modal-body"},M={class:"mb-3"},v={for:"title"},g={class:"mb-3"},_={for:"coupon_code"},y={class:"mb-3"},$={for:"due_date"},x={class:"mb-3"},w={for:"price"},D={class:"mb-3"},U={class:"form-check"},E={class:"form-check-label",for:"is_enabled"},X={class:"modal-footer"},S=(0,n.Lk)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"Close",-1);function V(o,e,t,l,a,s){return(0,n.uX)(),(0,n.CE)("div",b,[(0,n.Lk)("div",k,[(0,n.Lk)("div",C,[L,(0,n.Lk)("div",f,[(0,n.Lk)("div",M,[(0,n.Lk)("label",v,[(0,n.eW)("標題 "),(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=o=>a.tempCoupon.title=o),placeholder:"請輸入標題"},null,512),[[m.Jo,a.tempCoupon.title]])])]),(0,n.Lk)("div",g,[(0,n.Lk)("label",_,[(0,n.eW)("優惠碼 "),(0,n.bo)((0,n.Lk)("input",{type:"text",class:"form-control",id:"coupon_code","onUpdate:modelValue":e[1]||(e[1]=o=>a.tempCoupon.code=o),placeholder:"請輸入優惠碼"},null,512),[[m.Jo,a.tempCoupon.code]])])]),(0,n.Lk)("div",y,[(0,n.Lk)("label",$,[(0,n.eW)("到期日 "),(0,n.bo)((0,n.Lk)("input",{type:"date",class:"form-control",id:"due_date","onUpdate:modelValue":e[2]||(e[2]=o=>a.due_date=o)},null,512),[[m.Jo,a.due_date]])])]),(0,n.Lk)("div",x,[(0,n.Lk)("label",w,[(0,n.eW)("折扣百分比 "),(0,n.bo)((0,n.Lk)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=o=>a.tempCoupon.percent=o),placeholder:"請輸入折扣百分比"},null,512),[[m.Jo,a.tempCoupon.percent,void 0,{number:!0}]])])]),(0,n.Lk)("div",D,[(0,n.Lk)("div",U,[(0,n.Lk)("label",E,[(0,n.eW)(" 是否啟用 "),(0,n.bo)((0,n.Lk)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=o=>a.tempCoupon.is_enabled=o),id:"is_enabled"},null,512),[[m.lH,a.tempCoupon.is_enabled]])])])])]),(0,n.Lk)("div",X,[S,(0,n.Lk)("button",{type:"button",class:"btn btn-primary",onClick:e[5]||(e[5]=e=>o.$emit("update-coupon",a.tempCoupon))},"更新優惠券 ")])])])],512)}var W=t(3286),A={name:"couponModal",props:{coupon:{}},data(){return{tempCoupon:{},due_date:""}},emits:["update-coupon"],watch:{coupon(){this.tempCoupon=this.coupon,console.log(this.tempCoupon.due_date);const o=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.due_date]=o},due_date(){this.tempCoupon.due_date=Math.floor(new Date(this.due_date)/1e3)}},mixins:[W.A]},F=t(6262);const I=(0,F.A)(A,[["render",V]]);var J=I,N=t(1668),K={components:{couponModal:J,DelModal:N.A},props:{config:Object},data(){return{coupons:{},tempCoupon:{title:"",is_enabled:0,percent:100,code:""},isLoading:!1,isNew:!1}},methods:{getCoupon(o=1){const e=`https://vue3-course-api.hexschool.io/api/bsstore-api/admin/coupons/?page=${o}`;this.$http.get(e,this.tempProduct).then((o=>{o.data.success&&(this.coupons=o.data.coupons,this.pagination=o.data.pagination)})).catch((o=>console.log(o)))},openCouponModal(o,e){this.isNew=o,this.isNew?this.tempCoupon={due_date:(new Date).getTime()/1e3}:this.tempCoupon={...e},this.$refs.couponModal.showModal()},updateCoupon(o){if(this.isNew){const e="https://vue3-course-api.hexschool.io/api/bsstore-api/admin/coupon";this.$http.post(e,{data:o}).then((o=>{this.$httpMessageState(o,"新增優惠券"),this.getCoupon(),this.$refs.couponModal.hideModal()}))}else{const o=`https://vue3-course-api.hexschool.io/api/bsstore-api/admin/coupon/${this.tempCoupon.id}`;this.$http.put(o,{data:this.tempCoupon}).then((o=>{this.$httpMessageState(o,"新增優惠券"),this.getCoupon(),this.$refs.couponModal.hideModal()}))}},openDelModal(o,e){this.tempProduct={...e};const t=this.$refs.delModal;t.showModal()},delCoupon(){const o=`https://vue3-course-api.hexschool.io/api/bsstore-api/admin/coupon/${this.tempCoupon.id}`;this.isLoading=!0,this.$http.delete(o).then((o=>{this.$httpMessageState(o,"刪除優惠券");const e=this.$refs.delModal;e.hideModal(),this.getCoupon()}))}},created(){this.getCoupon()}};const O=(0,F.A)(K,[["render",h]]);var P=O}}]);
//# sourceMappingURL=634.0f7da974.js.map