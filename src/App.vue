<template>
  <div id="app">
    <Header class="app__header" />
    <div class="app__content">
      <Sidebar class="app__sidebar" />
      <main class="app__main">
        <!-- <div v-click-outside="hide" /> -->
        <InDevelopment v-if="showIsInDevelopment && isInDevelopment" />
        <router-view v-else />
      </main>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import ClickOutside from "vue-click-outside";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "App",

  components: {
    Header: () => import("@components/Header/Header.vue"),
    Sidebar: () => import("@components/Sidebar.vue"),
    InDevelopment: () => import("@components/InDevelopment")
  },

  // directives: {
  //   ClickOutside
  // },

  data() {
    return {
      showIsInDevelopment: new Boolean()
    };
  },

  computed: {
    ...mapGetters(["isInDevelopment"])
  },

  methods: {
    ...mapActions(["getBalance", "getUser"])

    // hide() {
    //   this.showIsInDevelopment = false;
    // }
  },

  mounted() {
    // this.showIsInDevelopment = true;
    this.getBalance();
    this.getUser();
  }
});
</script>

<style lang="scss">
#app {
  text-align: center;
  background: $gray-darkest;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.app {
  &__content {
    flex: 2;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  &__sidebar {
    // position: fixed;
  }

  &__main {
    flex: 2;
  }
}
</style>
