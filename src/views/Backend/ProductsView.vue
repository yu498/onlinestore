<template>
  <LoadingAnimation :active="isLoading"></LoadingAnimation>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openModal(true)">
      新增產品
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th width="120">分類</th>
        <th>產品名稱</th>
        <th width="120">原價</th>
        <th width="120">售價</th>
        <th width="100">是否啟用</th>
        <th width="200">編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in products" :key="item.id">
        <td>{{ item.category }}</td>
        <td>{{ item.title }}</td>
        <td class="text-right">
          {{ $filters.currency(item.origin_price) }}
        </td>
        <td class="text-right">
          {{ $filters.currency(item.price) }}
        </td>
        <td>
          <span class="text-success" v-if="item.is_enabled">啟用</span>
          <span class="text-success text-muted" v-else>未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <PaginationCps :pages="pagination" @emit-pages="getProducts"></PaginationCps>
  <ProductModal ref="productModal" :product="tempProduct"
  @update-product="updateProduct"></ProductModal>
  <DelModal :item="tempProduct" @del-item="delProduct" ref="delModal"></DelModal>
</template>

<script>
import ProductModal from '@/components/ProductModal.vue';
import DelModal from '@/components/DelModal.vue';
import PaginationCps from '@/components/PaginationCps.vue';

export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false,
    };
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          if (res.data.success) {
            this.products = res.data.products;
            console.log(res.data.products);
            this.pagination = res.data.pagination;
          }
        })
        .catch((err) => { console.log(err.required); });
    },
    openModal(isNew, item) { // 開啟新增編輯視窗
      if (isNew) {
        this.tempProduct = {}; // 將裡面資料先清空
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增商品
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      // 編輯商品
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      const productComponent = this.$refs.productModal;
      this.isLoading = true;
      this.$http[httpMethod](api, { data: this.tempProduct }) // 向api發出post的請求
        .then((res) => { // 請求成功
          this.isLoading = false;
          productComponent.hideModal();
          if (res.data.success) {
            this.getProducts();
            this.$httpMessageState(res, '更新成功');
          } else {
            this.getProducts();
            this.$httpMessageState(res, '更新成功');
          }
        })
        .catch((err) => console.log(err));
    },
    openDelModal(item) { // 開啟刪除視窗
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct() { // 刪除物品
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.isLoading = true;
      this.$http.delete(api).then((res) => {
        this.isLoading = false;
        this.$httpMessageState(res, '刪除成功');
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();
      })
        .catch((err) => console.log(err));
    },
  },
  components: {
    ProductModal,
    DelModal,
    PaginationCps,
  },
  created() {
    this.getProducts();
  },
};
</script>
