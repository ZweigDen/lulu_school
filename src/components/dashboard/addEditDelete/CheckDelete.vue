<template>
  <div
    class="modal fade"
    id="staticBackdrop"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="staticBackdropLabel">{{ product.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="d-flex align-items-center">
            <img :src="product.imageUrl" alt="" style="width: 300px; height: 200px" />
            <div class="ms-2 d-flex flex-column">
              <p class="mb-3">描述：{{ product.content }}</p>
              <p>說明：{{ product.description }}</p>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
          <div class="d-flex justify-content-center">
            <div
              class="spinner-border text-danger mb-1"
              role="status"
              :class="{ 'd-none': status !== product.id }"
            ></div>
            <button
              type="button"
              class="btn btn-danger"
              @click="$emit('delete', product.id)"
              :class="{ 'd-none': status == product.id }"
            >
              刪除
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  props: ['product', 'loading'],
  watch: {
    loading() {
      this.status = this.loading;
    },
  },
  data() {
    return {
      modal: '',
      status: '',
    };
  },
  mounted() {
    // eslint-disable-next-line no-undef
    this.modal = new Modal(this.$refs.modal);
  },
  methods: {
    openModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
  },
};
</script>
