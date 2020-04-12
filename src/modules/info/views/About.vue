<template>
  <Layout>
    <template #title>{{ $t("about") }}</template>
    <template #content>
      <component :is="componentName" />
    </template>
  </Layout>
</template>

<i18n>
{
  "en": {
    "about": "About"
  },
  "ru": {
    "about": "О нас"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import ruAbout from "@locales/ru/About.md";
import enAbout from "@locales/en/About.md";

export default Vue.extend({
  name: "InfoAbout",

  components: {
    ruAbout,
    enAbout,
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
.about {
  text-align: left;
  padding: 40px;
  &__title {
    text-transform: uppercase;
  }
}
</style>
