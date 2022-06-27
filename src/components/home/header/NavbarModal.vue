<template>
  <div class="container-fluid navModal">
    <div class="row p-sm-5">
      <div class="col-12 col-lg-4" :class="classList.navBar">
        <router-link to="/" class="text-decoration-none">
          <span class="h5">幼獸 未來創造學院<br /></span>
          <span class="h3">呼嚕貓教育學校</span>
        </router-link>
      </div>
      <div class="col-4 d-lg-block d-none text-nowrap">
        <ul class="list-unstyled d-flex justify-content-center align-items-center h-100">
          <li>
            <router-link to="/front/articles" class="text-decoration-none d-flex">
              <div class="d-flex align-items-center hvr-icon-float-in text-white">
                <h5 class="me-1">最新消息</h5>
                <i class="fa-solid fa-circle-arrow-right h4 hvr-icon"></i>
              </div>
            </router-link>
          </li>
          <li class="mx-xl-6 mx-lg-4 mx-3">
            <router-link to="/front/school" class="text-decoration-none d-flex">
              <div class="d-flex align-items-center hvr-icon-float-in text-white">
                <h5 class="me-1">學校介紹</h5>
                <i class="fa-solid fa-circle-arrow-right h4 hvr-icon"></i>
              </div>
            </router-link>
          </li>
          <li>
            <router-link to="/front/subject" class="text-decoration-none d-flex">
              <div class="d-flex align-items-center hvr-icon-float-in text-white">
                <h5 class="me-1">部門介紹</h5>
                <i class="fa-solid fa-circle-arrow-right h4 hvr-icon"></i>
              </div>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="col-4 d-none d-lg-block">
        <ul class="list-unstyled d-flex justify-content-center align-items-center h-100">
          <li>
            <router-link to="/front/qa" class="text-decoration-none text-white">相關問題</router-link>
          </li>
          <li class="mx-5">
            <div class="dropdown">
              <button
                class="dropdown-toggle btn btn-link text-white text-decoration-none"
                type="button"
                @click="toggleModal"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                相關企業
              </button>
              <ul
                class="dropdown-menu dropdown-menu-dark rounded-3 dropdownSit"
                aria-labelledby="dropdownMenuButton2"
                ref="modal"
                style="transform: translate(-50%, -50%)"
              >
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-solid fa-dumbbell me-3"></i>LULU體態教室</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-solid fa-caravan me-3"></i>LU營趣</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-solid fa-tree me-3 ms-1"></i>植日森</a
                  >
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-solid fa-handshake me-3"></i>廠商業配</a
                  >
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.navSet a {
  color: #fff;
}
@media (max-width: 576px) {
  .navModal {
    position: fixed;
    z-index:111;
  }
  .navSet {
    padding: 5.5px;
    a {
      color: #000;
    }
  }
}
.dropdownSit::after {
  content: '';
  position: absolute;
  top: -15px;
  left: 50%;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0 15px 15px 15px;
  border-color: transparent transparent #343a40 transparent;
  transform: translateX(-50%);
}
.dropdown-menu {
  transform: translate(-20%, 30%) !important;
}
</style>

<script>
import Dropdown from 'bootstrap/js/dist/dropdown';

export default {
  data() {
    return {
      dropdown: '',
      classList: {
        navBar: 'navSet',
      },
    };
  },
  components: {},
  methods: {
    toggleModal() {
      this.dropdown.toggle();
    },
  },
  mounted() {
    this.dropdown = new Dropdown(this.$refs.modal);
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY;
      const breakpoint = document.getElementById('breakpoint');
      if (windowY > breakpoint.offsetTop) {
        this.classList = {
          navBar: 'navSet bg-white',
        };
      } else {
        this.classList = {
          navBar: 'navSet',
        };
      }
    });
  },
};
</script>
