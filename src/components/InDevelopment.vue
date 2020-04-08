<template>
  <div class="in-development">
    <span class="in-development__text">{{ $t("inDevelopment") }}</span>
  </div>
</template>

<i18n>
{
  "en": {
    "inDevelopment": "In development",
  },
  "ru": {
    "inDevelopment": "В разработке",
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InDevelopment",
});
</script>

<style lang="scss" scoped>
.in-development {
  width: 100%;
  height: 100vh;

  &__text {
    box-shadow: 0 0 0 200px rgba($black, 0.4);
  }
}
</style>
