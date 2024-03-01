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
                <button @click="updateCart(item)">-</button>
                {{ item.qty }}
                <button>+</button>
            </div>
            <div class="amount">{{ item.final_total }}</div>
            <div class="operate">
                <button @click="DelCart(item.product.id)">刪除</button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    getCart() { // 取得購物車列表
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(url)
        .then((res) => {
          this.carts = res.data.data;
          console.log(this.carts);
        });
    },
    updateCart(item) {
      console.log(item.qty);
      // if (item.qty === 1 && i === -1) {
      //   return;
      // }
      // // item.qty += i;
      // console.log(item.qty);
      // const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      // this.$http.put(url, { data: { product_id: item.id, qty: item.qty } }).then(() => {
      //   this.getCart();
      // });
    },
    DelCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(url)
        .then((res) => { console.log(res); });
    },
    handleSub() {
      console.log(this.carts.product.price);
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
