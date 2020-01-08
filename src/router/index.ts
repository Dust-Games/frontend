import Vue from 'vue';
import VueRouter from 'vue-router';
import { TokenService } from '../services/storage.service'

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: {
      title: 'DUST | Главная',
      public: true,
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: {
      title: 'DUST | Вход',
      public: true,
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
      title: 'DUST | Политика конфиденциальности',
      public: true,
    }
  },
  {
    path: '/rules',
    name: 'rules',
    component: () => import('@/views/Rules.vue'),
    meta: {
      title: 'DUST | Правила',
      public: true,
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
    meta: {
      title: 'DUST | О нас',
      public: true,
    }
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public)
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut)
  const loggedIn = !!TokenService.getToken();

  if(to.path == "/logout") {
    return next('/');
  }

  if (!isPublic && !loggedIn) {
    return next({
      path:'/login',
      query: { redirect: to.fullPath }  // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next('/')
  }

  next();
})

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : 'DUST';
  });
});

export default router;
