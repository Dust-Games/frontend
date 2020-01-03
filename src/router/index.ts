import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'DUST | Главная'
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('@/views/Profile.vue'),
    meta: {
      title: 'DUST | Профиль'
    }
  },
  {
    path: '/privacy-policy',
    name: 'privacyPolicy',
    component: () => import('@/views/PrivacyPolicy.vue'),
    meta: {
      title: 'DUST | Политика конфиденциальности'
    }
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import('@/views/Rules.vue'),
    meta: {
      title: 'DUST | Правила'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'DUST | О нас'
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// router.beforeEach((to, from, next) => {
//   const isNotAuth = 1;

//   // если авторизации быть не должно
//   if(isNotAuth) {
//     if (!store.getters.isLoggedIn) {
//       next();
//       return;
//     }
//     next("/");
//   // иначе, если нужна авторизация
//   } else if(isAuth) {
//     if (isCurrentWidthSmall) {
//       next('/download-app');
//       return;
//     } 
//     if (isLoggedIn) {
//       next();
//       return;
//     }
//     next("/auth");
//   }
//   // всё равно на авторизацию
//   next();
// });

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'DUST';
  });
});

export default router;
