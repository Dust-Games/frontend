<template>
  <div class="info-layout">
    <h1 class="info-layout__title"><slot name="title" /></h1>
    <div class="info-layout__content"><slot name="content" /></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InfoLayout"
});
</script>

<style lang="scss" scoped>
.info-layout {
  color: $white;

  /deep/a {
    color: $white;
  }

  &__content {
    padding-top: 10px;
    padding-bottom: 50px;
  }
}
</style>
