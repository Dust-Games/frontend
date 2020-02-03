<template>
  <div class="wallet">
    <p>{{ $t("wallet") }}</p>
    <p>{{ $t("balance") }}: {{ balance }}</p>
    <div class="wallet__action-wrapper">
      <Button class="wallet__action">Пополнить</Button>
      <Button class="wallet__action">Купить DC</Button>
      <Button class="wallet__action">Продать DC</Button>
      <Button class="wallet__action">Вывести</Button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Wallet",

  components: {
    Button: () => import("@ui-components/Button")
  },

  computed: {
    ...mapGetters(["balance"])
  }
});
</script>

<style lang="scss" scoped>
.wallet {
  &__action {
    max-width: 100px;

    & + & {
      margin-top: 10px;
    }

    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
}
</style>
