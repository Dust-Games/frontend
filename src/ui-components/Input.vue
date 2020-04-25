<template>
  <div class="ui-input-wrapper">
    <ValidationProvider :name="name" :rules="rules" v-slot="v">
      <input
        class="ui-input"
        v-model="innerValue"
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        :class="{ error: (v.dirty && v.invalid) || (v.validated && v.invalid) }"
        :style="{
          width: width,
          height: height,
          fontSize: fontSize,
          padding: padding
        }"
      />
      <!-- v-tooltip="errorDescription" -->
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiInput",

  props: {
    value: [String, Number],
    // Для валидации
    rules: [String, Object],
    name: { type: String, default: "" },
    // Остальное
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    // errorDescription: { type: String, default: "" }, // this.$t("error")
    width: { type: String, default: "max-content" },
    height: { type: String, default: "35px" },
    fontSize: { type: String, default: "14px" },
    padding: { type: String, default: "0 32px" },
    disabled: { type: Boolean, default: false }
  },

  computed: {
    innerValue: {
      get(): String | Number {
        return this.value;
      },

      set(value: String | Number) {
        this.$emit("input", value);
      }
    },

    isError(): boolean {
      return false;
      // return this.v && !this.disabled && this.v.$invalid && this.v.$dirty;
    }
  }
});
</script>

<style lang="scss" scoped>
.ui-input {
  border: 1px solid $black;
  color: $white;
  background: $blue-dark;

  &::placeholder {
    color: $gray;
    opacity: 1;
  }

  &.error {
    border-color: $red;
  }
}
</style>
