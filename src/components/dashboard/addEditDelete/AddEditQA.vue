<template>
  <div
    id="productModal"
    ref="articleModal"
    class="modal fade"
    data-bs-keyboard="false"
    data-bs-backdrop="static"
    tabindex="-1"
    aria-labelledby="productModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-xl">
      <div class="modal-content border-0 rounded-3">
        <div class="modal-header">
          <h3 id="productModalLabel" class="modal-title">
            <span v-if="isNew">新增ＱＡ</span>
            <span v-else>編輯ＱＡ</span>
          </h3>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group mb-4">
                <label for="image"
                  >主要圖片
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempArticle.image"
                  />
                </label>
                <img class="img-fluid" :src="tempArticle.imageUrl" alt="" />
              </div>
              <div class="mb-1">多圖新增</div>
              <div v-if="Array.isArray(tempArticle.imagesUrl)">
                <div class="mb-1" v-for="(image, key) in tempArticle.imagesUrl" :key="key">
                  <div class="form-group">
                    <label for="imageUrl"
                      >圖片網址
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                        v-model="tempArticle.imagesUrl[key]"
                      />
                    </label>
                  </div>
                  <img class="img-fluid" :src="image" alt="" />
                </div>
                <div
                  v-if="
                    !tempArticle.imagesUrl.length ||
                    tempArticle.imagesUrl[tempArticle.imagesUrl.length - 1]
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempArticle.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="tempArticle.imagesUrl.pop()"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <button
                  class="btn btn-outline-secondary btn-sm d-block w-100"
                  @click="createImages"
                >
                  新增陣列圖片
                </button>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="form-group mb-3">
                <label for="title"
                  >文章標題
                  <input
                    id="title"
                    v-model="tempArticle.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入標題"
                  />
                </label>
              </div>

              <div class="row">
                <div class="form-group col-4">
                  <label for="category"
                    >文章分類
                    <select class="form-control" v-model="tempArticle.description">
                      <option disabled selected>請選擇分類</option>
                      <option>News</option>
                      <option>Blog</option>
                    </select>
                  </label>
                </div>
                <div class="form-group col-4">
                  <label for="price"
                    >類型
                    <select class="form-control" v-model="tempArticle.author">
                      <option disabled selected>請選擇職位</option>
                      <option>事件</option>
                      <option>消息</option>
                      <option>重要</option>
                      <option>系統</option>
                      <option>其他</option>
                    </select>
                  </label>
                </div>
                <div class="form-group col-4">
                  <label for="createdate"
                  >發表時間
                  <input
                    id="createdate"
                    v-model="tempArticle.create_at"
                    type="date"
                    class="form-control"
                  />
                </label>
                </div>
              </div>
              <hr />
              <div class="form-group mb-3">
                  <textarea
                    id="content"
                    v-model="tempArticle.content"
                    type="text"
                    class="form-control"
                    placeholder="文章內容"
                    style="height:200px;"
                  >
                  </textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <label class="form-check-label" for="isPublic">
                    <span class="d-none">是否啟用</span>
                    <input
                      id="isPublic"
                      v-model="tempArticle.isPublic"
                      class="form-check-input"
                      type="checkbox"
                      :true-value=true
                      :false-value=false
                    />
                  </label>
                  是否啟用
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="text-center" :class="{ 'd-none': loading == false }">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <button
            type="button"
            class="btn btn-outline-danger me-5"
            data-bs-dismiss="modal"
            :class="{ 'd-none': loading == true }"
          >
            取消
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="updateArticle(tempArticle)"
            :class="{ 'd-none': loading == true }"
          >
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['article', 'isNew'],
  data() {
    return {
      tempArticle: {},
      status: '',
      modal: '',
      loading: false,
      tempTime: '',
    };
  },
  watch: {
    article() {
      this.tempArticle = this.article;
    },
    loading() {
      this.status = this.loading;
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.modal = new Modal(this.$refs.articleModal);
  },
  methods: {
    createImages() {
      this.tempArticle.imagesUrl = [''];
    },
    updateArticle(temp) {
      this.loading = true;
      const time = temp.create_at.split('-');
      // eslint-disable-next-line no-param-reassign
      time.forEach((element) => {
        this.tempTime += element;
      });
      // eslint-disable-next-line no-param-reassign
      temp.create_at = Number(this.tempTime);
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article`;
      let method = 'post';
      if (temp.id) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/article/${temp.id}`;
        method = 'put';
      }
      this.$http[method](api, { data: temp })
        .then((res) => {
          if (res.data.success) {
            this.$emit('render');
            this.loading = false;
            this.hideModal();
          } else {
            // eslint-disable-next-line no-alert
            alert(res.data.message);
            this.loading = false;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
};
</script>
