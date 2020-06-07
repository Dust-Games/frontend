<template>
  <details class="storybook__block">
    <summary class="storybook__title">Чекбокс, отдает массив (CheckboxArray)</summary>
    <p>{{ exampleItems }}</p>

    <div class="storybook__block-inner">
      <CheckboxArray :value="exampleValue" v-model="exampleItems" />
      <CheckboxArray :value="exampleValue + 11" v-model="exampleItems">
        кастомное название ghgh11
      </CheckboxArray>
      <CheckboxArray :value="exampleValue + 22222222" v-model="exampleItems" />
    </div>
  </details>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiCheckboxAdvancedExample",

  components: {
    CheckboxArray: () => import("@ui-components/CheckboxArray")
  },

  data() {
    return {
      exampleValue: "ghgh" as string,
      exampleItems: [] as Array<any>
    };
  }
});
</script>
