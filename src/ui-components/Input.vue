<template>
  <div class="ui-input-wrapper">
    <input
      class="ui-input"
      v-model="innerValue"
      :style="{
        width: width,
        height: height,
        fontSize: fontSize,
        padding: padding
      }"
      :placeholder="placeholder"
      :type="type"
      @focus="setFocus(true)"
      @blur="setFocus(false)"
      @mouseenter="setHover(true)"
      @mouseleave="setHover(false)"
      v-tooltip="{
        content: errorDescription
      }"
    />
    <!-- show: v && !disabled && isShowError && v.$invalid && v.$dirty, -->
  </div>
</template>

<i18n>
{
  "en": {
    "error": "Error"
  },
  "ru": {
    "error": "Ошибка"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { required, minLength, between } from "vuelidate/lib/validators";

export default Vue.extend({
  name: "UiInput",

  props: {
    value: [String, Number],
    type: { type: String, default: "text" },
    placeholder: { type: String, default: "" },
    errorDescription: { type: String, default: "" }, // this.$t("error")
    width: { type: String, default: "max-content" },
    height: { type: String, default: "35px" },
    fontSize: { type: String, default: "14px" },
    padding: { type: String, default: "0 32px" }
  },

  data() {
    return {
      isFocus: false as Boolean,
      isShowError: false as Boolean
    };
  },

  computed: {
    innerValue: {
      get(): String | Number {
        return this.value;
      },

      set(value: String | Number) {
        this.$emit("change", value);
      }
    }
  },

  methods: {
    setFocus(isTrue: Boolean) {
      this.isFocus = isTrue;
      this.isShowError = isTrue;
    },

    setHover(isTrue: Boolean) {
      if (isTrue) {
        this.isShowError = true;
      } else {
        if (!this.isFocus) {
          this.isShowError = false;
        }
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.ui-input {
  border: 1px solid $black;
  background: $black;
  color: $white;

  &::placeholder {
    color: $gray;
    opacity: 1;
  }
}
</style>
