<!-- <template>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>圖片</th>
        <th>商品名稱</th>
        <th>價格</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td style="width: 200px;">
          <div style="height: 100px; background-size: cover; background-position: center;"
            :style="{ backgroundImage: `url(${item.imageUrl})` }">
          </div>
        </td>
        <td>{{ item.title }}</td>
        <td>
          <div class="h5" v-if="!item.price">現在只要{{ item.price }} 元</div>
          <del class="h6" v-if="item.price">原價{{ item.origin_price }} 元</del>
          <div class="h5" v-if="item.price">現在只要{{ item.price }} 元</div>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm" @click="getProduct(item.id)">
              查看更多</button>
            <button class="btn btn-outline-danger btn-sm" @click="addCart(item.id)"
              :disabled="this.status.loadingItem === item.id">
              <div v-if="this.status.loadingItem === item.id"
              class="spinner-grow spinner-grow-sm" role="status">
                <span class="visually-hidden" >Loading...</span>
              </div>
              加入購物車
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template> -->
<template>
  <div class="content">
    <div class="container">
      <div class="row">
        <div class="col-md-3 col-xs-6" v-for="item in products" :key="item.id">
          <figure>
            <div style="height: 100px; background-size: cover; background-position: center;"
              :style="{ backgroundImage: `url(${item.imageUrl})` }">
            </div>
          </figure>
          <div>
            <a style="text-decoration: none; color: black;" href="#"
            @click.prevent="getProduct(item.id)">
              <h3>{{ item.title }}</h3>
            </a>
            <div class="d-flex justify-content-between">
              <div>
                <p class="d-inline" v-if="!item.price">$ {{ item.price }}</p>
                <p class="d-inline text-secondary" v-if="item.price"><del>
                $ {{ item.origin_price }}</del></p>
                &thinsp;
                <p class="d-inline" v-if="item.price">$ {{ item.price }}</p>
              </div>
              <div>
                <button type="button"
                class="bg-white border-0"
                 @click.prevent="addCart(item.id)">
                  <i class="bi bi-cart3"></i>
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
  .post-meta-price{
    font-size: 16px;
    margin: 0, 8px,0,0;
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
    getProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          this.products = res.data.products;
        });
    },
    getProduct(id) {
      // this.$router.push(`/user/product/${id}`);
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
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
