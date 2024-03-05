<template>
  <header class="container">
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/image/BGImage1.jpg" class="d-block w-100 img-fluid" alt="1" />
            <div class="carousel-caption d-none d-md-block">
              <h5>速報</h5>
              <p>歡慶開幕，全館下單輸入專屬優惠碼。</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/image/BGImage1.jpg" class="d-block w-100" alt="2" />
            <div class="carousel-caption d-none d-md-block">
              <h5>夏季特賣</h5>
              <p>全館夏季服飾，打折拍賣</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="container mt-5">
    <div class="border py-2">
      <p class="text-center">
        為慶祝開幕本店，當月購物享5折優惠<br/>
        輸入<span class="fw-bold">sho50</span>即可50%享有折扣
      </p>
    </div>
    <div class="row d-flex flex-column mt-5">
      <div class="d-lg-flex d-md-flex-column mb-3">
        <div class="col-lg-6 col-md-12">
          <img src="../assets/image/homepage284_04.jpg" alt="" class="w-100" />
        </div>
        <div class="col-lg-6 col-md-12 d-flex flex-column justify-content-center">
          <h2 class="fw-bold">精選服飾</h2>
          <p>日韓歐風格，成為路上焦點</p>
          <router-link to="/user/products" class="btn btn-outline-secondary me-2">選購商品</router-link>
        </div>
      </div>
      <div class="d-lg-flex flex-row-reverse d-md-flex-column mb-3">
        <div class="col-lg-6 col-md-12">
          <img src="../assets/image/homepage284_04.jpg" alt="" class="w-100" />
        </div>
        <div class="col-md-6 col-md-12 d-flex flex-column justify-content-center">
          <h2 class="fw-bold">精品配件</h2>
          <p>各式精美飾品，讓你身上不再單調</p>
          <router-link to="/user/products" class="btn btn-outline-secondary me-2">選購商品</router-link>
        </div>
      </div>
    </div>

    <div class="mt-3">
      <h3 class="text-center">常見問題</h3>
      <div class="accordion accordion-flush" id="accordionFlushExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingOne">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
            收件地址要變更，請問如何更改？
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              由於出貨作業非常的快速，完成訂購後請恕無法直接在網路上變更，若是未完成付款，請直接將欲變更收件地址通知我們修改，或是重新訂購一筆亦可。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingTwo">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
            我選擇「超商取貨」，請問下訂後多久商品會送達指定門市？
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              如果您是中午12:00前下訂，商品約在隔天中午過後會送達；如果您是中午12:00後下訂，
              商品約在後天送達(送達時間以系統通知為準)。商品送達指定門市時會發送簡訊和Email提醒您前往取貨，
              送達門市後逾期未前往取貨(常溫七天/低溫四天) ，本訂單將自動取消(辦理退貨)。
            </div>
          </div>
        </div>
        <div class="accordion-item">
          <h2 class="accordion-header" id="flush-headingThree">
            <button
              class="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseThree"
              aria-expanded="false"
              aria-controls="flush-collapseThree"
            >
            選擇「i郵箱取貨」商品的運送時間以及取貨方式為何？
            </button>
          </h2>
          <div
            id="flush-collapseThree"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingThree"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              商品抵達指定據點後，郵局會發送簡訊密碼通知您前往取貨，送達據點後逾三天未前往取貨，
              將轉為郵局招領，若逾二天未前往招領，本訂單將自動取消。
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <Footer></Footer>
</template>

<script>
import Footer from '@/components/UserFooter.vue';

export default {
  components: {
    Footer,
  },
};
</script>
