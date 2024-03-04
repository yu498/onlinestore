<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mx-2 sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../assets/image/logo.jpg"
        alt="" width="100" height="30">
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link mx-4 my-2">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/products" class="nav-link mx-4 my-2">產品列表</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/user/cart" class="nav-link mx-4 my-2">購物車</router-link>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
          <router-link class="nav-link m-2" to="/login">
            <i class="bi bi-person-circle logo-icon"></i>
          </router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<style>
.logo-icon{
  font-size: 24px;
}
</style>
