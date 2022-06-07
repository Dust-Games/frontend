<template>
  <div class="sidebar">
    <div class="sidebar__logo" @click="goToMain()">
      <img src="@/assets/images/logo-new.svg" />
    </div>
    <User class="sidebar__user" />
    <Nav class="sidebar__nav" />
    <Footer class="sidebar__footer" @on-change-language="$emit('on-change-language')" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sidebar_IndexLarge",

  components: {
    User: () => import("./User"),
    Nav: () => import("./Nav"),
    Footer: () => import("./Footer.vue")
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
    goToMain() {
      this.$router.push("/");
    }
  }
});
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;

  padding: 30px;
  background: $from-black-to-red-vert;
  width: 283px;
  height: 100vh;

  &__logo {
    margin: -5px -30px;
    padding: 8px 30px 5px;
    background: transparent;

    & > * {
      height: 40px;
      width: 158px;
    }

    &:hover {
      cursor: pointer;
      transition: 0.3s;
      background: $from-black-to-red-hor;
    }
  }

  &__user {
    margin-top: 30px;
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
