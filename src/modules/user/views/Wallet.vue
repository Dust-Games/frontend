<template>
  <div class="wallet">
    <p>Кошелек</p>
    <p>Баланс: {{ balance }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Wallet",

  computed: {
    ...mapGetters(["balance"])
  }
});
</script>

<style lang="scss" scoped>
.wallet {
}
</style>
