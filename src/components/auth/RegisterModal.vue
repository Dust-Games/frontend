<template>
  <AuthModal
    modalName="register"
    :sizes="{ maxWidth: windowWidth > 660 ? 630 : 310 }"
    :clickToClose="false"
    @before-open="beforeOpen"
    @before-close="beforeClose"
  >
    <Register @hide="hide()" />
  </AuthModal>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "AuthRegisterModal",

  components: {
    AuthModal: () => import("@layouts/AuthModal"),
    Register: () => import("./Register")
  },

  data() {
    return {
      windowWidth: window.innerWidth
    };
  },

  mounted() {
    window.addEventListener("resize", this.getWindowWidth);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowWidth);
  },

  methods: {
    getWindowWidth() {
      this.windowWidth = window.innerWidth;
    },

    hide() {
      this.$modal.hide("register");
    },

    beforeOpen(event: any) {},

    beforeClose() {}
  }
});
</script>
