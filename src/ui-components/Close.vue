<template>
  <div class="close">
    <i class="icon-close" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "uiClose",
});
</script>

<style lang="scss" scoped>
.close {
  width: max-content;
  padding: 8px;
  @include linkHover;

  &:hover {
    transform: rotate(90deg);
  }
}
</style>
