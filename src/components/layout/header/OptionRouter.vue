<template>
  <section class="pt-sm-8 pt-5">
    <div class="container">
      <div class="row row-cols-1 row-cols-md-3">
        <div class="col px-sm-5 mb-4 px-md-0 d-sm-flex flex-column align-items-center">
          <div>
            <div class="text-dark mb-2 d-flex align-items-center justify-content-between">
              <router-link
                class="text-decoration-none hvr-icon-float-in text-dark"
                to="/front/subject"
                ><h3>部門介紹<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h3
              ></router-link>
              <a href="#" @click.prevent="clickMenu"
                ><i class="bi bi-plus-lg h3 d-md-none d-block text-dark"
                  ><p class="d-none">123</p></i
                ></a
              >
            </div>
            <ul class="list-unstyled footerView d-none d-md-block">
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/front/subject"
                  ><h4>- ＩＴ部門</h4></router-link
                >
              </li>
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/front/subject"
                  ><h4>- 設計部門</h4></router-link
                >
              </li>
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/front/subject"
                  ><h4>- 時尚部門</h4></router-link
                >
              </li>
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/front/subject"
                  ><h4>- 公職部門</h4></router-link
                >
              </li>
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center"
                  to="/front/subject"
                  ><h4>- 家庭部門</h4></router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col px-sm-5 mb-4 px-md-0 d-sm-flex flex-column align-items-center">
          <div>
            <div class="text-dark mb-2 d-flex align-items-center justify-content-between">
              <router-link href="#" class="text-decoration-none hvr-icon-float-in text-dark" to="/"
                ><h3>入學相關<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h3
              ></router-link>
              <a href="#" @click.prevent="clickMenu"
                ><i class="bi bi-plus-lg h3 d-md-none d-block text-dark"
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
                  ><h4>- 入學考試</h4></router-link
                >
              </li>
              <li>
                <router-link
                  href="#"
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/"
                  ><h4>- 相關問題</h4></router-link
                >
              </li>
              <li>
                <router-link href="#" class="text-decoration-none hvr-underline-from-center" to="/"
                  ><h4>- 錄取訊息</h4></router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col px-sm-5 mb-4 px-md-0 d-sm-flex flex-column align-items-center">
          <div>
            <div class="text-dark mb-2 d-flex align-items-center justify-content-between">
              <router-link
                class="text-decoration-none hvr-icon-float-in text-dark"
                to="/front/school"
                ><h3>學校介紹<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h3
              ></router-link>
              <a href="#" @click.prevent="clickMenu"
                ><i class="bi bi-plus-lg h3 d-md-none d-block text-dark"
                  ><p class="d-none">123</p></i
                ></a
              >
            </div>
            <ul class="list-unstyled footerView d-none d-md-block">
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/front/school/introduce"
                  ><h4>- 學校簡介</h4></router-link
                >
              </li>
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/front/school/fee"
                  ><h4>- 學雜費用</h4></router-link
                >
              </li>
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/front/school/teachers"
                  ><h4>- 教師職員</h4></router-link
                >
              </li>
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center"
                  to="/front/school/map"
                  ><h4>- 校園交通</h4></router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col px-sm-5 mb-4 px-md-0 d-sm-flex flex-column align-items-center">
          <div>
            <div class="text-dark mb-2 d-flex align-items-center justify-content-between">
              <router-link
                to="/front/articles"
                class="text-decoration-none hvr-icon-float-in text-dark"
                ><h3>最新消息<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h3
              ></router-link>
              <a href="#" @click.prevent="clickMenu"
                ><i class="bi bi-plus-lg h3 d-md-none d-block text-dark"
                  ><p class="d-none">123</p></i
                ></a
              >
            </div>
            <ul class="list-unstyled footerView d-none d-md-block">
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/front/articles"
                  ><h4>- ＮＥＷＳ</h4></router-link
                >
              </li>
              <li>
                <router-link
                  class="text-decoration-none hvr-underline-from-center mb-2"
                  to="/front/articles"
                  ><h4>- ＢＬＯＧＳ</h4></router-link
                >
              </li>
            </ul>
          </div>
        </div>
        <div class="col px-sm-5 mb-4 px-md-0 d-sm-flex flex-column align-items-center">
          <router-link
            href="#"
            class="text-decoration-none hvr-icon-float-in text-dark mb-2"
            to="/front/qa"
            ><h3>相關問題<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h3
          ></router-link>
        </div>
        <div class="col px-sm-5 mb-4 px-md-0 d-sm-flex flex-column align-items-center">
          <router-link
            href="#"
            class="text-decoration-none hvr-icon-float-in text-dark mb-2"
            to="/front/login"
            ><h3>登入後台<i class="fa-solid fa-circle-chevron-right icon me-2 hvr-icon"></i></h3
          ></router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.footerView h4 {
  color: #6c757d;
}
.footerView a:hover h4 {
  color: #000;
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
