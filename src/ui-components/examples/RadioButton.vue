<template>
  <details class="storybook__block">
    <summary class="storybook__title">Радио кнопка (RadioButton)</summary>
    <p>{{ exampleSelectedItem }}</p>

    <div class="storybook__block-inner">
      <RadioButton :value="exampleValue" v-model="exampleSelectedItem" />
      <RadioButton :value="exampleValue + 11" v-model="exampleSelectedItem">
        кастомное название ghgh11
      </RadioButton>
      <RadioButton :value="exampleValue + 22222222" v-model="exampleSelectedItem" />
    </div>
  </details>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiCheckboxAdvancedExample",

  components: {
    RadioButton: () => import("@ui-components/RadioButton")
  },

  data() {
    return {
      exampleValue: "ghgh" as string,
      exampleSelectedItem: null as string | null
    };
  }
});
</script>
