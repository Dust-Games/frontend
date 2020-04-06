<template>
  <div id="app">
    <!-- Модалка с входом в аккаунт -->
    <Login />

    <Sidebar class="app__sidebar" />
    <main class="app__main">
      <InDevelopment v-if="showIsInDevelopment && isInDevelopment" />
      <router-view v-else />
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
    InDevelopment: () => import("@components/InDevelopment"),
    Login: () => import("@components/auth/Login"),
  },

  data() {
    return {
      showIsInDevelopment: false as boolean,
    };
  },

  computed: {
    ...mapGetters(["isInDevelopment"]),
  },

  async mounted() {
    // this.showIsInDevelopment = true;
    this.getBalance();
    this.getUser();
  },

  methods: {
    ...mapActions(["getBalance", "getUser"]),
  },
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
