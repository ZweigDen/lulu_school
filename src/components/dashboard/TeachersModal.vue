<template>
  <section class="w-100 p-4">
    <section class="mb-5">
      <div class="d-flex align-items-center justify-content-between">
        <h2>教師列表</h2>
        <button
          type="button"
          class="btn btn-outline-dark btn-lg rounded-3"
          @click="openModal(true)"
        >
          <i class="fa-solid fa-plus me-2"></i>新增教師
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
            <th scope="col">姓名</th>
            <th scope="col">職位</th>
            <th scope="col">啟用</th>
            <th scope="col">刪除</th>
            <th scope="col">修改</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in products" :key="item.id">
            <th scope="row">{{ item.category }}</th>
            <td>{{ item.title }}</td>
            <td>{{ item.unit }}</td>
            <td v-if="item.is_enabled"><i class="far fa-check-square text-success h3"></i></td>
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
                @click="openModal(false, item)"
              >
                <i class="fas fa-pen"></i>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
    <!-- 新增修改模組 -->
    <AddEdit ref="addedit" :isNew="isNew" :product="product" @render="getProducts"></AddEdit>
    <!-- 刪除確認模組 -->
    <CheckDelete
      :product="product"
      @delete="deleteProduct"
      :loading="loadingStatus"
      ref="check"
    ></CheckDelete>
  </section>
</template>

<script>
import AddEdit from './addEditDelete/AddEditTeachers.vue';
import CheckDelete from './addEditDelete/CheckDelete.vue';

export default {
  data() {
    return {
      test: '',
      loadingStatus: '',
      products: [],
      product: {},
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
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    // open add&edit Modal
    openModal(isNew, item) {
      this.isNew = isNew;
      if (this.isNew) {
        this.product = {
          imagesUrl: [],
        };
      } else {
        this.product = { ...item };
      }
      this.$refs.addedit.openModal();
    },
    // check刪除
    checkDelete(item) {
      this.product = item;
      this.$refs.check.openModal();
    },
    // 刪除單項課程
    deleteProduct(id) {
      this.loadingStatus = id;
      const url = `${process.env.VUE_APP_API}/api/${process.env.VUE_APP_PATH}/admin/product/${id}`;
      this.$http.delete(url).then((res) => {
        if (res.data.success) {
          this.getProducts();
          this.loadingStatus = '';
          this.$refs.check.hideModal();
        }
      });
    },
  },
  mounted() {
    this.getProducts();
  },
};
</script>
