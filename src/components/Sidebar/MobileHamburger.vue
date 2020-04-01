<template>
  <div class="hamburger">
    <input
      class="hamburger__checkbox"
      type="checkbox"
      ref="checkbox"
      @change="onChange($event.explicitOriginalTarget.checked)"
    />
    <span class="hamburger__span" />
    <span class="hamburger__span" />
    <span class="hamburger__span" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "SidebarMobileHamburger",

  methods: {
    onChange(isChecked: boolean) {
      this.$emit("on-change", isChecked);
    }
  }
});
</script>

<style lang="scss" scoped>
.hamburger {
  margin: 22px;
  width: min-content;

  &__span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    // left: calc(100% - 33px - 20px);

    background: $white;
    border-radius: 3px;
    z-index: 1;

    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }

  &__span:first-child {
    transform-origin: 0% 0%;
  }

  &__span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  &__checkbox {
    display: block;
    width: 40px;
    height: 32px;
    margin: 20px;
    opacity: 0;
    z-index: 2;
    -webkit-touch-callout: none;

    position: absolute;
    top: 0;
    right: 0;

    &:hover {
      cursor: pointer;
    }
  }

  &__checkbox:not([checked]) ~ &__span {
    // left: calc(100vw - 33px - 20px);
  }

  &__checkbox:checked ~ &__span {
    opacity: 1;
    transform: rotate(45deg) translate(-5px, -16px);
    background: $gray-light;
    // left: calc(100% - 33px - 20px);
  }

  &__checkbox:checked ~ &__span:nth-last-child(3) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  &__checkbox:checked ~ &__span:nth-last-child(2) {
    transform: rotate(-45deg) translate(-4px, 15px);
  }
}
</style>
