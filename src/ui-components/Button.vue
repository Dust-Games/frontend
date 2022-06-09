<template>
  <button
    class="ui-button"
    :type="type"
    :disabled="disabled"
    :class="[size, theme]"
    :style="{ width: width, height: height }"
    @click="onClick"
  >
    <div v-show="!isLoading">
      <slot />
    </div>

    <span v-show="isLoading">{{ $t("load") }}</span>
  </button>
</template>

<i18n>
{
  "en": {
    "load": "loading..."
  },
  "ru": {
    "load": "загрузка..."
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "uiButton",

  props: {
    type: { type: String, default: "button" },
    width: { type: String, default: "max-content" },
    height: { type: String, default: "40px" },
    // small, normal, large
    size: { type: String, default: "normal" },
    // primary, orange, blue, gray
    theme: { type: String, default: "orange" },
    disabled: { type: Boolean, default: false },
    // Для индикатора загрузки
    isLoading: { type: Boolean, default: false }
  },

  methods: {
    onClick(event: any) {
      if (this.type != "submit") {
        event.stopPropagation();
        event.preventDefault();
      }
      this.$emit("click", event);
    }
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
  padding: 0 15px;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    cursor: pointer;
    transition: 0.3s;
  }

  // Темы

  &.primary {
    background: $primary-color;
    @include buttonHover;
  }

  &.orange {
    background: $from-orange-to-juice;
    @include buttonHover;
  }

  &.blue {
    background: $blue-deep;
    @include buttonHover;
  }

  &.blue-steel {
    background: $blue-steel;
    @include buttonHover;
  }

  &.blue-fly {
    background: $blue-fly;
    @include buttonHover;
  }

  &.gray {
    background: $gray-900;
    @include buttonHover;
  }
}
</style>
