<template>
  <nav class="nav">
    <div class="nav__item" @click="onToHome()" v-tooltip="'546456465'">{{ $t("menu") }}</div>

    <div class="nav__item" disabled>{{ $t("wallet") }}</div>
    <!-- @click="onToWallet()" -->
    <div class="nav__item" disabled>{{ $t("tournaments") }}</div>
    <div class="nav__item" disabled>{{ $t("bets") }}</div>
    <div class="nav__item" disabled>{{ $t("leagues") }}</div>
    <div class="nav__item" disabled>{{ $t("premium") }}</div>
  </nav>
</template>

<i18n>
{
  "en": {
    "soon": "(soon!)",
    "menu": "Main",
    "wallet": "Wallet",
    "tournaments": "Tournaments @:soon",
    "bets": "Bets @:soon",
    "leagues": "Leagues @:soon",
    "premium": "Premium @:soon"
  },
  "ru": {
    "soon": "(скоро!)",
    "menu": "Главная",
    "wallet": "Кошелек @:soon",
    "tournaments": "Турниры @:soon",
    "bets": "Ставки @:soon",
    "leagues": "Лиги @:soon",
    "premium": "Премиум @:soon"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "SidebarNav",

  methods: {
    ...mapActions(["setIsMobileMenuOpen"]),

    onToHome() {
      this.$router.push("/home");
      this.onChange();
    },

    onToWallet() {
      this.$router.push("/user/wallet");
      this.onChange();
    },

    onChange() {
      this.setIsMobileMenuOpen(false);
    }
  }
});
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    font-size: 18px;

    & + & {
      padding-top: 20px;
    }

    @include linkHover;

    &[disabled] {
      color: $gray-dark;
      pointer-events: none;
    }
  }
}
</style>
