<template>
  <nav class="nav">
    <div
      class="nav__item"
      v-for="(item, index) in items"
      :key="index"
      :active="$route.fullPath == item.path"
      :disabled="item.isDisabled"
      @click="onTo(item.path)"
    >
      {{ item.title }}
    </div>
  </nav>
</template>

<i18n>
{
  "en": {
    "soon": "(soon!)",
    "home": "Main",
    "wallet": "Wallet @:soon",
    "tournaments": "Tournaments @:soon",
    "bets": "Forecasts @:soon",
    "leagues": "Leagues @:soon",
    "lorLeague": "LoR Rate League",
    "premium": "Premium @:soon"
  },
  "ru": {
    "soon": "(скоро!)",
    "home": "Главная",
    "wallet": "Кошелек @:soon",
    "tournaments": "Турниры @:soon",
    "bets": "Прогнозы @:soon",
    "leagues": "Лиги @:soon",
    "lorLeague": "LoR Rate League",
    "premium": "Премиум @:soon"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

export default Vue.extend({
  name: "SidebarNav",

  data() {
    return {
      items: [
        { title: this.$i18n.t("home"), path: "/", isDisabled: false },
        { title: this.$i18n.t("wallet"), path: "/user/wallet", isDisabled: true },
        { title: this.$i18n.t("tournaments"), path: "/user/wallet", isDisabled: true },
        { title: this.$i18n.t("bets"), path: "/user/wallet", isDisabled: true },
        { title: this.$i18n.t("leagues"), path: "/leagues", isDisabled: true },
        { title: this.$i18n.t("lorLeague"), path: "/leagues", isDisabled: false },
        { title: this.$i18n.t("premium"), path: "/leagues", isDisabled: true }
      ]
    };
  },

  methods: {
    ...mapActions(["setIsMobileMenuOpen"]),

    onTo(path: string) {
      this.$router.push(path);
      this.setIsMobileMenuOpen(false);
      console.log(this.$route);
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

    &:not([disabled])[active] {
      color: $orange;
    }
  }
}
</style>
