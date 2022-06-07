<template>
  <InfoLayout :component="component" />
</template>

<script lang="ts">
import Vue from "vue";
import ruAbout from "@locales/ru/About.md";
import enAbout from "@locales/en/About.md";

export default Vue.extend({
  name: "InfoAbout",

  components: {
    InfoLayout: () => import("@layouts/Info")
  },

  computed: {
    component(): string {
      if (this.$i18n.locale == "en") {
        return enAbout.toString();
      } else {
        return ruAbout.toString();
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
