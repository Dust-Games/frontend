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

  {
    path: "/oauth/:accountName/:type/callback",
    name: "accountLink",
    component: () => import("@modules/user/views/AccountLink.vue"),
    meta: {
      title: (route: any) => `Авторизация соцсети через ${route.params.accountName}`,
      public: true
    }
  },

  // Всё, что касается пользователя - профиль, кошелек
  ...withPrefix("/user", [
    {
      path: "/wallet",
      name: "userWallet",
      component: () => import("@modules/user/views/Wallet.vue"),
      meta: {
        title: "Кошелек"
      }
    },
    {
      path: "/profile",
      name: "userProfile",
      component: () => import("@modules/user/views/Profile.vue"),
      meta: {
        title: "DUST | Профиль"
      }
    }
  ]),

  // Справочная информация
  ...withPrefix("/info", [
    {
      path: "/rules",
      name: "infoRules",
      component: () => import("@modules/info/views/Rules.vue"),
      meta: {
        title: "Правила",
        public: true
      }
    },
    {
      path: "/about",
      name: "infoAbout",
      component: () => import("@modules/info/views/About.vue"),
      meta: {
        title: "О нас",
        public: true
      }
    },
    {
      path: "/contacts",
      name: "infoContacts",
      component: () => import("@modules/info/views/Contacts.vue"),
      meta: {
        title: "Контакты",
        public: true
      }
    },
    {
      path: "/team",
      name: "infoTeam",
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
  const isLogged = localStorage.getItem("access_token");
  const isPublic = to.matched.some(record => record.meta.public);

  if (to.path == "/auth/logout") {
    return next("/");
  }

  if (!isPublic && !isLogged) {
    return next({
      path: "/auth/login",
      query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
    });
  }

  next();
});

router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title + " | DUST" : "DUST";
  });
});

export default router;
