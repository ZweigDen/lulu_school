<template>
  <section class="position-relative" style="width:20%">
    <div class="navigation position-fixed">
      <ul class="list-unstyled d-flex align-items-end flex-column h-100 w-100" style="top:0;left0;">
        <li class="mb-5 pe-none">
          <a href="#" class="text-light text-decoration-none d-flex w-100 position-relative">
            <span class="icon h3 text-center"><i class="fa-solid fa-cat"></i></span>
            <span class="title h3">LULU後台</span>
          </a>
        </li>
        <li>
          <router-link
            to="/dashboard/activity"
            class="text-decoration-none d-flex w-100 position-relative"
          >
            <span class="icon h3 text-center"><i class="bi bi-calendar2-week-fill"></i></span>
            <span class="title h4">新增活動</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/dashboard/questions"
            class="text-decoration-none d-flex w-100 position-relative"
          >
            <span class="icon h3 text-center"><i class="fa-brands fa-rocketchat"></i></span>
            <span class="title h4">問題集</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/dashboard/teachers"
            class="text-decoration-none d-flex w-100 position-relative"
          >
            <span class="icon h3 text-center"><i class="fa-solid fa-chalkboard-user"></i></span>
            <span class="title h4">編輯教師</span>
          </router-link>
        </li>
        <li>
          <router-link
            to="/dashboard/news"
            class="text-decoration-none d-flex w-100 position-relative"
          >
            <span class="icon h3 text-center"
              ><i class="fa-solid fa-square-poll-horizontal"></i
            ></span>
            <span class="title h4">NEWS & BLOG</span>
          </router-link>
        </li>
        <li class="mt-auto">
          <router-link
            to="/"
            class="text-decoration-none d-flex w-100 position-relative"
            @click="signout"
          >
            <span class="icon h3 text-center"
              ><i class="fa-solid fa-arrow-right-from-bracket"></i
            ></span>
            <span class="title h4">Sign Out 登出</span>
          </router-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<style scoped>
.navigation {
  width: 300px;
  height: 100%;
  background: #30363d;
  border-left: 10px solid #30363d;
}
.navigation ul li {
  border-radius: 30px 0 0 30px;
  position: relative;
  width: 100%;
}
.navigation ul li a {
  color: #c9d1d9;
}
.navigation ul li:hover a,
.navigation ul li a.hovered {
  border-radius: 30px 0 0 30px;
  color: #30363d;
}
.navigation ul li:hover,
.navigation ul li a.hovered {
  background: #fff;
}
.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.navigation ul li a .title {
  position: relative;
  display: block;
  height: 60px;
  line-height: 60px;
  white-space: nowrap;
}
/* curve outside */
.navigation ul li:hover a::before,
.navigation ul li a.hovered::before {
  content: '';
  position: absolute;
  right: 0;
  top: -50px;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 35px 35px 0 10px #fff;
  pointer-events: none;
}
.navigation ul li:hover a::after,
.navigation ul li a.hovered::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 35px -35px 0 10px #fff;
  pointer-events: none;
}
</style>

<script>
import emitter from '@/assets/js/emitter';

export default {
  data() {
    return {
      text: '213123',
    };
  },
  methods: {
    signout() {
      document.cookie = 'hexToken=;expires=;';
      console.log('ok');
      alert('token 已清除');
      this.$router.push('/front/login');
    },
  },
  mounted() {
    emitter.on('change', (e) => {
      this.text = e;
    });
  },
};
</script>
