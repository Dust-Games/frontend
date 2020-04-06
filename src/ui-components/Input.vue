<template>
  <!-- <div class="ui-input-wrapper"> -->
  <input
    class="ui-input"
    v-model="innerValue"
    :style="{ width: width, height: height, padding: padding }"
    :placeholder="placeholder"
  />
  <!-- </div> -->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiInput",

  props: {
    value: [String, Number],
    placeholder: { type: String, default: "" },
    width: { type: String, default: "max-content" },
    height: { type: String, default: "35px" },
    padding: { type: String, default: "0 28px" },
  },

  computed: {
    innerValue: {
      get(): String | Number {
        return this.value;
      },

      set(value: String | Number) {
        this.$emit("change", value);
      },
    },
  },
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
