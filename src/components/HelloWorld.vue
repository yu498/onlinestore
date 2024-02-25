<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/user/card" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link">商品</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link">訂單查詢</router-link>
          </li>
          <li class="nav-item">
            <router-link to="" class="nav-link">關於我們</router-link>
          </li>
        </ul>
        <div class="d-flex">
          <p class="nav-item m-2"><i class="bi bi-cart-fill"></i></p>
          <p class="nav-item m-2"><i class="bi bi-person-circle"></i></p>
        </div>
      </div>
    </div>
  </nav>
  <main class="container">
    <!-- <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="../assets/image/yoga-1.jpg" class="d-block w-100 " alt="yoga">
        </div>
      </div>
      <button class="carousel-control-prev" type="button"
      data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button"
      data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div> -->
    <div>
      <div class="d-flex">
        <div>關於我們</div>
        <div>img</div>
      </div>
      <div class="d-flex flex-row-reverse">
        <div>主題系列</div>
        <div>img</div>
      </div>
    </div>
    <div>優惠卷</div>
    <div>最新消息</div>
    <div class="" >
      <h3>熱門商品</h3>
      <div class="row">
        <div class="col-sm-4 col-lg-4">
          <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
        <div class="col-sm-4 col-lg-4">
          <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
        <div class="col-sm-4 col-lg-4">
          <div class="card" style="width: 18rem;">
          <img src="" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">Some quick example text to build on the card</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
        </div>
      </div>
    </div>

  </main>
</template>
