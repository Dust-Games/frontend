<template>
  <div>
    Таблица!
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiTable",

  props: {
    header: { type: Object, default: () => ({}) },
    rows: { type: Array, default: () => [] }
  }
});
</script>
