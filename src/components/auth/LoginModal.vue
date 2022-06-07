<template>
  <AuthModal modalName="login" :sizes="{ width: '400px' }" :clickToClose="false">
    <Login @hide="hide()" />
  </AuthModal>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AuthLoginModal",

  components: {
    AuthModal: () => import("@layouts/AuthModal"),
    Login: () => import("./Login")
  },

  methods: {
    show() {
      this.$modal.show("login");
    },

    hide() {
      this.$modal.hide("login");
    }
  }
});
</script>
