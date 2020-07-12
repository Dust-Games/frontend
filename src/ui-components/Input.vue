<template>
  <div class="ui-input-wrapper" :style="{ width: width, height: height }">
    <ValidationProvider :name="name" :rules="rules" v-slot="v" :vid="vid">
      <input
        class="ui-input"
        v-model="innerValue"
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        :class="[{ error: (v.dirty && v.invalid) || (v.validated && v.invalid) }, theme]"
        :style="{
          width: '100%',
          height: '100%',
          fontSize: fontSize,
          padding: padding
        }"
      />
      <!-- v-tooltip="errorDescription" -->
    </ValidationProvider>

    <slot />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import { extend } from "vee-validate";

// extend("confirmed", {
//   params: ["otherValue"],
//   validate: (value: any, { otherValue }: any) => {
//     console.log(value, otherValue);
//     if (value == otherValue) {
//       return true;
//     }
//     return false;
//   },
//   message: "Поле {_field_} должно быть такое же, как поле {_field_}"
// });

export default Vue.extend({
  name: "UiInput",

  props: {
    value: [String, Number],
    // Для валидации
    rules: [String, Object],
    name: { type: String, default: "" },
    vid: { type: String, default: "" },
    // Остальное
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    theme: { type: String, default: "dark" },
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

  &-wrapper {
    position: relative;
  }

  &__icon {
    position: absolute;
    bottom: 10px;
    right: 10px;

    &.with-hover:hover {
      cursor: pointer;
      transition: 0.3s;
      color: $orange;
    }
  }

  &.dark {
    background: $blue-dark;
  }

  &.light {
    background: $primary-color;
  }

  &::placeholder {
    color: $gray;
    opacity: 1;
  }

  &.error {
    border-color: $red;
  }
}
</style>
