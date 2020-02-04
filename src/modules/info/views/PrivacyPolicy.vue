<template>
  <div class="rules">
    <h1 class="rules__title">{{ $t("rules") }}</h1>
    <component :is="$i18n.locale == 'en' ? 'enRules' : 'ruRules'" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ruRules from "@locales/largeTexts/ruRules.md";
import enRules from "@locales/largeTexts/enRules.md";

export default Vue.extend({
  name: "Rules",

  components: {
    ruRules,
    enRules
  }
});
</script>

<style lang="scss" scoped>
.rules {
  color: $white;
  text-align: left;
  padding: 30px;
  max-width: 1080px;
  margin: 0 auto;

  &__title {
    text-transform: uppercase;
  }
}
</style>
