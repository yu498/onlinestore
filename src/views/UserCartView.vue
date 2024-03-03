<template>
      <div class="container">
        <div class="item_header">
            <div class="item_detail">商品</div>
            <div class="price">單價</div>
            <div class="count">數量</div>
            <div class="amount">總計</div>
            <div class="operate">操作</div>
        </div>
        <div class="item_header item_body" v-for="item in carts.carts" :key="item.id">
            <div class="item_detail">
                <img :src="item.product.imageUrl" alt="">
                <div class="name">{{ item.product.title }}</div>
            </div>
            <div class="price"><span>$</span>{{ item.product.price }}</div>
            <div class="count">
                <button  @click="updateCart(item,item.qty-1)">-</button>
                <input type="number" class="form-control qty-input" placeholder="請輸入數量"
                        aria-label="qty" v-model="item.qty"
                        @change.prevent="refreshCart(item, item.qty)">
                <button @click="updateCart(item,item.qty+1)">+</button>
            </div>
            <div class="amount">{{ item.final_total }}</div>
            <div class="operate">
                <button @click="DelCart(item.id)">刪除</button>
            </div>
        </div>
        <div>
          <hr/>
          <div>
            總金額:{{ carts.total }}
          </div>
          <div v-if="carts.final_total !== carts.total">
            折扣價:{{ carts.final_total }}
          </div>
        </div>
        <div class="input-group mb-3 input-group-sm">
          <label for="a">
            <input id="a" type="text" class="form-control" v-model="coupon_code"
            placeholder="請輸入優惠碼">
          </label>
            <div class="input-group-append">
              <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                套用優惠碼
              </button>
            </div>
        </div>
        <div class="my-5 row justify-content-center">
      <V-Form class="col-md-6" v-slot="{ errors }"
            @submit="createOrder">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <V-Field id="email" name="email" type="email" class="form-control"
                   :class="{ 'is-invalid': errors['email'] }"
                   placeholder="請輸入 Email" rules="email|required"
                   v-model="form.user.email"></V-Field>
          <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <V-Field id="name" name="姓名" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['姓名'] }"
                   placeholder="請輸入姓名" rules="required"
                   v-model="form.user.name"></V-Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label>
          <V-Field id="tel" name="電話" type="tel" class="form-control"
                   :class="{ 'is-invalid': errors['電話'] }"
                   placeholder="請輸入電話" rules="required"
                   v-model="form.user.tel"></V-Field>
          <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <V-Field id="address" name="地址" type="text" class="form-control"
                   :class="{ 'is-invalid': errors['地址'] }"
                   placeholder="請輸入地址" rules="required"
                   v-model="form.user.address"></V-Field>
          <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label>
          <textarea name="" id="message" class="form-control" cols="30" rows="10"
                    v-model="form.message"></textarea>
        </div>
        <div class="text-end">
          <button class="btn btn-danger" @click="getOrder()">送出訂單</button>
        </div>
      </V-Form>
    </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      carts: {},
      coupon_code: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      order: {},
    };
  },
  methods: {
    getCart() { // 取得購物車列表
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url)
        .then((res) => {
          // console.log(res);
          this.carts = res.data.data;
        });
    },
    updateCart(item, itemQty) {
      console.log(item.qty);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: itemQty,
      };
      this.$http.put(url, { data: cart }).then(() => {
        this.getCart();
      });
    },
    DelCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url)
        .then((res) => {
          console.log(res);
          this.getCart();
        });
    },
    addCouponCode() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(url, { data: coupon })
        .then((res) => {
          console.log(res);
          this.getCart();
        });
    },
    createOrder() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order })
        .then((res) => {
          this.$router.push(`/user/checkout/${res.data.orderId}`);
          console.log(this.order);
        });
    },
    getOrder() { // 進入商品特定頁面
      // this.$router.push(`/user/checkout/${this.order}`);
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style>
.item_header{
    display: flex;
    width: 1000px;
    margin: 0 auto;
    height: 30px;
    background-color: #fff;
    border-radius: 3px;
    padding-left: 10px;
}
.item_header div{
    width: 200px;
    color: #888;
    line-height: 30px;
}
.item_header .item_detail{
    width: 50%;
}
.item_body{
    margin-top: 20px;
    height: 100px;
    align-items: center;
}
.item_detail img{
    width: 80px;
    height: 80px;
    border-radius: 3px;
    /* margin-top: 10px; */
    float: left;
}
.item_detail .name{
    margin-left: 100px;
    margin-top: 20px;
}
</style>
