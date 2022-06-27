<template>
  <section class="bg-dark px-lg-7 p-2">
    <div class="d-sm-flex justify-content-center p-4 border-bottom borer-secondary">
      <a href="#" class="mx-5">
        <img src="../../../assets/images/product-header.jpg" alt="" />
        <p class="d-none">1</p>
      </a>
      <a href="#" class="mx-5">
        <img src="../../../assets/images/product-header.jpg" alt="" />
        <p class="d-none">1</p>
      </a>
    </div>
    <OptionRouter></OptionRouter>
  </section>
</template>

<script>
import OptionRouter from './OptionRouter.vue';

export default {
  components: {
    OptionRouter,
  },
};
</script>
