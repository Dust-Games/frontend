<template>
  <div class="ui-radiobutton" :disabled="disabled">
    <ValidationProvider :name="name" :rules="rules" v-slot="v">
      <div
        class="state"
        :class="[
          isChecked ? 'state__true' : 'state__false',
          { error: (v.dirty && v.invalid) || (v.validated && v.invalid) }
        ]"
      >
        <input :id="item" type="radio" v-model="innerValue" :value="item" />
        <label class="ui-radiobutton__slot" :for="item" :disabled="disabled"><slot /></label>
      </div>
    </ValidationProvider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiRadioButton",

  props: {
    item: { type: [String, Number] },
    value: { type: [String, Number] },
    disabled: { type: Boolean, default: false },
    // Для валидации
    rules: [String, Object],
    name: { type: String, default: "" }
  },

  data() {
    return {
      selectedItem: ""
    };
  },

  computed: {
    innerValue: {
      get(): string | number {
        return this.value;
      },

      set(value: string | number) {
        this.$emit("input", value);
      }
    },

    isChecked(): boolean {
      return this.innerValue == this.item;
    }
  }
});
</script>

<style lang="scss" scoped>
.ui-radiobutton {
  display: block;
  position: relative;
  padding-top: 0px;
  cursor: pointer;

  &[disabled] {
    pointer-events: none;
  }

  label {
    cursor: pointer;
    padding: 10px;
    width: 100%;
    text-align: center;
  }

  input[type="radio"] {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
  }

  .state {
    width: min-content;
    min-width: 100px;
    background-color: $blue-dark;
    border: 1px solid $gray;
    border-radius: 30px;

    font-size: 14px;
    color: $white;
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;

    &.error {
      border-color: $red;
    }

    // при наведении
    &:hover {
      cursor: pointer;

      &.state__false {
        cursor: pointer;
        transition: all 0.3s ease-out;
        border-color: $orange;
        color: $orange;
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
      background: $orange-juice;
      border: transparent;
      color: $white;
      transition: all 0.3s;
    }
  }
}
</style>
