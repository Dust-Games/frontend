<template>
  <div>
    <CheckboxAdvanced :value="exampleValue" :items="exampleItems">
      fgfg
    </CheckboxAdvanced>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiCheckboxAdvancedExample",

  components: {
    CheckboxAdvanced: () => import("@ui-components/CheckboxAdvanced")
  },

  data() {
    return {
      exampleValue: "ghgh",
      exampleItems: []
    };
  },

  props: {
    // Значение для выбора
    value: { type: Boolean, default: false },
    items: { type: Array, required: true },
    bold: { type: Boolean, default: false },
    disabled: { type: Boolean, default: false },
    // Для валидации
    rules: [String, Object],
    name: { type: String, default: "" }
  },

  computed: {
    innerValue: {
      get(): boolean {
        return this.value;
      },

      set(value: boolean) {
        this.$emit("input", value);
      }
    }
  }
});
</script>
