<template>
  <Layout>
    <template #title>{{ $t("rules") }}</template>
    <template #content>
      <component :is="componentName" />
    </template>
  </Layout>
</template>

<i18n>
{
  "en": {
    "rules": "Rules"
  },
  "ru": {
    "rules": "Правила"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import ruRules from "@locales/ru/Rules.md";
import enRules from "@locales/en/Rules.md";

export default Vue.extend({
  name: "InfoRules",

  components: {
    ruRules,
    enRules,
    Layout: () => import("../layouts/Info")
  },

  computed: {
    componentName(): string {
      if (this.$i18n.locale == "en") {
        return "enAbout";
      } else {
        return "ruAbout";
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.rules {
  text-align: left;
  padding: 40px;
  // max-width: 1080px;
  // margin: 0 auto;

  &__title {
    text-transform: uppercase;
  }
}
</style>
