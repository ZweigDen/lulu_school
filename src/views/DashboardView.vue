<template>
  <section class="d-flex">
    <MenuModal></MenuModal>
    <router-view></router-view>
  </section>
</template>

<script>
import MenuModal from '@/components/dashboard/MenuModal.vue';

export default {
  data() {
    return {
      checkSuccess: false,
    };
  },
  components: {
    MenuModal,
  },
  methods: {
    checkLogin() {
      const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
      if (token) {
        // Axios 預設值
        this.$http.defaults.headers.common.Authorization = `${token}`;
        const api = `${process.env.VUE_APP_API}/api/user/check`;
        this.$http.post(api, { api_token: this.token }).then((response) => {
          if (response.data.success) {
            this.checkSuccess = true;
          } else {
            // eslint-disable-next-line no-alert
            alert(response.data.message);
            this.$router.push('/front/login');
          }
        });
      } else {
        // eslint-disable-next-line no-alert
        alert('您尚未登入。');
        this.$router.push('/front/login');
      }
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
