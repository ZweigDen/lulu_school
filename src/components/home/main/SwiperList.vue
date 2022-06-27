<template>
  <section class="pt-md-5 pt-4 pe-0 bg-white ms-sm-5 swiperSit" id="breakpoint">
    <swiper
      :slides-per-view="1.3"
      :space-between="20"
      :freeMode="true"
      :modules="modules"
      :breakpoints="swiperOptions.breakpoints"
      class="mySwiper ps-md-5 ps-3"
    >
    <template v-for="item in articles" :key="item.id">
      <swiper-slide class="border-bottom" @click="goToArticle(item)">
        <router-link to="/" class="text-decoration-none">
          <div class="card swiperHover">
            <img
              :src="item.image"
              class="card-img-top"
              alt="..."
              style="border-radius: 15px"
            />
            <div class="card-body">
              <p class="card-text text-dark">
                {{item.title }}
              </p>
            </div>
          </div>
        </router-link>
      </swiper-slide>
    </template>
    </swiper>
  </section>
</template>

<style lang="scss">
@import '../../../../node_modules/swiper/modules/free-mode/free-mode.scss';

.swiperSit {
  border-radius: 15px 0 0 0;
  margin-top: -150px;
  position: relative;
}
.swiperSit::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 60%;
  background: #fff;
  bottom: 0;
  left: -50px;
}
.swiperHover:hover {
  opacity: 0.5;
}

@media (max-width: 540px) {
  .swiperSit {
    border-radius: 0;
  }
}
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { FreeMode } from 'swiper';

export default {
  data() {
    return {
      articles: [],
      swiperOptions: {
        breakpoints: {
          767: {
            slidesPerView: 3.2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4.3,
            spaceBetween: 35,
          },
        },
      },
    };
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [FreeMode],
    };
  },
  methods: {
    getArticles() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles`;
      this.$http.get(url).then((res) => {
        this.articles = res.data.articles;
      });
    },
    // 查看單筆文章
    goToArticle(item) {
      this.$router.push(`/front/article/${item.id}`);
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
