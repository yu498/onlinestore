<template>
  <header class="container">
    <div>
      <div id="carouselExampleSlidesOnly" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/image/BGImage1.jpg" class="d-block w-100 img-fluid" alt="1" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img src="../assets/image/BGImage1.jpg" class="d-block w-100" alt="2" />
            <div class="carousel-caption d-none d-md-block">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
  <main class="container mt-5">
    <div class="border text-center">
      <p>為慶祝開幕本店，當月購物享5折優惠</p>
      <button type="button">立刻領取</button>
    </div>
    <div class="row d-flex flex-column mt-5">
      <div class="d-flex">
        <div class="col-md-6">
          <img src="../assets/image/homepage284_04.jpg" alt="" class="w-100" />
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h2>精選服飾</h2>
          <p>日韓歐風格，成為路上焦點</p>
          <button type="button">選購商品</button>
        </div>
      </div>
      <div class="d-flex">
        <div class="col-md-6">
          <img src="../assets/image/homepage284_04.jpg" alt="" class="w-100" />
        </div>
        <div class="col-md-6 d-flex flex-column justify-content-center">
          <h2>精品配件</h2>
          <p>各式精美飾品，讓你身上不再單調</p>
          <button type="button">選購商品</button>
        </div>
      </div>
    </div>

    <div>
      Q&A
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
              Accordion Item #1
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the first item's accordion body.
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
              Accordion Item #2
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            class="accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <div class="accordion-body">
              Placeholder content for this accordion, which is intended to demonstrate the
              <code>.accordion-flush</code> class. This is the second item's accordion body. Let's
              imagine this being filled with some actual content.
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
              Accordion Item #3
            </button>
          </h2>
        </div>
      </div>
    </div>
  </main>
  <footer class="mt-3">
    圖片僅供學習使用，無商業用途
  </footer>
</template>
