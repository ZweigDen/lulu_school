<template>
  <section class="bg-white pt-10 pb-5 newsBlogBox">
    <div class="container">
      <div class="row">
        <div class="col-12 col-lg-6 mb-6 border-sm-0 border-bottom pb-1 mb-lg-0">
          <div class="d-sm-flex align-items-center mb-3">
            <h3 class="font-weight-bold mb-3 mb-sm-0">News</h3>
            <ul class="list-unstyled d-flex mb-0 align-items-center">
              <li class="ms-4 h6 d-none d-sm-block">/</li>
              <li class="ms-sm-2 h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio0"
                  autocomplete="off"
                  checked
                  @click="newsStatus(0)"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio0"
                  >全部</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autocomplete="off"
                  @click="newsStatus(1)"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio1"
                  >重要</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio"
                  id="btnradio2"
                  autocomplete="off"
                  @click="newsStatus(2)"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio2"
                  >一般</label
                >
              </li>
            </ul>
          </div>
          <template v-for="item in articles" :key="item.id">
            <ul
              class="list-unstyled d-flex align-items-center border-bottom btn text-secondary shape-ex1 ps-0 mb-0"
              v-if="this.statusNews == '0' && (item.author == '一般' || item.author == '重要')"
              @click="goToPage(item)"
            >
              <li class="col-1 h4 py-1">{{ item.author }}</li>
              <li class="col-2 me-2 h4 py-1">{{ item.create_at }}</li>
              <li class="fw-bolder text-start h4 py-1">{{ item.title }}</li>
            </ul>
            <ul
              class="list-unstyled d-flex align-items-center border-bottom btn text-secondary shape-ex1 ps-0 mb-0"
              v-if="this.statusNews == '1' && item.author == '重要'"
              @click="goToPage(item)"
            >
              <li class="col-1 h4 py-1">{{ item.author }}</li>
              <li class="col-2 me-2 h4 py-1">{{ item.create_at }}</li>
              <li class="fw-bolder text-start h4 py-1">{{ item.title }}</li>
            </ul>
            <ul
              class="list-unstyled align-items-center d-flex border-bottom btn text-secondary shape-ex1 ps-0 mb-0"
              v-if="this.statusNews == '2' && item.author == '一般'"
              @click="goToPage(item)"
            >
              <li class="col-1 h4 py-1">{{ item.author }}</li>
              <li class="col-2 me-2 h4 py-1">{{ item.create_at }}</li>
              <li class="fw-bolder text-start h4 py-1">{{ item.title }}</li>
            </ul>
          </template>
        </div>
        <div class="col-12 col-lg-6 border-bottom pb-1">
          <div class="d-sm-flex align-items-center mb-3">
            <h3 class="font-weight-bold mb-3 mb-sm-0">Blog</h3>
            <ul class="list-unstyled d-flex mb-0 align-items-center">
              <li class="ms-4 h6 d-none d-sm-block">/</li>
              <li class="ms-sm-2 h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio1"
                  id="btnradio4"
                  autocomplete="off"
                  checked
                  @click="blogStatus(0)"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio4"
                  >全部</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio1"
                  id="btnradio5"
                  autocomplete="off"
                  @click="blogStatus(1)"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio5"
                  >閒聊</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio1"
                  id="btnradio6"
                  autocomplete="off"
                  @click="blogStatus(2)"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio6"
                  >講義</label
                >
              </li>
              <li class="ms-2 btn h6 p-0">
                <input
                  type="radio"
                  class="btn-check"
                  name="btnradio1"
                  id="btnradio7"
                  autocomplete="off"
                  @click="blogStatus(3)"
                />
                <label class="btn btn-outline-dark rounded-pill border-0" for="btnradio7"
                  >面試</label
                >
              </li>
            </ul>
          </div>
          <template v-for="item in articles" :key="item.id">
            <ul
              class="list-unstyled d-flex align-items-center border-bottom btn text-secondary shape-ex1 ps-0 mb-0"
              v-if="
                this.statusBlog == '0' &&
                (item.author == '閒聊' || item.author == '面試' || item.author == '講義')
              "
              @click="goToPage(item)"
            >
              <li class="col-1 h4 py-1">{{ item.author }}</li>
              <li class="col-2 me-2 h4 py-1">{{ item.create_at }}</li>
              <li class="fw-bolder text-start h4 py-1">{{ item.title }}</li>
            </ul>
            <ul
              class="list-unstyled d-flex align-items-center border-bottom btn text-secondary shape-ex1 ps-0 mb-0"
              v-if="this.statusBlog == '1' && item.author == '閒聊'"
              @click="goToPage(item)"
            >
              <li class="col-1 h4 py-1">{{ item.author }}</li>
              <li class="col-2 me-2 h4 py-1">{{ item.create_at }}</li>
              <li class="fw-bolder text-start h4 py-1">{{ item.title }}</li>
            </ul>
            <ul
              class="list-unstyled d-flex border-bottom align-items-center btn text-secondary shape-ex1 ps-0 mb-0"
              v-if="this.statusBlog == '2' && item.author == '面試'"
              @click="goToPage(item, 'blog')"
            >
              <li class="col-1 h4 py-1">{{ item.author }}</li>
              <li class="col-2 me-2 h4 py-1">{{ item.create_at }}</li>
              <li class="fw-bolder text-start h4 py-1">{{ item.title }}</li>
            </ul>
            <ul
              class="list-unstyled d-flex border-bottom align-items-center btn text-secondary shape-ex1 ps-0 mb-0"
              v-if="this.statusBlog == '3' && item.author == '講義'"
              @click="goToPage(item, 'blog')"
            >
              <li class="col-1 h4 py-1">{{ item.author }}</li>
              <li class="col-2 me-2 h4 py-1">{{ item.create_at }}</li>
              <li class="fw-bolder text-start h4 py-1">{{ item.title }}</li>
            </ul>
          </template>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      articles: [],
      article: {},
      // 按鈕狀態
      statusNews: '0',
      statusBlog: '0',
    };
  },
  methods: {
    // 取得newsblog的資料
    getNews() {
      const url = `${process.env.VUE_APP_URL}/api/${process.env.VUE_APP_PATH}/articles`;
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.articles = res.data.articles;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 看更多文章
    // 僅取得5筆
    // 單文章
    goToPage(item) {
      console.log(this.$route); // 1
      console.log(this.$router); // 2
      this.$router.push(`/front/article/${item.id}`);
    },
    // 更換顯示
    newsStatus(num) {
      this.statusNews = num;
    },
    blogStatus(num) {
      this.statusBlog = num;
    },
  },
  mounted() {
    this.getNews();
  },
};
</script>
