<template>
  <button
    class="ui-button"
    :type="type"
    :disabled="disabled"
    :class="[size, theme]"
    :style="{ width: width, height: height }"
  >
    <slot />
  </button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "uiButton",

  props: {
    type: { type: String, default: "button" },
    width: { type: String, default: "max-content" },
    height: { type: String, default: "auto" },
    // small, normal, large
    size: { type: String, default: "normal" },
    // primary, orange, blue, gray
    theme: { type: String, default: "orange" },
    disabled: { type: Boolean, default: false }
  }
});
</script>

<style lang="scss" scoped>
@mixin buttonHover {
  &:hover {
    box-shadow: inset 0 250px #0913224d;
  }
}

.ui-button {
  border: 0;
  border-radius: 30px;
  color: $white;
  text-transform: uppercase;
  font-weight: bold;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
  }

  // Размеры

  &.small {
    padding: 10px;
  }

  &.normal {
    padding: 12px;
  }

  &.large {
    padding: 20px;
  }

  // Темы

  &.primary {
    background: $red;
    @include buttonHover;
  }

  &.orange {
    background: $orange-juice;
    @include buttonHover;
  }

  &.blue {
    background: $deep-blue;
    @include buttonHover;
  }

  &.gray {
    background: $gray-light;
    @include buttonHover;
  }
}
</style>
