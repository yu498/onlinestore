<template>
  <div class="text-end">
    <button class="btn btn-primary" type="button" @click="openCouponModal(true)">
      新增優惠卷
    </button>
  </div>
  <table class="table mt-4">
    <thead>
      <tr>
        <th>名稱</th>
        <th>折扣百分比</th>
        <th>到期日</th>
        <th>是否啟用</th>
        <th>編輯</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, key) in coupons" :key="key">
        <td>{{ item.title }}</td>
        <td>{{ item.percent }}%</td>
        <td>{{ $filters.date(item.due_date) }}</td>
        <td>
          <span v-if="item.is_enabled === 1" class="text-success">啟用</span>
          <span v-else class="text-success text-muted">未啟用</span>
        </td>
        <td>
          <div class="btn-group">
            <button class="btn btn-outline-primary btn-sm"
            @click="openCouponModal(false, item)">編輯</button>
            <button class="btn btn-outline-danger btn-sm" @click="openDelModal(item)">刪除</button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <couponModal :coupon="tempCoupon" ref="couponModal" @update-coupon="updateCoupon" />
  <DelModal :item="tempCoupon" @del-item="delCoupon" ref="delModal"></DelModal>
</template>

<script>
import couponModal from '@/components/CouponModal.vue';
import DelModal from '@/components/DelModal.vue';

export default {
  components: {
    couponModal,
    DelModal,
  },
  props: {
    config: Object,
  },
  data() {
    return {
      coupons: {},
      tempCoupon: {
        title: '',
        is_enabled: 0,
        percent: 100,
        code: '',
      },
      isLoading: false,
      isNew: false,
    };
  },
  methods: {
    getCoupon(page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons/?page=${page}`;
      this.$http.get(url, this.tempProduct)
        .then((res) => {
          if (res.data.success) {
            this.coupons = res.data.coupons;
            this.pagination = res.data.pagination;
          }
        })
        .catch((err) => console.log(err));
    },
    openCouponModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000,
        };
      } else {
        this.tempCoupon = { ...item };
      }
      this.$refs.couponModal.showModal();
    },
    updateCoupon(tempCoupon) {
      if (this.isNew) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
        this.$http.post(url, { data: tempCoupon }).then((res) => {
          this.$httpMessageState(res, '新增優惠券');
          this.getCoupon();
          this.$refs.couponModal.hideModal();
        });
      } else {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
        this.$http.put(url, { data: this.tempCoupon }).then((res) => {
          this.$httpMessageState(res, '新增優惠券');
          this.getCoupon();
          this.$refs.couponModal.hideModal();
        });
      }
    },
    openDelModal(isNew, item) { // 開啟刪除視窗
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delCoupon() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`;
      this.isLoading = true;
      this.$http.delete(url).then((response) => {
        console.log(response, this.tempCoupon);
        this.$httpMessageState(response, '刪除優惠券');
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getCoupon();
      });
    },
  },
  created() {
    this.getCoupon();
  },
};
</script>
