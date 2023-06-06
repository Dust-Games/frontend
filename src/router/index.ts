import { createWebHistory, createRouter } from 'vue-router';
import { getRouteTitle } from '@/helpers/route.helper';
import i18n from "@/i18n/index";

import MainIndex from '@/modules/main/views/Index.vue';
import InfoAbout from "@/modules/info/About.vue"
import InfoTeam from "@/modules/info/Team.vue"

const routes = [
    
    {
      path: '/info',
      children: [
        {
          path: "",
          redirect: { name: "About" }
        },
        {
          path: 'about',
          name: "About",
          component: InfoAbout,
          meta: {
            titleForI18n: "About"
          }
        },
        {
          path: 'team',
          name: "Team",
          component: InfoTeam,
          meta: {
            titleForI18n: "Team"
          }
        },
      ],
    },

    {
      path: '/',
      name: 'MainIndex',
      component: MainIndex,
      meta: {
        titleForI18n: "Main"
      }
    },

];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.afterEach((to, from) => {
  document.title = getRouteTitle(to.meta, i18n.global.t)
});

export default router;
