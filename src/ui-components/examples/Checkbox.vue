<template>
  <div>
    <p>{{ exampleValue }}</p>

    <Checkbox v-model="exampleValue">Выбери меня</Checkbox>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiCheckboxAdvancedExample",

  components: {
    Checkbox: () => import("@ui-components/Checkbox")
  },

  data() {
    return {
      exampleValue: false as boolean
    };
  }
});
</script>
