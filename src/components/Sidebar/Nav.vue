<template>
  <nav class="nav">
    <div class="nav__item" @click="onToHome()">{{ $t("menu") }}</div>
    <div class="nav__item" @click="onToWallet()">{{ $t("wallet") }}</div>

    <div class="nav__item" disabled>{{ $t("tournaments") }}</div>
    <div class="nav__item" disabled>{{ $t("bets") }}</div>
    <div class="nav__item" disabled>{{ $t("leagues") }}</div>
    <div class="nav__item" disabled>{{ $t("premium") }}</div>
  </nav>
</template>

<i18n>
{
  "en": {
    "menu": "Main",
    "wallet": "Wallet",
    "tournaments": "Tournaments (soon!)",
    "bets": "Bets (soon!)",
    "leagues": "Leagues (soon!)",
    "premium": "Premium (soon!)"
  },
  "ru": {
    "menu": "Главная",
    "wallet": "Кошелек",
    "tournaments": "Турниры (скоро!)",
    "bets": "Ставки (скоро!)",
    "leagues": "Лиги (скоро!)",
    "premium": "Премиум (скоро!)"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SidebarNav",

  methods: {
    onToHome() {
      this.$router.push("/home");
      this.$emit("change");
    },

    onToWallet() {
      this.$router.push("/user/wallet");
      this.$emit("change");
    }
  }
});
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    color: $white;
    font-size: 18px;

    & + & {
      padding-top: 20px;
    }

    &:hover {
      transition: 0.3s;
      cursor: pointer;
      color: $light-blue;
    }

    &[disabled] {
      color: $gray-dark;
      pointer-events: none;
    }
  }
}
</style>
