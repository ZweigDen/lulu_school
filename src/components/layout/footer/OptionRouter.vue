<template>
  <section class="py-4">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-5">
        <div class="col">
          <div class="text-white mb-2 d-flex align-items-center justify-content-between">
            <router-link
              class="text-decoration-none hvr-icon-float-in text-white"
              to="/front/subject"
              ><h4>部門介紹<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h4
            ></router-link>
            <a href="#" @click.prevent="clickMenu"
              ><i class="bi bi-plus-lg h4 d-md-none d-block text-white"
                ><p class="d-none">123</p></i
              ></a
            >
          </div>
          <ul class="list-unstyled footerView d-none d-md-block">
            <li>
              <router-link
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/front/subject"
                ><h5>- ＩＴ部門</h5></router-link
              >
            </li>
            <li>
              <router-link
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/front/subject"
                ><h5>- 設計部門</h5></router-link
              >
            </li>
            <li>
              <router-link
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/front/subject"
                ><h5>- 時尚部門</h5></router-link
              >
            </li>
            <li>
              <router-link
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/front/subject"
                ><h5>- 公職部門</h5></router-link
              >
            </li>
            <li>
              <router-link class="text-decoration-none hvr-underline-from-center" to="front/subject"
                ><h5>- 家庭部門</h5></router-link
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="text-white mb-2 d-flex align-items-center justify-content-between">
            <router-link href="#" class="text-decoration-none hvr-icon-float-in text-white" to="/"
              ><h4>學校介紹<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h4
            ></router-link>
            <a href="#" @click.prevent="clickMenu"
              ><i class="bi bi-plus-lg h4 d-md-none d-block text-white"
                ><p class="d-none">123</p></i
              ></a
            >
          </div>
          <ul class="list-unstyled footerView d-none d-md-block">
            <li>
              <router-link
                href="#"
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/"
                ><h5>- 學校簡介</h5></router-link
              >
            </li>
            <li>
              <router-link
                href="#"
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/"
                ><h5>- 教師職員</h5></router-link
              >
            </li>
            <li>
              <router-link
                href="#"
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/"
                ><h5>- 校園交通</h5></router-link
              >
            </li>
            <li>
              <router-link
                href="#"
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/"
                ><h5>- 學費問題</h5></router-link
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="text-white mb-2 d-flex align-items-center justify-content-between">
            <router-link href="#" class="text-decoration-none hvr-icon-float-in text-white" to="/"
              ><h4>入學相關<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h4
            ></router-link>
            <a href="#" @click.prevent="clickMenu"
              ><i class="bi bi-plus-lg h4 d-md-none d-block text-white"
                ><p class="d-none">123</p></i
              ></a
            >
          </div>
          <ul class="list-unstyled footerView d-none d-md-block">
            <li>
              <router-link
                href="#"
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/"
                ><h5>- 入學考試</h5></router-link
              >
            </li>
            <li>
              <router-link
                href="#"
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/"
                ><h5>- 相關問題</h5></router-link
              >
            </li>
            <li>
              <router-link href="#" class="text-decoration-none hvr-underline-from-center" to="/"
                ><h5>- 錄取訊息</h5></router-link
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <div class="text-white mb-2 d-flex align-items-center justify-content-between">
            <router-link
              class="text-decoration-none hvr-icon-float-in text-white"
              to="/front/articles"
              ><h4>最新消息<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h4
            ></router-link>
            <a href="#" @click.prevent="clickMenu"
              ><i class="bi bi-plus-lg h4 d-md-none d-block text-white"
                ><p class="d-none">123</p></i
              ></a
            >
          </div>
          <ul class="list-unstyled footerView d-none d-md-block">
            <li>
              <router-link
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/front/articles"
                ><h5>- ＮＥＷＳ</h5></router-link
              >
            </li>
            <li>
              <router-link
                class="text-decoration-none hvr-underline-from-center mb-2"
                to="/front/articles"
                ><h5>- ＢＬＯＧＳ</h5></router-link
              >
            </li>
          </ul>
        </div>
        <div class="col">
          <router-link
            href="#"
            class="text-decoration-none hvr-icon-float-in text-white mb-2"
            to="/front/qa"
            ><h4>相關問題<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h4
          ></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.footerView h5 {
  color: #6c757d;
}
.footerView a:hover h5 {
  color: #fff;
}
</style>

<script>
export default {
  methods: {
    clickMenu(e) {
      const node = e.target.parentNode.parentNode.parentNode.getElementsByTagName('ul');
      node[0].classList.toggle('d-none');
      e.target.classList.toggle('bi-plus-lg');
      e.target.classList.toggle('bi-dash-lg');
    },
  },
};
</script>
