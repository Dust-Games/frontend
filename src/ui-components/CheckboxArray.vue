<template>
  <Checkbox v-model="innerValue" v-bind="$attrs">
    <slot>{{ value }}</slot>
  </Checkbox>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiCheckboxAdvanced",

  model: {
    prop: "items",
    event: "change"
  },

  components: {
    Checkbox: () => import("@ui-components/Checkbox")
  },

  props: {
    // Значение для выбора
    value: { type: [String, Object], required: true },
    items: { type: Array, required: true }
  },

  data() {
    return {
      booleanValue: false
    };
  },

  computed: {
    innerValue: {
      get(): boolean {
        return this.booleanValue;
      },

      set(value: boolean) {
        let newItems: Array<any> = JSON.parse(JSON.stringify(this.items));

        if (value) {
          newItems.push(this.value);
        } else {
          newItems = newItems.filter(newItem => newItem != this.value);
        }

        this.booleanValue = value;
        this.$emit("change", newItems);
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
    height: 20px;
    width: 20px;
    background-color: $blue-dark;
    border: 1px solid $gray;
    border-radius: 5px;
    padding-left: 2px;
    padding-top: 3px;
    font-size: 14px;
    color: $white;

    &.error {
      border-color: $red;
    }

    // при наведении
    &:hover {
      cursor: pointer;

      &.state__true {
        cursor: pointer;
        transition: all 0.3s ease-out;
        color: $orange;
      }

      &.state__false {
        cursor: pointer;
        transition: all 0.3s ease-out;
        border-color: $orange;
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
      color: $white;
      transition: all 0.3s;
    }
  }
}
</style>
