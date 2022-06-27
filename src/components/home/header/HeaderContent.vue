<template>
  <section
    data-aos="animate__bounceInDown"
    class="ps-md-8 ps-4 text-white position-absolute"
    style="top: 40%"
  >
    <p class="h6">Grow up. Turn professional.</p>
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.4)" data-aos="animate__rotateInDownLeft">你</span
      ><span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownLeft">要</span
      ><span style="animation-delay: calc(1s * 0.8)" data-aos="animate__rotateInDownLeft">的</span
      ><span style="animation-delay: calc(1s * 1)" data-aos="animate__rotateInDownLeft">專</span
      ><span style="animation-delay: calc(1s * 1.2)" data-aos="animate__rotateInDownLeft">業</span
      ><span style="animation-delay: calc(1s * 1.4)" data-aos="animate__rotateInDownLeft">，</span>
    </p>
    <p class="h1 d-flex mb-4">
      <span style="animation-delay: calc(1s * 1.4)" data-aos="animate__rotateInDownRight">由</span
      ><span style="animation-delay: calc(1s * 1.2)" data-aos="animate__rotateInDownRight">我</span
      ><span style="animation-delay: calc(1s * 1)" data-aos="animate__rotateInDownRight">們</span
      ><span style="animation-delay: calc(1s * 0.8)" data-aos="animate__rotateInDownRight">培</span
      ><span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownRight">訓</span
      ><span style="animation-delay: calc(1s * 0.4)" data-aos="animate__rotateInDownRight">。</span>
    </p>
    <div class="col-lg-4 col-sm-6 col-9">
      <h5>
        各類專長職業學校-呼嚕貓學院。我們的許多畢業生活躍於生活環境險惡的苗栗國。為了突破現況，作為一個堅實的成年人。現在！你站在成為大人的門口。
      </h5>
    </div>
  </section>
  <!-- 動態背景 -->
  <section class="fixed-top" style="z-index: -1">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 5000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        class="bgImg"
        :style="{
          'background-image': 'url(' + require('../../../assets/images/header-01.jpg') + ')',
        }"
      ></swiper-slide
      ><swiper-slide
        class="bgImg"
        :style="{
          'background-image': 'url(' + require('../../../assets/images/header-02.jpg') + ')',
        }"
      ></swiper-slide
      ><swiper-slide
        class="bgImg"
        :style="{
          'background-image': 'url(' + require('../../../assets/images/header-03.jpg') + ')',
        }"
      ></swiper-slide
      ><swiper-slide
        class="bgImg"
        :style="{
          'background-image': 'url(' + require('../../../assets/images/header-04.jpg') + ')',
        }"
      ></swiper-slide>
    </swiper>
  </section>
</template>

<style>
.swiper-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet,
.swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
  margin-bottom: 20px;
}
.swiper-pagination-fraction,
.swiper-pagination-custom,
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
}
.swiper-pagination-bullet {
  width: 30px;
  height: 30px;
  border: 1px solid #fff;
}
.swiper-pagination-bullet-active {
  position: relative;
  background-color: rgba(255, 255, 255, 0);
}
.swiper-pagination-bullet-active::before {
  content: '';
  position: absolute;
  background-color: #fff;
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: 1px solid #fff;
  animation: border 4s;
}

.swiper-pagination-bullet-active::after {
  content: '';
  position: absolute;
  height: 1px;
  width: 0px;
  background-color: #fff;
  border-radius: 0;
  top: 50%;
  left: 50%;
  transform: translatey(-50%);
  animation: line 2s linear;
  animation-fill-mode: forwards;
}

@keyframes line {
  0% {
    width: 0px;
  }
  100% {
    width: 100px;
  }
}
@keyframes border {
  0% {
    padding: 15px;
  }
  50% {
    padding: 2px;
  }
  100% {
    padding: 15px;
  }
}
.bgImg {
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { Autoplay, Pagination } from 'swiper';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Autoplay, Pagination],
    };
  },
};
</script>
