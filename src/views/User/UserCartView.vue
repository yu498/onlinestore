<template>
  <LoadingAnimation :active="isLoading"></LoadingAnimation>
  <div class="container">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">商品</th>
          <th scope="col">單價</th>
          <th scope="col">數量</th>
          <th scope="col">操作</th>
        </tr>
      </thead>
      <tbody  v-for="item in carts.carts" :key="item.id">
        <tr>
          <td class="item_body">
            <img :src="item.product.imageUrl" alt="">
            <div class="d-none d-lg-block d-xl-none">{{ item.product.title }}</div>
          </td>
          <td><span>$</span>{{ item.product.price }}</td>
          <td>
            <div class="count d-flex">
              <button @click="updateCart(item, item.qty - 1)"
              type="button" class="btn btn-outline-secondary">-</button>
              <input type="number" class="form-control qty-input w-25"
              placeholder="請輸入數量" aria-label="qty" v-model="item.qty"
              @change.prevent="refreshCart(item, item.qty)">
              <button @click="updateCart(item, item.qty + 1)"
              type="button" class="btn btn-outline-secondary">+</button>
          </div>
          </td>
          <td>
            <div class="operate">
              <button @click="DelCart(item.id)" type="button"
              class="btn btn-outline-secondary">刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="d-flex flex-column">
        <div class="input-group mb-3 input-group-sm justify-content-end">
          <label for="coupon_code">
            <input id="coupon_code" type="text" class="form-control"
            v-model="coupon_code" placeholder="請輸入優惠碼">
          </label>
          <div class="input-group-append ">
            <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
              套用優惠碼
            </button>
          </div>
        </div>
        <div class="d-flex flex-column ">
          <div class="d-flex justify-content-end">
          總金額:{{ carts.total }}
          </div>
          <div v-if="carts.final_total !== carts.total" class="d-flex justify-content-end">
          折扣價:{{ carts.final_total }}
          </div>
        </div>
      </div>
  </div>
  <div class="my-5 row justify-content-center">
    <V-Form class="col-md-6" v-slot="{ errors }" @submit="createOrder">
      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <V-Field id="email" name="email" type="email"
        class="form-control" :class="{ 'is-invalid': errors['email'] }"
        placeholder="請輸入 Email" rules="email|required" v-model="form.user.email"></V-Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="name" class="form-label">收件人姓名</label>
        <V-Field id="name" name="姓名" type="text" class="form-control"
        :class="{ 'is-invalid': errors['姓名'] }"
        placeholder="請輸入姓名" rules="required" v-model="form.user.name"></V-Field>
        <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="tel" class="form-label">收件人電話</label>
        <V-Field id="tel" name="電話" type="tel" class="form-control"
        :class="{ 'is-invalid': errors['電話'] }"
          placeholder="請輸入電話" rules="required" v-model="form.user.tel"></V-Field>
        <ErrorMessage name="電話" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="address" class="form-label">收件人地址</label>
        <V-Field id="address" name="地址" type="text"
        class="form-control" :class="{ 'is-invalid': errors['地址'] }"
          placeholder="請輸入地址" rules="required" v-model="form.user.address"></V-Field>
        <ErrorMessage name="地址" class="invalid-feedback"></ErrorMessage>
      </div>

      <div class="mb-3">
        <label for="message" class="form-label">留言</label>
        <textarea name="" id="message" class="form-control"
        cols="30" rows="10" v-model="form.message"></textarea>
      </div>
      <div class="text-end">
        <button class="btn btn-danger" @click="createOrder()">送出訂單</button>
      </div>
    </V-Form>
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
      isLoading: false,
    };
  },
  methods: {
    getCart() { // 取得購物車列表
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.isLoading = true;
      this.$http.get(url)
        .then((res) => {
          this.isLoading = false;
          this.carts = res.data.data;
        });
    },
    updateCart(item, itemQty) { // 更新購物車
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
    DelCart(id) { // 刪除單筆選項
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url)
        .then((res) => {
          this.$httpMessageState(res, '該商品已刪除');
          this.getCart();
        });
    },
    addCouponCode() { // 套用優惠卷
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon_code,
      };
      this.$http.post(url, { data: coupon })
        .then((res) => {
          this.$httpMessageState(res, '已套用優惠卷');
          this.getCart();
        });
    },
    createOrder() { // 結帳頁面
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      const order = this.form;
      this.$http.post(url, { data: order })
        .then((res) => {
          if (res.data.orderId) {
            this.$router.push(`/user/checkout/${res.data.orderId}`);
          }
        });
    },
  },
  created() {
    this.getCart();
  },
};
</script>

<style>
.item_body img{
  position: relative;
  width: 80px;
  height: 80px;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>
