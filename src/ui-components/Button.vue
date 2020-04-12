<template>
  <div class="ui-button">
    <div class="ui-button__slot">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "uiButton"
});
</script>

<style lang="scss" scoped>
// .ui-button {
//   color: $black;
//   background: $white;
// }

.ui-button {
  padding: 10px 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: min-content;
  width: min-content;
  min-width: 90px;
  position: relative;

  &.ui-button:before {
    transform: skew(170deg);
  }

  // &__right {
  //   &.button-header:before {
  //     transform: skew(170deg);
  //   }
  // }

  & > * {
    font: normal normal bold 0.875rem/1rem Roboto Mono, Serif; // 14/16
    display: flex;
    justify-content: space-between;
    z-index: 2;
  }

  &:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    background: $blue;
    border: 1px solid transparent;
    // border-radius: 5px;
  }

  &:hover {
    cursor: pointer;

    &:before {
      background: transparent;
      border: 1px solid $blue;
    }
  }
}
</style>
