import Vue from "vue";
import VueRouter from "vue-router";
// import { TokenService } from "../services/auth.service";
import store from "@store/index";

import leagues from "./leagues";
import info from "./info";

const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = async function push(location: any) {
  try {
    return await originalPush.call(this, location);
  } catch (err) {
    return err;
  }
};

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
  ...withPrefix("/leagues", leagues),

  {
    path: "/oauth/:accountName/:type/callback",
    name: "accountLink",
    component: () => import("@modules/user/views/AccountLink.vue"),
    meta: (route: any) => ({
      title: "Авторизация соцсети через " + route.params.accountName,
      public: true
    })
  },

  {
    path: "/oauth/:accountName/bind/:callback",
    name: "accountLinkBind",
    component: () => import("@modules/user/views/AccountLink.vue"),
    meta: (route: any) => ({
      title: "Авторизация соцсети через " + route.params.accountName,
      public: true
    })
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
  ...withPrefix("/info", info),

  // Страница "Не найдено"
  {
    path: "/examples",
    name: "examples",
    component: () => import("@ui-components/examples/Index"),
    meta: {
      title: "UI-компоненты",
      public: true
    }
  },

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
  if (from.fullPath === to.fullPath) {
    return;
  }

  const isLogged = localStorage.getItem("access_token") || false;
  const isPublic = to.matched.some(record => record.meta.public);

  // console.log(isPublic, isLogged, to, from);
  // if (to.path == "/auth/logout") {
  //   return next("/");
  // }

  // if (!isPublic && !isLogged) {
  //   return next({
  //     path: "/home",
  //     query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
  //   });
  // }

  next();
});

router.afterEach(to => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? to.meta.title + " | DUST" : "DUST";
  });
});

export default router;
