<template>
  <div class="info-layout">
    <div class="info-layout__title"><slot name="title" /></div>
    <div class="info-layout__content"><slot name="content" /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InfoLayout",
});
</script>

<style lang="scss" scoped>
.info-layout {
  color: $white;

  &__title {
  }
}
</style>
