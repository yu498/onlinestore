<template>
  <Navbar></Navbar>
  <div class="container-fluid mt-3 position-relative">
    <ToastMessages></ToastMessages>
    <router-view/>
  </div>
</template>

<script>
import emitter from '@/methods/emitter';
import ToastMessages from '@/components/ToastMessages.vue';
import Navbar from '@/components/Backed/NavBar.vue';

export default {
  components: {
    Navbar,
    ToastMessages,
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexTonken\s*=\s*([^;]*).*$)|^.*$/,
      '$1',
    );
    // console.log(token);// 檢查是否成功取得token
    this.$http.defaults.headers.common.Authorization = `${token}`;
    const api = `${process.env.VUE_APP_API}api/user/check`; // 串接登入的url
    this.$http.post(api, this.user) // 向api發出post的請求
      .then((res) => {
        if (!res.data.success) {
          this.$router.push('/login');
        } else {
          this.$httpMessageState(res, '登入成功');
        }
      })
      .catch((err) => { console.log(err.required); }); // 反之失敗原因
  },
  provide() {
    return {
      emitter,
    };
  },
};
</script>
