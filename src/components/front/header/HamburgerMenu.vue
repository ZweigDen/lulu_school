<template>
  <button
    type="button"
    class="btn menu-button border-0"
    ref="menu"
    @click="toggleModal"
    style="z-index: 9999"
    :class="classList.menuBtn"
  >
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </button>
  <div
    class="offcanvas offcanvas-end hambugSet"
    tabindex="-1"
    data-bs-backdrop="static"
    data-bs-scroll="true"
    aria-labelledby="offcanvasExampleLabel"
    ref="modal"
    style="width:70%;"
  >
    <div class="offcanvas-body d-flex flex-column justify-content-between p-6">
      <OptionRouter></OptionRouter>
      <CommunityModal></CommunityModal>
    </div>
  </div>
</template>

<style scoped>
.hambugSet {
  min-width: 70%;
}
.menu-button {
  position: fixed;
  top: 50px;
  right: 50px;
  padding: 15px;
  cursor: pointer;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.menuBtnUp {
  top: 0;
  right: 0;
}
.menuBtnDown {
  top: 50px;
  right: 50px;
}
@media (max-width: 576px) {
  .menuBtnDown {
    top: 0;
    right: 0;
  }
  .hambugSet {
  min-width: 100%;
}
}
.menu-button .bar:nth-of-type(1) {
  margin-top: 0px;
}
.menu-button .bar:nth-of-type(3) {
  margin-bottom: 0px;
}
.bar {
  position: relative;
  display: block;
  width: 50px;
  height: 5px;
  margin: 10px auto;
  background-color: #000;
  border-radius: 10px;
  -webkit-transition: 0.3s;
  transition: 0.3s;
}
.menu-button:hover .bar:nth-of-type(1) {
  -webkit-transform: translateY(1.5px) rotate(-4.5deg);
  -ms-transform: translateY(1.5px) rotate(-4.5deg);
  transform: translateY(1.5px) rotate(-4.5deg);
}
.menu-button:hover .bar:nth-of-type(2) {
  opacity: 0.9;
}
.menu-button:hover .bar:nth-of-type(3) {
  -webkit-transform: translateY(-1.5px) rotate(4.5deg);
  -ms-transform: translateY(-1.5px) rotate(4.5deg);
  transform: translateY(-1.5px) rotate(4.5deg);
}
.cross .bar:nth-of-type(1) {
  -webkit-transform: translateY(15px) rotate(-45deg);
  -ms-transform: translateY(15px) rotate(-45deg);
  transform: translateY(15px) rotate(-45deg);
  background-color: #000;
}
.cross .bar:nth-of-type(2) {
  opacity: 0;
}
.cross .bar:nth-of-type(3) {
  -webkit-transform: translateY(-15px) rotate(45deg);
  -ms-transform: translateY(-15px) rotate(45deg);
  transform: translateY(-15px) rotate(45deg);
  background-color: #000;
}
.cross:hover .bar:nth-of-type(1) {
  -webkit-transform: translateY(13.5px) rotate(-40.5deg);
  -ms-transform: translateY(13.5px) rotate(-40.5deg);
  transform: translateY(13.5px) rotate(-40.5deg);
}
.cross:hover .bar:nth-of-type(2) {
  opacity: 0.1;
}
.cross:hover .bar:nth-of-type(3) {
  -webkit-transform: translateY(-13.5px) rotate(40.5deg);
  -ms-transform: translateY(-13.5px) rotate(40.5deg);
  transform: translateY(-13.5px) rotate(40.5deg);
}

/* FB IG LINE */
.button{
    display: inline-block;
    height: 60px;
    width: 60px;
    margin: 0 5px;
    overflow: hidden;
    background: #fff;
    border-radius: 50px;
    cursor:pointer;
    box-shadow: 0 10px 10px rgba(0,0,0,0.1);
    transition: all 0.3s ease-out;
}
.button:hover{
    width: 200px;
}
.button .icon{
    display: inline-block;
    height: 60px;
    width: 60px;
    text-align: center;
    border-radius: 50px;
    box-sizing: border-box;
    line-height: 60px;
    transition:all 0.3s ease-out;
}
</style>

<script>
import Offcanvas from 'bootstrap/js/dist/offcanvas';
import CommunityModal from '@/components/home/main/CommunityModal.vue';
import OptionRouter from '@/components/layout/header/OptionRouter.vue';

export default {
  data() {
    return {
      classList: {
        menuBtn: 'menuBtnDown',
      },
    };
  },
  components: {
    CommunityModal,
    OptionRouter,
  },
  methods: {
    toggleModal() {
      const addCross = this.$refs.menu;
      //   判斷是否有cross類別
      addCross.classList.toggle('cross');
      this.offcanvas.toggle();
    },
  },
  mounted() {
    this.offcanvas = new Offcanvas(this.$refs.modal);
    window.addEventListener('scroll', () => {
      const windowY = window.scrollY;
      if (windowY > 100) {
        this.classList = {
          menuBtn: 'menuBtnUp bg-white',
        };
      } else {
        this.classList = {
          menuBtn: 'menuBtnDown',
        };
      }
    });
  },
};
</script>
