<template>
  <div class="ui-input-wrapper">
    <input class="ui-input" v-model="value" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: "UiInput",

  props: {
    value: [String, Number],
  },
});
</script>

<style lang="scss" scoped>
.ui-input {
  color: $white;
}
</style>
