import { createApp } from 'vue';
import AOS from 'aos';
import axios from 'axios';
import VueAxios from 'vue-axios';
import mitt from 'mitt';
import Vue3Marquee from 'vue3-marquee';
import 'vue3-marquee/dist/style.css';
import 'bootstrap';
import App from './App.vue';
import router from './router';
import toCurrency from './assets/js/toCurrency';

const app = createApp(App);
AOS.init({
  useClassNames: true,
  initClassName: false,
  once: true,
  animatedClassName: 'animate__animated',
// animatedClassName: 'animated',
});

app.config.globalProperties.$toCurrency = toCurrency;

app.use(AOS);
app.use(mitt);
app.use(Vue3Marquee);
app.use(VueAxios, axios);
app.use(router);

app.mount('#app');
