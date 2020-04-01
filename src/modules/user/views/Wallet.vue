<template>
  <div class="wallet">
    <h1 class="wallet__title">{{ $t("wallet") }}</h1>
    <div class="wallet__balance">
      <div class="wallet__balance-dust">
        DUST coins: {{ balance.dustCoins }}
      </div>
      <div class="wallet__balance-ruble">
        {{ $t("rubles") }}: {{ balance.rubles }}
      </div>
    </div>
    <div class="wallet__action-wrapper">
      <Button class="wallet__action">{{ $t("toppingUp") }}</Button>
      <Button class="wallet__action">{{ $t("buy") }} DC</Button>
      <Button class="wallet__action">{{ $t("sell") }} DC</Button>
      <Button class="wallet__action">{{ $t("withdraw") }}</Button>
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
  margin: 50px;

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

  &__title {
    color: $white;
  }

  &__balance {
    color: $white;
  }
}
</style>
