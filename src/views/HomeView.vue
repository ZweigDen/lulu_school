<template>
  <header style="height: 100vh">
    <Navbar></Navbar>
    <HambugerMenu></HambugerMenu>
    <HeaderContent></HeaderContent>
  </header>
  <main>
    <SwiperList></SwiperList>
    <NewsBlog></NewsBlog>
    <Advantage></Advantage>
    <Subject></Subject>
    <Community></Community>
    <MarqueeModal></MarqueeModal>
  </main>
  <footer>
    <FooterView></FooterView>
    <FooterModal></FooterModal>
  </footer>
</template>

<script>
// header components
import Navbar from '@/components/home/header/NavbarModal.vue';
import HambugerMenu from '@/components/home/header/HamburgerMenu.vue';
import HeaderContent from '@/components/home/header/HeaderContent.vue';
// main
import SwiperList from '@/components/home/main/SwiperList.vue';
import NewsBlog from '@/components/home/main/NewsBlog.vue';
import Advantage from '@/components/home/main/AdvantageView.vue';
import Subject from '@/components/home/main/SubjectModal.vue';
import Community from '@/components/home/main/CommunityModal.vue';
import MarqueeModal from '@/components/home/main/MarqueeModal.vue';
// footer
import FooterModal from '@/components/layout/footer/FooterModal.vue';
import FooterView from '@/components/layout/footer/FooterView.vue';

export default {
  components: {
    Navbar,
    HambugerMenu,
    HeaderContent,
    SwiperList,
    NewsBlog,
    Advantage,
    Subject,
    Community,
    MarqueeModal,
    FooterModal,
    FooterView,
  },
};
</script>
