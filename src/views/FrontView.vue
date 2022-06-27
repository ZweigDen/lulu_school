<template>
  <header>
    <Navbar></Navbar>
    <HambugerMenu></HambugerMenu>
  </header>
  <main>
    <router-view></router-view>
  </main>
  <footer>
    <FooterView></FooterView>
    <FooterModal></FooterModal>
  </footer>
</template>

<script>
// header components
import Navbar from '@/components/front/header/NavbarModal.vue';
import HambugerMenu from '@/components/front/header/HamburgerMenu.vue';
// footer
import FooterModal from '@/components/layout/footer/FooterModal.vue';
import FooterView from '@/components/layout/footer/FooterView.vue';

export default {
  components: {
    Navbar,
    HambugerMenu,
    FooterModal,
    FooterView,
  },
};
</script>
