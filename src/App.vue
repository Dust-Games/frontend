<template>
  <div id="app">
    <!-- Модалка с входом в аккаунт -->
    <Login />
    <Register />

    <Sidebar class="app__sidebar" @onChangeLanguage="onChangeLanguage" />
    <main class="app__main">
      <!-- <InDevelopment v-if="showIsInDevelopment && isInDevelopment" /> -->
      <router-view />
    </main>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "App",

  components: {
    Sidebar: () => import("@components/Sidebar/Index.vue"),
    // InDevelopment: () => import("@components/InDevelopment"),
    Login: () => import("@components/auth/Login"),
    Register: () => import("@components/auth/Register")
  },

  methods: {
    onChangeLanguage() {
      if (this.$i18n.locale == "en") {
        this.$i18n.locale = "ru";
      } else {
        this.$i18n.locale = "en";
      }
    }
  }
});
</script>

<style lang="scss" scoped>
#app {
  background: $black;
  color: $white;
  min-height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.app {
  &__main {
    width: 100%;
    margin: 60px;
  }
}

@media (max-width: 700px) {
  #app {
    flex-direction: column;
    justify-content: flex-start;
  }

  .app {
    &__main {
      margin: 40px;
      width: calc(100% - 40px);
    }
  }
}
</style>
