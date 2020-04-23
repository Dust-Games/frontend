<template>
  <div>Авторизируем соцсеть...</div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "CommonRegisterAccounLink",

  async mounted() {
    try {
      const url = this.$route.fullPath || null;
      this.setAccount(url);
    } catch (errors) {
      // console.log(errors)
    }
  },

  methods: {
    ...mapActions(["login", "getBalance", "setAccount"])
  }
});
</script>
