<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-6 col-lg-4 d-flex align-items-stretch"
        v-for="item in products" :key="item.id">
          <div class="card mb-4">
            <div class="card-img">
            <a href="#" @click.prevent="getProduct(item.id)">
              <img :src="item.imageUrl" class="card-img-top" :alt="item.title">
            </a>
            </div>
            <div class="card-body">
              <h5 class="card-title">{{ item.title }}</h5>
              <p class="card-text">Some quick example text to build on the
                card title and make up the bulk of the card'
                content.
              </p>
              <span>
                {{ $filters.currency(item.origin_price) }}
                {{ $filters.currency(item.price) }}
              </span>
                <div>
                  <button
                  type="button"
                  class="btn btn-primary  w-100"
                  :disabled="this.status.loadingItem === item.id"
                  @click.prevent="addToCart(item.id)">
                  <i class="bi bi-cart-fill"></i>
                    加入購物車
                </button>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.post-meta-price {
  font-size: 16px;
  margin: 0, 8px, 0, 0;
}
.link i{
  height: 1px;
  width: 1px;
  position: absolute;
  overflow: hidden;
  top: -10px;
}
.card{
  background-color:#ffffff;
  border-radius:3px;
  border: 1px solid #a1a1a1;
}
.card-img img{
  position: relative;
  width: 100%;
  height: 300px;
  aspect-ratio: 1/1;
  object-fit: cover;
}
</style>

<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProducts() { // 取得產品列表
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          this.products = res.data.products;
        });
    },
    getProduct(id) { // 進入商品特定頁面
      this.$router.push(`/user/product/${id}`);
    },
    addToCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.status.loadingItem = id;
      this.$http.post(api, { data: cart })
        .then((res) => {
          this.status.loadingItem = '';
          console.log(res);
        });
    },
  },
  created() {
    this.getProducts();
  },
};
</script>
