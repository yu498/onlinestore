<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light mx-2 sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
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
            <router-link to="/user/card" class="nav-link mx-4 my-2">男裝</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link mx-4 my-2">女裝</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link mx-4 my-2">配件類</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link mx-4 my-2">訂單查詢</router-link>
          </li>
        </ul>
        <div class="d-flex justify-content-end">
          <p class="nav-item m-2"><i class="bi bi-cart-fill"></i></p>
          <router-link to="/login"><i class="bi bi-person-circle"></i></router-link>
          <p class="nav-item m-2"><i class="bi bi-person-circle"></i></p>
        </div>
      </div>
    </div>
  </nav>
</template>
