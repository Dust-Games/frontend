import Vue from "vue";
import VueRouter from "vue-router";
// import { TokenService } from "../services/auth.service";
import store from "@store/index";

Vue.use(VueRouter);

const withPrefix = (prefix: any, routes: any) =>
  routes.map((route: any) => {
    route.path = prefix + route.path;
    return route;
  });

const routes = [
  // То, что не относится к другим модулям
  {
    path: "/",
    name: "home",
    component: () => import("@modules/common/views/Home.vue"),
    meta: {
      title: "Главная",
      public: true
    }
  },
  {
    path: "/home",
    redirect: "/"
  },

  // Всё, что касается пользователя - профиль, кошелек
  ...withPrefix("/user", [
    {
      path: "/wallet",
      name: "wallet",
      component: () => import("@modules/user/views/Wallet.vue"),
      meta: {
        title: "Кошелек"
      }
    }
    // {
    //   path: "/profile",
    //   name: "profile",
    //   component: () => import("@modules/user/views/Profile.vue"),
    //   meta: {
    //     title: "DUST | Профиль"
    //   }
    // }
  ]),

  // Справочная информация
  ...withPrefix("/info", [
    {
      path: "/rules",
      name: "rules",
      component: () => import("@modules/info/views/Rules.vue"),
      meta: {
        title: "Правила",
        public: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: () => import("@modules/info/views/About.vue"),
      meta: {
        title: "О нас",
        public: true
      }
    },
    {
      path: "/contacts",
      name: "contacts",
      component: () => import("@modules/info/views/Contacts.vue"),
      meta: {
        title: "Контакты",
        public: true
      }
    },
    {
      path: "/team",
      name: "team",
      component: () => import("@modules/info/views/Team.vue"),
      meta: {
        title: "Наша команда",
        public: true
      }
    }
  ]),

  // Страница "Не найдено"
  {
    path: "*",
    name: "not-found",
    component: () => import("@modules/other/views/NotFound.vue"),
    meta: {
      title: "Не найдено",
      public: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (localStorage.getItem("user-token")) {
    store.dispatch("setToken", localStorage.getItem("user-token"));
  }

  const isPublic = to.matched.some(record => record.meta.public);
  const onlyWhenLoggedOut = to.matched.some(record => record.meta.onlyWhenLoggedOut);

  // const loggedIn = !!TokenService.getToken();
  // const loggedIn = !!localStorage.getItem("user-token");
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
    document.title = to.meta.title ? to.meta.title + " | DUST" : "DUST";
  });
});

export default router;
