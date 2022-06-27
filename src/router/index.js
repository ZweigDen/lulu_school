import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  // 前台
  {
    path: '/front',
    name: 'front',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'login',
        name: '登入',
        component: () => import('../components/LogInModal.vue'),
      },
      {
        path: 'school',
        name: '學校介紹',
        component: () => import('../components/front/main/SchoolView.vue'),
      },
      {
        path: 'school/introduce',
        name: '學校概要',
        component: () => import('../components/front/main/school/SchoolIntroduce.vue'),
      },
      {
        path: 'school/fee',
        name: '學費問題',
        component: () => import('../components/front/main/school/SchoolFee.vue'),
      },
      {
        path: 'school/teachers',
        name: '教師介紹',
        component: () => import('../components/front/main/school/TeachersView.vue'),
      },
      {
        path: 'school/map',
        name: '學校位置',
        component: () => import('../components/front/main/school/MapView.vue'),
      },
      {
        path: 'qa',
        name: '常見問題',
        component: () => import('../components/front/main/QAView.vue'),
      },
      {
        path: 'subject',
        name: '學科介紹',
        component: () => import('../components/front/main/SubjectView.vue'),
      },
      {
        path: 'articles',
        name: '最新消息',
        component: () => import('../components/front/main/ArticlesView.vue'),
      },
      {
        path: 'article/:id',
        name: '單筆文章',
        component: () => import('../components/front/main/ArticleView.vue'),
      },
      {
        path: 'article2/:id',
        name: '單筆文章2',
        component: () => import('../components/front/main/ArticleVuew2.vue'),
      },
    ],
  },
  // 後台
  {
    path: '/dashboard',
    name: '後台',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: 'activity',
        name: '活動消息',
        component: () => import('../components/dashboard/ActivityModal.vue'),
      },
      {
        path: 'questions',
        name: '問題編輯',
        component: () => import('../components/dashboard/QuestionsModal.vue'),
      },
      {
        path: 'teachers',
        name: '教師編輯',
        component: () => import('../components/dashboard/TeachersModal.vue'),
      },
      {
        path: 'news',
        name: 'news編輯',
        component: () => import('../components/dashboard/ArticleModal.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'hovered',
  scrollBehavior() {
    return {
      top: 1,
    };
  },
});

export default router;
