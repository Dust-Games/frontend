<template>
  <InfoLayout :component="component" />
</template>

<script lang="ts">
import Vue from "vue";
import ruRules from "@locales/ru/Rules.md";
import enRules from "@locales/en/Rules.md";

export default Vue.extend({
  name: "InfoRules",

  components: {
    InfoLayout: () => import("@layouts/Info")
  },

  computed: {
    component(): string {
      if (this.$i18n.locale == "en") {
        return enRules;
      } else {
        return ruRules;
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
