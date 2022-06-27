<template>
  <section class="px-md-7 py-6 p-2 d-lg-flex bg-white">
    <div class="w-100 me-lg-4 mb-6 mb-lg-0">
      <div class="d-flex align-items-center mb-4">
        <h3 class="mb-0 d-flex align-items-center">
          NEWS<span class="ms-3 h4 mb-0 text-secondary">/</span>
        </h3>
        <ul class="list-unstyled d-flex align-items-center mb-0">
          <li class="ms-3 hvr-underline-from-left">
            <input
              type="radio"
              class="btn-check"
              name="btnradio0"
              id="btnradio0"
              autocomplete="off"
              checked
              @click="newsStatus(0)"
            />
            <label class="btn btn-outline-dark px-3 rounded rounded-4 border-0" for="btnradio0"
              >全部<input type="text" class="d-none"
            /></label>
          </li>
          <li class="ms-3 hvr-underline-from-left">
            <input
              type="radio"
              class="btn-check"
              name="btnradio0"
              id="btnradio1"
              autocomplete="off"
              @click="newsStatus(1)"
            />
            <label class="btn btn-outline-dark px-3 rounded rounded-4 border-0" for="btnradio1"
              >重要<input type="text" class="d-none"
            /></label>
          </li>
          <li class="ms-3 hvr-underline-from-left">
            <input
              type="radio"
              class="btn-check"
              name="btnradio0"
              id="btnradio2"
              autocomplete="off"
              @click="newsStatus(2)"
            />
            <label class="btn btn-outline-dark px-3 rounded rounded-4 border-0" for="btnradio2"
              >消息<input type="text" class="d-none"
            /></label>
          </li>
        </ul>
      </div>
      <table class="table table-hover">
        <tbody>
          <template v-for="item in articles" :key="item.id">
            <tr v-if="item.description == 'News'" v-show="news == 0" @click="goToArticle(item)">
              <th scope="row" style="width: 15%">{{ item.create_at }}</th>
              <td style="width: 10%">{{ item.author }}</td>
              <td class="text-secondary" style="width: 75%">{{ item.title }}</td>
            </tr>
          </template>
          <template v-for="item in articles" :key="item.id">
            <tr
              v-if="item.description == 'News' && item.author == '重要'"
              v-show="news == 1"
              @click="goToArticle(item)"
            >
              <th scope="row" style="width: 15%">{{ item.create_at }}</th>
              <td style="width: 10%">{{ item.author }}</td>
              <td class="text-secondary" style="width: 75%">{{ item.title }}</td>
            </tr>
          </template>
          <template v-for="item in articles" :key="item.id">
            <tr
              v-if="item.description == 'News' && item.author == '消息'"
              v-show="news == 2"
              @click="goToArticle(item)"
            >
              <th scope="row" style="width: 15%">{{ item.create_at }}</th>
              <td style="width: 10%">{{ item.author }}</td>
              <td class="text-secondary" style="width: 75%">{{ item.title }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="wrapper">
        <div class="button">
          <router-link to="/front/articles" class="text-decoration-none h5 ps-2"
            >查看全部<i class="bi bi-arrow-right-short h4"></i
          ></router-link>
        </div>
      </div>
    </div>
    <div class="w-100 ms-lg-4">
      <div class="d-flex align-items-center mb-4">
        <h3 class="mb-0 d-flex align-items-center">
          BLOGS<span class="ms-3 h4 mb-0 text-secondary">/</span>
        </h3>
        <ul class="list-unstyled d-flex align-items-center mb-0">
          <li class="ms-3 hvr-underline-from-left">
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio3"
              autocomplete="off"
              checked
              @click="blogStatus(0)"
            />
            <label class="btn btn-outline-dark px-3 rounded rounded-4 border-0" for="btnradio3"
              >全部<input type="text" class="d-none"
            /></label>
          </li>
          <li class="ms-3 hvr-underline-from-left">
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio4"
              autocomplete="off"
              @click="blogStatus(1)"
            />
            <label class="btn btn-outline-dark px-3 rounded rounded-4 border-0" for="btnradio4"
              >閒談<input type="text" class="d-none"
            /></label>
          </li>
          <li class="ms-3 hvr-underline-from-left">
            <input
              type="radio"
              class="btn-check"
              name="btnradio"
              id="btnradio5"
              autocomplete="off"
              @click="blogStatus(2)"
            />
            <label class="btn btn-outline-dark px-3 rounded rounded-4 border-0" for="btnradio5"
              >一般<input type="text" class="d-none"
            /></label>
          </li>
        </ul>
      </div>
      <table class="table table-hover">
        <tbody class="">
          <template v-for="item in articles" :key="item.id">
            <tr v-if="item.description == 'Blog'" v-show="blog == 0" @click="goToArticle(item)">
                <th scope="row" style="width: 15%">{{ item.create_at }}</th>
                <td style="width: 10%">{{ item.author }}</td>
                <td class="text-secondary" style="width: 75%">{{ item.title }}</td>
            </tr>
          </template>
          <template v-for="item in articles" :key="item.id">
            <tr
              v-if="item.description == 'Blog' && item.author == '閒談'"
              v-show="blog == 1"
              @click="goToArticle(item)"
            >
              <th scope="row" style="width: 15%">{{ item.create_at }}</th>
              <td style="width: 10%">{{ item.author }}</td>
              <td class="text-secondary" style="width: 75%">{{ item.title }}</td>
            </tr>
          </template>
          <template v-for="item in articles" :key="item.id">
            <tr
              v-if="item.description == 'Blog' && item.author == '一般'"
              v-show="blog == 2"
              @click="goToArticle(item)"
            >
              <th scope="row" style="width: 15%">{{ item.create_at }}</th>
              <td style="width: 10%">{{ item.author }}</td>
              <td class="text-secondary" style="width: 75%">{{ item.title }}</td>
            </tr>
          </template>
        </tbody>
      </table>
      <div class="wrapper">
        <div class="button">
          <router-link to="/front/articles" class="text-decoration-none h5 ps-2"
            >查看全部<i class="bi bi-arrow-right-short h4"></i
          ></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
.wrapper .button {
  height: 25px;
  width: 25px;
  white-space: nowrap;
  background: #adb5bd;
  border-radius: 50px;
  transition: all 0.3s ease-out;
}
.wrapper .button:hover {
  width: 92px;
  background: #000;
}
.wrapper .button a {
  color: #000;
}
.wrapper .button:hover a {
  color: #fff;
}
</style>

<script>
export default {
  data() {
    return {
      articles: [],
      news: 0,
      blog: 0,
    };
  },
  methods: {
    getArticles() {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/articles`;
      this.$http.get(url).then((res) => {
        this.articles = res.data.articles;
      });
    },
    newsStatus(num) {
      this.news = num;
    },
    blogStatus(num) {
      this.blog = num;
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
