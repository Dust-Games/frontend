export default [
  {
    path: "/",
    name: "leaguesMain",
    component: () => import("@modules/leagues/views/Main.vue"),
    meta: {
      title: "Лиги",
      public: true
    }
  },

  {
    path: "/rules",
    name: "leaguesRules",
    component: () => import("@modules/leagues/views/Rules.vue"),
    meta: {
      title: "Регламент лиги",
      public: true
    }
  }
];
