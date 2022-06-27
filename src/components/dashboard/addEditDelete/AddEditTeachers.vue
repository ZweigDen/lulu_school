<template>
  <div
    id="productModal"
    ref="modal"
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
            <span v-if="isNew">新增教師</span>
            <span v-else>編輯教師</span>
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
                <label for="imageUrl"
                  >主要圖片
                  <input
                    type="text"
                    class="form-control"
                    placeholder="請輸入圖片連結"
                    v-model="tempProduct.imageUrl"
                  />
                </label>
                <img class="img-fluid" :src="tempProduct.imageUrl" alt="" />
              </div>
              <div class="mb-1">多圖新增</div>
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <div class="mb-1" v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                  <div class="form-group">
                    <label for="imageUrl"
                      >圖片網址
                      <input
                        type="text"
                        class="form-control"
                        placeholder="請輸入圖片連結"
                        v-model="tempProduct.imagesUrl[key]"
                      />
                    </label>
                  </div>
                  <img class="img-fluid" :src="image" alt="" />
                </div>
                <div
                  v-if="
                    !tempProduct.imagesUrl.length ||
                    tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempProduct.imagesUrl.push('')"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button
                    class="btn btn-outline-danger btn-sm d-block w-100"
                    @click="tempProduct.imagesUrl.pop()"
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
              <div class="form-group">
                <label for="title"
                  >教師姓名
                  <input
                    id="title"
                    v-model="tempProduct.title"
                    type="text"
                    class="form-control"
                    placeholder="請輸入姓名"
                  />
                </label>
              </div>

              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category"
                    >部門分類
                    <select class="form-control" v-model="tempProduct.category">
                      <option disabled selected>請選擇分類</option>
                      <option>ＩＴ</option>
                      <option>設計</option>
                      <option>時尚</option>
                      <option>公職</option>
                      <option>家庭</option>
                    </select>
                  </label>
                </div>
                <div class="form-group col-md-6">
                  <label for="price"
                    >職位
                    <select class="form-control" v-model="tempProduct.unit">
                      <option disabled selected>請選擇職位</option>
                      <option>主任</option>
                      <option>教師</option>
                      <option>顧問</option>
                    </select>
                  </label>
                </div>
              </div>
              <hr />
              <div class="row g-2">
                <div class="form-group col">
                  <label for="description"
                    >座右銘
                    <textarea
                      id="description"
                      v-model="tempProduct.description"
                      type="text"
                      class="form-control"
                      placeholder="教師口頭禪"
                    >
                    </textarea>
                  </label>
                </div>
                <div class="form-group col">
                  <label for="content"
                    >想說的話
                    <textarea
                      id="content"
                      v-model="tempProduct.content"
                      type="text"
                      class="form-control"
                      placeholder="想對學生說的話"
                    >
                    </textarea>
                  </label>
                </div>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">
                    <span class="d-none">是否啟用</span>
                    <input
                      id="is_enabled"
                      v-model="tempProduct.is_enabled"
                      class="form-check-input"
                      type="checkbox"
                      :true-value="1"
                      :false-value="0"
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
            @click="updateProduct(tempProduct)"
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
  props: ['product', 'isNew'],
  data() {
    return {
      tempProduct: {},
      status: '',
      modal: '',
      loading: false,
    };
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    },
    loading() {
      this.status = this.loading;
    },
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.modal = new Modal(this.$refs.modal);
  },
  methods: {
    createImages() {
      this.tempProduct.imagesUrl = [''];
    },
    updateProduct(temp) {
      this.loading = true;
      // eslint-disable-next-line no-param-reassign
      temp.checkBtn = '0'; // 讓icon呈現購買
      this.tempProduct.origin_price = 0;
      this.tempProduct.price = 0;
      let api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product`;
      let method = 'post';
      if (temp.id) {
        api = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${temp.id}`;
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
