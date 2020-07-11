<template>
  <div class="wallet">
    <h1 class="wallet__title">{{ $t("wallet") }}</h1>

    <div class="wallet__balance">
      <!-- dust коины -->
      <div class="wallet__block">
        <h3 class="wallet__block-title">{{ $t("DUSTtokens") }}</h3>
        <p class="wallet__block-text">
          <i class="wallet__icon icon-dust" />
          <span>{{ balance.dust_coins_num || $t("notFound") }}</span>
        </p>
      </div>
      <!-- доллары -->
      <div class="wallet__block">
        <h3 class="wallet__block-title">{{ $t("USDtokens") }}</h3>
        <p class="wallet__block-text">
          <i class="wallet__icon icon-usd" />
          <span>{{ balance.usd_tokens_num || $t("notFound") }}</span>
        </p>
      </div>
    </div>

    <div class="wallet__trades">
      <RadioButton
        v-for="trade in trades"
        :key="trade.id"
        class="wallet__trades-item"
        :value="trade.id"
        v-model="selectedTradeId"
      >
        {{ $t(trade.id) }}
      </RadioButton>
    </div>

    <div class="wallet__trades-content">
      <!-- eslint-disable-next-line vue-i18n/no-dynamic-keys -->
      <h2>{{ $t(selectedTradeId) }}</h2>
      <p>В разработке.</p>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "wallet": "Wallet",
    "DUSTtokens": "DUST coins",
    "USDtokens": "USD tokens",
    "buyDust": "Buy DUST coins",
    "buyUSD": "Buy USD tokens",
    "sellDust": "Sell DUST coins",
    "sellUSD": "Sell USD tokens",
    "createOrder": "Create order",
    "notFound": "???"
  },
  "ru": {
    "wallet": "Кошелек",
    "DUSTtokens": "DUST коины",
    "USDtokens": "USD токены",
    "buyDust": "Купить DUST коины",
    "buyUSD": "Купить USD токены",
    "sellDust": "Продать DUST коины",
    "sellUSD": "Продать USD токены",
    "createOrder": "Создать ордер",
    "notFound": "???"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "Wallet",

  components: {
    RadioButton: () => import("@ui-components/RadioButton")
  },

  data() {
    return {
      myOrderList: [],
      trades: [{ id: "buyDust" }, { id: "sellDust" }, { id: "buyUSD" }, { id: "sellUSD" }],
      selectedTradeId: "buyDust"
    };
  },

  computed: {
    ...mapGetters(["balance"])
  },

  async mounted() {
    this.myOrderList = await this.getMyOrderList();
    await this.onCreateOrder(5, 10);
  },

  methods: {
    ...mapActions(["getMyOrderList", "createOrder", "closeOrder"]),

    onOpenTrade(value: string) {
      this.selectedTradeId = value;
    },

    async onCreateOrder(amount: number, exchange_rate: number) {
      await this.createOrder();
      this.myOrderList = await this.getMyOrderList({ amount, exchange_rate });
    }
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

  &__trades {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    border: 1px solid $orange;
    border-radius: 30px;
    width: max-content;

    & > * {
      margin: 10px;
    }

    /deep/.ui-radiobutton__slot {
      white-space: nowrap;
    }

    &-content {
      margin-top: 30px;
    }
  }
}
</style>
