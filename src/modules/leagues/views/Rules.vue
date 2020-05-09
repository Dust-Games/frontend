<template>
  <Layout>
    <template #title>{{ $t("rules") }}</template>

    <template #content>
      <Button theme="blue-steel" @click.prevent="toLeague()">{{ $t("back") }}</Button>
      <component :is="componentName" />
    </template>
  </Layout>
</template>

<i18n>
{
  "en": {
    "rules": "League rules",
    "back": "Back to league"
  },
  "ru": {
    "rules": "Регламент лиги",
    "back": "Назад к лиге"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import ruLeagueRules from "@locales/ru/LeagueRules.md";
import enLeagueRules from "@locales/en/LeagueRules.md";

export default Vue.extend({
  name: "LeagueRules",

  components: {
    ruLeagueRules,
    enLeagueRules,
    Layout: () => import("@layouts/Info"),
    Button: () => import("@ui-components/Button")
  },

  computed: {
    componentName(): string {
      if (this.$i18n.locale == "en") {
        return "enLeagueRules";
      } else {
        return "ruLeagueRules";
      }
    }
  },

  methods: {
    toLeague() {
      this.$router.push("/leagues");
    }
  }
});
</script>

<style lang="scss" scoped>
.about {
  text-align: left;
  padding: 40px;
  &__title {
    text-transform: uppercase;
  }
}
</style>
