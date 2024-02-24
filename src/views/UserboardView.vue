<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/user/card" class="nav-link">花蜜</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">首頁</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">花品</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">關於我們</router-link>
        </li>
        <li class="nav-item">
          <router-link to="" class="nav-link">購物車</router-link>
        </li>
      </ul>
    </div>
  </div>
</nav>
<RouterView></RouterView>
</template>
