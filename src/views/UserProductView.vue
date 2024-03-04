<!-- <template>
  <div class="container">
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ product.title }}</h2>
        <div>{{ product.content }}</div>
        <div>{{ product.description }}</div>
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </article>
      <div class="col-4">
        <div class="h5"> ${{ product.price }} 元</div>
        <hr>
        <button type="button" class="btn btn-outline-secondary"
                @click="addToCart(product.id)">
          加到購物車
        </button>
      </div>
    </div>
  </div>
</template> -->
<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-5">
        <img :src="product.imageUrl" alt="" class="img-fluid mb-3">
      </div>
      <div class="col-md-6">
        <h1 class="fw-bold">{{ product.title }}</h1>
        <hr/>
        <div class="mx-2">
          <h2>產品資訊:</h2>
          <p>
            Some quick example text to build on the
                card title and make up the bulk of the card'
                content.
          </p>
        </div>
        <div class="d-flex">
          <p class="h2 mx-2">售價: <span>${{ product.price }}</span></p>
        <button type="button" class="btn btn-outline-secondary mx-2"
                @click="addToCart(product.id)">
          加到購物車
        </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      id: '',
      status: {
        loadingItem: '',
      },
    };
  },
  methods: {
    getProduct() { // 取得單筆產品資訊
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.product = res.data.product;
        }
      });
    },
    addToCart(id) { // 加入購物車
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty: 1,
      };
      this.status.loadingItem = id;
      this.$http.post(api, { data: cart })
        .then(() => {
          this.status.loadingItem = '';
        });
    },
  },
  created() {
    this.id = this.$route.params.productID; // id等於路由取得的id
    this.getProduct();
  },
};
</script>
