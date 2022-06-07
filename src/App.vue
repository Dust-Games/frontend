<template>
  <div id="app">
    <!-- Модалка с входом в аккаунт -->
    <LoginModal />
    <RegisterModal />
    <RegisterConfirmWarn />
    <RegisterConfirmSuccess />

    <Sidebar class="app__sidebar" @on-change-language="onChangeLanguage()" />

    <main class="app__main">
      <!-- <InDevelopment v-if="showIsInDevelopment && isInDevelopment" /> -->
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";
import { updateTitle } from "@/helpers/title.helper";

declare module "vue/types/vue" {
  interface Vue {
    $notify: any;
  }

  interface VueConstructor {
    $notify: any;
  }
}

export default Vue.extend({
  name: "App",

  components: {
    Sidebar: () => import("@/components/Sidebar/Index"),
    // InDevelopment: () => import("@components/InDevelopment"),
    LoginModal: () => import("@/components/auth/LoginModal"),
    RegisterModal: () => import("@/components/auth/RegisterModal"),
    RegisterConfirmWarn: () => import("@/components/auth/RegisterConfirmWarn"),
    RegisterConfirmSuccess: () => import("@/components/auth/RegisterConfirmSuccess")
  },

  computed: {
    ...mapGetters(["lang"])
  },

  watch: {
    lang() {
      this.$i18n.locale = this.lang;

      updateTitle(this.$route);
    }
  },

  created() {
    this.fetchLanguage();

    this.$eventBus.$on("login", async () => {
      setTimeout(() => {
        this.$modal.show("login");
      }, 130);
    });
  },

  mounted() {},

  methods: {
    ...mapActions(["changeLanguage", "fetchLanguage"]),

    onChangeLanguage() {
      if (this.lang == "en") {
        this.changeLanguage("ru");
      } else {
        this.changeLanguage("en");
      }
    }
  }
});
</script>

<style lang="scss">
html {
  --white: white;
  --gray-900: #babec1;
  --gray-1000: #81919b;
  --gray-2000: #415663;
  --gray-2500: #151924;
  --black: rgb(17, 19, 27);
  --black-rgb: 17, 19, 27;

  --primary-color: #f12057;
  --primary-color-2000: #54172c;

  // Другие цвета
  --blue-light: #2d9cdb;
  --blue: #557bad;
  --blue-2000: #14233b;
  --blue-dark: #091322;
  --blue-fly: linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%);
  --blue-deep: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
  --blue-steel: #585e92;
  --orange-900: #ffb59f;
  --orange: #e66a41;
  --orange-2000: #6f4132;
  --orange-juice: linear-gradient(90deg, #fc6080 0%, var(--orange) 100%);
  --orange-juice-dark: linear-gradient(90deg, #be3853 0%, #c77126 100%);

  // Красный
  --red-900: #ffb8cb;
  --red-1000: #f12057;
  --red-2000: #54172c;
  --red-2500: #4e1727;
  --red-3000: #44314c;
  --from-black-to-red-vert: linear-gradient(0deg, #4e1727 0%, #242536 100%);
  --from-black-to-red-hor: linear-gradient(90deg, #4e1727 0%, #33243a 100%);
}
</style>

<style lang="scss" scoped>
#app {
  background: $black;
  color: $white;
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 700px) {
    min-height: 100vh;
    height: 100%;

    flex-direction: column;
    justify-content: flex-start;
  }
}

.app {
  &__main {
    width: 100%;
    overflow-y: auto;

    @media (max-width: 700px) {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
