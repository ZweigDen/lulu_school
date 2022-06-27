<template>
  <section class="p-sm-7 pt-7 p-5">
    <p class="h1 d-flex">
      <span style="animation-delay: calc(1s * 0.1)" data-aos="animate__rotateInDownLeft"
        ><i class="fas fa-exclamation"></i></span
      ><span style="animation-delay: calc(1s * 0.2)" data-aos="animate__rotateInDownLeft">Ｎ</span
      ><span style="animation-delay: calc(1s * 0.3)" data-aos="animate__rotateInDownLeft">Ｅ</span
      ><span style="animation-delay: calc(1s * 0.4)" data-aos="animate__rotateInDownLeft">Ｗ</span
      ><span style="animation-delay: calc(1s * 0.5)" data-aos="animate__rotateInDownLeft">Ｓ</span
      ><span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownLeft">＆</span>
      <span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownLeft">Ｂ</span>
      <span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownLeft">Ｌ</span>
      <span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownLeft">Ｏ</span>
      <span style="animation-delay: calc(1s * 0.6)" data-aos="animate__rotateInDownLeft">Ｇ</span>
    </p>
  </section>
  <section class="p-sm-7 p-5" style="background: #f4f4f4">
    <div class="bg-white rounded-3 shadow-sm text-center p-5">
      <div>
        <div class="mb-4 d-flex justify-content-center align-items-center">
          <h4
            class="me-2 border p-1 px-2 rounded-pill"
            :class="{
              'text-warning border-warning': article.author === '閒聊',
              'text-success border-success': article.author === '消息',
              'text-danger border-danger': article.author === '重要',
              'text-primary border-primary': article.author === '一般',
            }"
          >
            {{ article.author }}
          </h4>
          <h5 class="text-secondary">{{ article.create_at }}</h5>
        </div>
        <h2 class="mb-5 border-bottom pb-6">{{ article.title }}</h2>
        <div class="d-flex justify-content-center mb-5">
          <img :src="article.image" alt="" style="width: 70%" />
        </div>
        <h4 class="border-bottom mb-5">{{ article.content }}</h4>
        <router-link to="/front/articles" class="text-decoration-none">
          <div class="hvr-icon-float-in text-dark text-center">
            <h3 class="me-1">返回文章列表</h3>
            <i class="fa-solid fa-circle-arrow-left h3 hvr-icon"></i></div
        ></router-link>
      </div>
    </div>
  </section>
  <section class="p-5">
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
              <img :src="item.image" class="card-img-top" alt="..." style="border-radius: 15px" />
              <div class="card-body">
                <p class="card-text text-dark">
                  {{ item.title }}
                </p>
              </div>
            </div>
          </router-link>
        </swiper-slide>
      </template>
    </swiper>
  </section>
</template>

<style scoped lang="scss">
@import '../../../../node_modules/swiper/modules/free-mode/free-mode.scss';
</style>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// import required modules
import { FreeMode } from 'swiper';

export default {
  data() {
    return {
      id: '',
      article: '',
      articles: [],
      filterData: [],
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
  watch: {
    id() {
      console.log(this.id);
    },
  },
  methods: {
    // 取得單筆文章
    getArticle() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/article/${this.id}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.article = res.data.article;
          this.getArticles();
        }
      });
    },
    // 取得所有文章
    getArticles() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.articles = res.data.articles;
          this.filterArticles();
        }
      });
    },
    // 查看單筆文章
    goToArticle(item) {
      this.$router.push(`/front/article/${item.id}`);
    },
    // 篩選相關資料
    filterArticles() {
      this.articles.forEach((item) => {
        if (item.author === this.article.author) {
          this.filterData.push(item);
        }
      });
    },
  },
  created() {
    // console.log(this.$route.params);
    // console.log(this.$router);
    this.id = this.$route.params.id;
    this.getArticle();
  },
};
</script>
