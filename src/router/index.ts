import Vue from "vue";
import VueRouter from "vue-router";
// import { TokenService } from "../services/auth.service";

Vue.use(VueRouter);

const withPrefix = (prefix: any, routes: any) =>
  routes.map((route: any) => {
    route.path = prefix + route.path;
    return route;
  });

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home.vue"),
    meta: {
      title: "DUST | Главная",
      public: true
    }
  },
  ...withPrefix("/auth", [
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/auth/Login.vue"),
      meta: {
        title: "DUST | Вход",
        public: true
      }
    }
  ]),
  ...withPrefix("/user", [
    {
      path: "/wallet",
      name: "wallet",
      component: () => import("@/views/user/Wallet.vue"),
      meta: {
        title: "DUST | Кошелек"
      }
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("@/views/user/Profile.vue"),
      meta: {
        title: "DUST | Профиль"
      }
    }
  ]),
  ...withPrefix("/info", [
    {
      path: "/privacy-policy",
      name: "privacyPolicy",
      component: () => import("@/views/info/PrivacyPolicy.vue"),
      meta: {
        title: "DUST | Политика конфиденциальности",
        public: true
      }
    },
    {
      path: "/rules",
      name: "rules",
      component: () => import("@/views/info/Rules.vue"),
      meta: {
        title: "DUST | Правила",
        public: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@/views/info/About.vue"),
      meta: {
        title: "DUST | О нас",
        public: true
      }
    }
  ])
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(
    record => record.meta.onlyWhenLoggedOut
  );
  // const loggedIn = !!TokenService.getToken();
  const loggedIn = true;

  if (to.path == "/auth/logout") {
    return next("/");
  }

  if (!isPublic && !loggedIn) {
    return next({
      path: "/auth/login",
      query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
    });
  }

  // Do not allow user to visit login page or register page if they are logged in
  if (loggedIn && onlyWhenLoggedOut) {
    return next("/");
  }

  next();
});

router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title : "DUST";
  });
});

export default router;
