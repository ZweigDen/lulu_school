<template>
  <section class="w-100 p-4">
    <section class="mb-5">
      <div class="d-flex align-items-center justify-content-between">
        <h2>文章列表</h2>
        <button
          type="button"
          class="btn btn-outline-dark btn-lg rounded-3"
          @click="openModal(true)"
        >
          <i class="fa-solid fa-plus me-2"></i>新增文章
        </button>
        <label for="inputState" class="form-label"
          ><p class="d-none">State</p>
          <select id="inputState" class="form-select rounded-3 p-2 px-3">
            <option selected>新->舊...</option>
            <option>按類別</option>
          </select>
        </label>
      </div>
    </section>
    <section>
      <table class="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">分類</th>
            <th scope="col">標題</th>
            <th scope="col">類型</th>
            <th scope="col">日期</th>
            <th scope="col">啟用</th>
            <th scope="col">刪除</th>
            <th scope="col">修改</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in articles" :key="item.id">
            <th scope="row">{{ item.description }}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.author }}</td>
            <td>{{ item.create_at }}</td>
            <td v-if="item.isPublic"><i class="far fa-check-square text-success h3"></i></td>
            <td v-else><i class="far fa-times-circle h3 text-warning"></i></td>
            <td>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="checkDelete(item)"
              >
                <i class="fas fa-trash-alt"></i>
              </button>
            </td>
            <td>
              <button
                type="button"
                class="btn btn-outline-secondary btn-sm"
                @click="getArticle(item.id)"
              >
                <i class="fas fa-pen"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- 新增修改模組 -->
    <AddEdit ref="addedit" :isNew="isNew" :article="article" @render="getArticles"></AddEdit>
    <!-- 刪除確認模組 -->
    <CheckDelete
      :product="article"
      @delete="deleteArticle"
      :loading="loadingStatus"
      ref="check"
    ></CheckDelete>
  </section>
</template>

<script>
import AddEdit from './addEditDelete/AddEditArticles.vue';
import CheckDelete from './addEditDelete/CheckDelete.vue';

export default {
  data() {
    return {
      loadingStatus: '',
      articles: [],
      article: {},
      pagination: {},
      isNew: false,
    };
  },
  components: {
    AddEdit,
    CheckDelete,
  },
  methods: {
    // 取得資料
    getArticles(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.articles = res.data.articles;
          this.pagination = res.data.pagination;
        }
      });
    },
    // open add&edit Modal
    openModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.article = {
          imagesUrl: [],
        };
      } else {
        this.article = { ...item };
      }
      this.$refs.addedit.openModal();
    },
    // 取得單筆文章並起開啟修改modal
    getArticle(id) {
      console.log(id);
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      this.$http.get(url).then((res) => {
        this.article = res.data.article;
        this.openModal(false, this.article);
      });
    },
    // check刪除
    checkDelete(item) {
      this.article = item;
      this.$refs.check.openModal();
    },
    // 刪除文章
    deleteArticle(id) {
      this.loadingStatus = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.getArticles();
          this.loadingStatus = '';
          this.$refs.check.hideModal();
        }
      });
    },
  },
  mounted() {
    this.getArticles();
  },
};
</script>
