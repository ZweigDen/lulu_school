<!-- Use preprocessors via the lang attribute! e.g. <template lang="pug"> -->
<template>
  <section class="d-flex justify-content-center">
    <div class="m-5 px-3 py-5" style="max-width:100%">
      <div class="inputGroup input-group-lg mb-5 w-100">
        <input
          type="text"
          class="form-control"
          placeholder="輸入你的帳號"
          aria-label="輸入你的帳號"
          aria-describedby="basic-addon2"
          style="font-size: 2rem"
          v-model="user.username"
        />
        <span class="input-group-text" id="basic-addon2" style="font-size: 2rem">@icloud.com</span>
      </div>
      <div
        class="inputGroup w-100 d-flex mb-7 justify-content-between align-items-center px-3 py-2"
      >
        <label for="password">
          <input :type="inputType" v-model="user.password" />
        </label>
        <button class="inputGroupIcon text-center" @click="togglePassword">
          <i v-if="showPassword" class="bi bi-eye"></i>
          <i v-else class="bi bi-eye-slash"></i>
        </button>
      </div>
      <div class="d-flex justify-content-between">
        <button
          type="button"
          class="btn btn-outline-danger"
          style="font-size: 2rem; border-radius: 0.5rem"
        >
          忘記密碼
        </button>
        <button
          type="button"
          class="btn btn-secondary"
          style="font-size: 2rem; border-radius: 0.5rem"
          @click="logIn"
        >
          登入後台
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
      showPassword: false,
    };
  },
  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    logIn() {
      const api = `${process.env.VUE_APP_API}/admin/signin`;
      const user = { ...this.user };
      user.username += '@icloud.com';
      this.$http.post(api, user).then((res) => {
        if (res.data.success) {
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token};expires=${new Date(expired)};`;
          this.$router.push('/dashboard');
          console.log('ok');
        } else {
          // eslint-disable-next-line no-alert
          alert(res.data.message);
        }
      });
    },
  },
  computed: {
    inputType() {
      return this.showPassword ? 'text' : 'password';
    },
  },
};
</script>

<style scoped>
.inputGroup {
  display: inline-flex;
  background-color: #ffffff;
  align-items: center;
  border-radius: 0.5rem;
  overflow: hidden;
  font-size: 2rem;
  box-shadow: 0px 2px 4px 1px rgba(0, 0, 0, 0.25);
}
.inputGroup input {
  border: 0;
}
.inputGroup input:focus {
  outline: 0;
}
.inputGroupIcon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  border: 0;
  background-color: inherit;
  cursor: pointer;
}
</style>
