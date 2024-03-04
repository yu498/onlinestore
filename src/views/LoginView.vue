<template>
  <LoadingAnimation :active="isLoading"></LoadingAnimation>
  <div class="container mt-5">
    <form class="row justify-content-center" @submit.prevent="signIN">
      <div class="col-md-6">
        <h1 class="h3 mb-3 font-weight-normal">請先登入</h1>
        <div class="mb-2">
          <label for="inputEmail" class="sr-only" style="width: 100%;">Email address
            <input type="email" id="inputEmail" class="form-control"
            placeholder="Email address" required autofocus v-model="user.username" />
          </label>
        </div>
        <div class="mb-2">
          <label  for="inputPassword" class="sr-only" style="width: 100%;">Password
            <input type="password" id="inputPassword"
            class="form-control" placeholder="Password" required v-model="user.password" />
          </label>
        </div>
        <div class="text-end mt-4">
          <button class="btn btn-lg btn-primary btn-block" type="submit">登入</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: false,
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signIN() { // 建立登入api
      const api = `${process.env.VUE_APP_API}admin/signin`; // 串接登入的url
      this.isLoading = true;
      this.$http.post(api, this.user) // 向api發出post的請求
        .then((res) => { // 請求成功
          this.isLoading = false;
          if (res.data.success) {
            const { token, expired } = res.data;
            // 建立cookie
            document.cookie = `hexTonken=${token}; expired=${new Date(expired)}`;
            this.$router.push('dashboard/products');
          }
        })
        .catch((err) => { console.log(err); }); // 請求失敗
    },
  },
};
</script>
