<template>
  <details class="storybook__block">
    <summary class="storybook__title">Чекбокс (Checkbox)</summary>
    <p>{{ exampleValue }}</p>

    <div class="storybook__block-inner">
      <Checkbox v-model="exampleValue">Выбери меня</Checkbox>
    </div>
  </details>
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
