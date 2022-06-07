export default [
  {
    path: "/rules",
    name: "infoRules",
    component: () => import("@modules/info/views/Rules.vue"),
    meta: {
      title: "Rules",
      public: true
    }
  },
  {
    path: "/about",
    name: "infoAbout",
    component: () => import("@modules/info/views/About.vue"),
    meta: {
      title: "About",
      public: true
    }
  },
  {
    path: "/contacts",
    name: "infoContacts",
    component: () => import("@modules/info/views/Contacts.vue"),
    meta: {
      title: "Contacts",
      public: true
    }
  },
  {
    path: "/team",
    name: "infoTeam",
    component: () => import("@modules/info/views/Team.vue"),
    meta: {
      title: "Our team",
      public: true
    }
  }
];
