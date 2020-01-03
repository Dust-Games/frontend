<template>
  <div class="in-development">
    <span class="in-development__text">В разработке.</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'InDevelopment',
});
</script>

<style lang="scss" scoped>
.in-development {
  color: $white;
  width: 100%;
  height: 100vh;

  &__text {
    box-shadow: 0 0 0 200px rgba($black, 0.4);
  }
}
</style>
