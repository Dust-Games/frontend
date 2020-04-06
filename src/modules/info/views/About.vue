<template>
  <div class="about">
    <h1 class="about__title">{{ $t("about") }}</h1>
    <component :is="$i18n.locale == 'en' ? 'enAbout' : 'ruAbout'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ruAbout from "@locales/largeTexts/ruAbout.md";
import enAbout from "@locales/largeTexts/enAbout.md";

export default Vue.extend({
  name: "About",

  components: {
    ruAbout,
    enAbout,
  },
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
