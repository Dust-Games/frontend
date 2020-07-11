<template>
  <div class="wallet">
    <h1 class="wallet__title">{{ $t("wallet") }}</h1>

    <div class="wallet__balance">
      <!-- dust коины -->
      <div class="wallet__block">
        <h3 class="wallet__block-title">{{ $t("DUSTtokens") }}</h3>
        <p class="wallet__block-text">
          <i class="wallet__icon icon-dust" />
          <span>{{ balance.dust_coins_num }}</span>
        </p>
      </div>
      <!-- доллары -->
      <div class="wallet__block">
        <h3 class="wallet__block-title">{{ $t("USDtokens") }}</h3>
        <p class="wallet__block-text">
          <i class="wallet__icon icon-usd" />
          <span>{{ balance.usd_tokens_num }}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "wallet": "Wallet",
    "DUSTtokens": "DUST coins",
    "USDtokens": "USD tokens"
  },
  "ru": {
    "wallet": "Кошелек",
    "DUSTtokens": "DUST коины",
    "USDtokens": "USD токены"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Wallet",

  components: {
    // Button: () => import("@ui-components/Button")
  },

  computed: {
    ...mapGetters(["balance"])
  }
});
</script>

<style lang="scss" scoped>
.wallet {
  // &__action {
  //   max-width: 100px;

  //   & + & {
  //     margin-top: 10px;
  //   }

  //   &-wrapper {
  //     display: flex;
  //     flex-direction: column;
  //     align-items: center;
  //   }
  // }

  &__balance {
    display: flex;
    flex-direction: row;
  }

  &__block {
    background: $primary-color;
    color: $white;
    padding: 20px;
    margin: 0 30px 30px 0;
    border-radius: 6px;
    width: min-content;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    &-title {
      margin: 0;
      margin-bottom: 15px;
      white-space: nowrap;
      font-size: 18px;
    }

    &-text {
      margin: 0;
      font-size: 36px;
      font-weight: bold;

      display: flex;
      align-items: center;

      & > * + * {
        margin-left: 15px;
      }
    }
  }

  &__icon {
    font-size: 28px;
  }
}
</style>
