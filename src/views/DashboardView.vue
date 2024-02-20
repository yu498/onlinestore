<template>
  <Navbar></Navbar>
<router-view />
</template>

<script>
import Navbar from '../components/NavBar.vue';

export default {
  components: {
    Navbar,
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
        }
      })
      .catch((err) => { console.log(err.required); }); // 反之失敗原因
  },
};
</script>
