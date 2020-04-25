<template>
  <label class="ui-checkbox" :disabled="disabled">
    <div class="ui-checkbox__slot">
      <slot />
    </div>

    <ValidationProvider :name="name" :rules="rules" v-slot="v">
      <input type="checkbox" v-model="innerValue" />
      <span
        class="state"
        :class="[innerValue ? 'state__true icon-checkmark' : 'state__false', bold && 'bold']"
        :disabled="disabled"
      />
    </ValidationProvider>
  </label>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiCheckbox",

  props: {
    value: { type: Boolean, default: false },
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

<style lang="scss" scoped>
.bold {
  border-width: 2px !important;
  padding-left: 2px !important;
  padding-top: 2px !important;

  &.state__true {
    border-color: $gray-dark;

    &:hover {
      border-color: rgba($gray-dark, 0.7);
    }
  }
}

.ui-checkbox {
  display: block;
  position: relative;
  padding-left: 32px;
  padding-top: 0px;

  user-select: none;
  // width: max-content;

  &[disabled] {
    pointer-events: none;
  }

  &__slot {
    // display: flex;
    justify-content: center;
    align-items: center;
  }

  input[type="checkbox"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .state {
    position: absolute;
    top: 0;
    left: 0;
    height: 17px;
    width: 17px;
    background-color: $blue-dark;
    border: 1px solid $gray;
    border-radius: 5px;
    padding-left: 3px;
    padding-top: 3px;
    font-size: 14px;
    color: $white;

    // при наведении
    &:hover {
      cursor: pointer;

      .state {
        cursor: pointer;
        // background: $primary-color;
        transition: all 0.3s ease-out;
        color: $white;

        &__true {
          // border-color: $orange;
          // background-color: rgba($primary-color, 0.7);
          // color: $white;
          // border-color: rgba($gray-dark, 0.7);
        }

        &__false {
          // border-color: $primary-color;
          border-color: $orange;
        }
      }
    }

    &[disabled] {
      background-color: $gray-light !important;
      border-color: $gray !important;
    }

    &__false {
      background: $blue-dark;
      border-color: $gray;
      color: $white;
    }

    &__true {
      color: $gray;
    }
  }
}
</style>
