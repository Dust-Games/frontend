<template>
  <div class="sidebar-wrapper">
    <!-- Большой экран -->
    <div class="sidebar" v-if="windowWidth > 700">
      <div class="sidebar__logo"><img src="@/assets/images/logo.png" /></div>
      <User class="sidebar__user" />
      <Nav class="sidebar__nav" />
      <Footer class="sidebar__footer" @onChangeLanguage="onChangeLanguage" />
    </div>

    <!-- Маленький экран -->
    <Mobile class="sidebar__mobile" v-else />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sidebar",

  components: {
    User: () => import("./User"),
    Nav: () => import("./Nav"),
    Footer: () => import("./Footer.vue"),
    Mobile: () => import("./Mobile")
  },

  data() {
    return {
      windowWidth: window.innerWidth
    };
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },

  methods: {
    onChangeLanguage() {
      this.$emit("onChangeLanguage");
    }
  }
});
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;

  padding: 30px;
  background: $primary-color;
  width: 276px;
  height: 100vh;

  &__mobile {
    flex-direction: row;
  }

  &__logo {
    margin-right: -5px;

    & > * {
      height: 40px;
      width: 158px;
    }
  }

  &__user {
    margin-top: 40px;
  }

  &__nav {
    flex: 1;
    margin-top: 40px;
  }

  &__footer {
    margin-top: 20px;
  }
}

@media (max-width: 700px) {
  #app {
    flex-direction: column;
  }
}
</style>
