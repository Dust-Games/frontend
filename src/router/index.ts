import Vue from "vue";
import VueRouter, { Route } from "vue-router";
import { updateTitle } from "@/helpers/title.helper";
import { eventBus } from "@/plugins/EventBus.plugin";
import AuthService from "@/services/auth.service";

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
      title: "Main",
      public: true
    }
  },

  {
    path: "/home",
    redirect: "/"
  },

  // Всё, что касается пользователя - профиль, кошелек
  ...withPrefix("/leagues", leagues),

  // {
  //   path: "/oauth/:accountName/:type/callback",
  //   name: "AccountLink",
  //   component: () => import("@modules/user/views/AccountLink.vue"),
  //   meta: {
  //     title: "Social network auth",
  //     public: true
  //   }
  // },

  // {
  //   path: "/oauth/:accountName/bind/:callback",
  //   name: "AccountLinkBind",
  //   component: () => import("@modules/user/views/AccountLink.vue"),
  //   meta: {
  //     title: "Social network auth",
  //     public: true
  //   }
  // },

  ...withPrefix("/auth", [
    {
      path: "/",
      redirect: "/auth/login"
    },
    {
      path: "/login",
      name: "AuthLogin",
      meta: {
        title: "Login",
        public: true
      },
      beforeEnter: (to: Route, from: Route, next: any) => {
        next({ name: "home" });

        setTimeout(() => {
          eventBus.$emit("login");
        }, 1);
      }
    },
    {
      path: "/login-soc-network-confirm/:callback",
      name: "AuthLoginSocNetworkConfirm",
      meta: {
        title: "Login via soc network",
        public: true
      },
      component: () => import("@modules/auth/views/LoginSocNetworkConfirm.vue")

      // beforeEnter: (to: Route, from: Route, next: any) => {
      //   window.addEventListener("beforeunload", () => {
      //     // Connection to a broadcast channel
      //     const bc = new BroadcastChannel("callback");
      //     // Example of sending of a very simple message
      //     bc.postMessage("callback-success");
      //   });

      //   next({ name: "home" });
      // }
    }
    // {
    //   path: "/register",
    //   name: "authRegister",
    //   component: () => import("@/modules/auth/views/Register"),
    //   meta: {
    //     title: "Register",
    //     public: true
    //   }
    // }
  ]),

  // Всё, что касается пользователя - профиль, кошелек
  ...withPrefix("/user", [
    {
      path: "/wallet",
      name: "UserWallet",
      component: () => import("@modules/user/views/Wallet.vue"),
      meta: {
        title: "Wallet"
      }
    },
    {
      path: "/profile",
      name: "UserProfile",
      component: () => import("@modules/user/views/Profile.vue"),
      meta: {
        title: "Profile"
      }
    },
    {
      path: "/cards",
      name: "userCards",
      component: () => import("@modules/user/views/Cards.vue"),
      meta: {
        title: "Cards"
      }
    }
  ]),

  // Справочная информация
  ...withPrefix("/info", info),

  // Страница "Не найдено"
  {
    path: "*",
    name: "not-found",
    component: () => import("@modules/other/views/NotFound.vue"),
    meta: {
      title: "Страница не найдена",
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
  const isLogged = AuthService.checkToken();
  const isPublic = to.matched.some(record => record.meta.public);

  // console.log({ isLogged, isPublic, to });

  // console.log(isPublic, isLogged, to, from);
  // if (to.path == "/auth/logout") {
  //   return next("/");
  // }

  if (!isPublic && !isLogged) {
    return next({
      path: "/home",
      query: { redirect: to.fullPath } // Store the full path to redirect the user to after login
    });
  }

  next();
});

router.afterEach(to => {
  updateTitle(to);
});

export default router;
