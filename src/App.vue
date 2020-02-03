<template>
  <div id="app">
    <Header class="app__header" />
    <main class="app__content">
      <div v-click-outside="hide" />
      <InDevelopment v-if="showIsInDevelopment && isInDevelopment" />
      <router-view v-else />
    </main>
    <Footer class="app__footer" />
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
    InDevelopment: () => import("@components/InDevelopment"),
    Footer: () => import("@components/Footer.vue")
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
    ...mapActions(["getBalance"]),

    hide() {
      this.showIsInDevelopment = false;
    }
  },

  mounted() {
    this.showIsInDevelopment = true;
    this.getBalance();
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
  }
}
</style>
