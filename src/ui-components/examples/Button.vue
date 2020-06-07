<template>
  <details class="storybook__block">
    <summary class="storybook__title">Кнопка (Button)</summary>

    <p>{{ exampleValue }}</p>

    <div class="storybook__block-inner">
      <Button @click="onClick()">Нажми меня</Button>
      <Button @click="onClick()" width="100px" height="50px">Нажми меня</Button>
      <Button @click="onClick()" theme="blue">Нажми меня</Button>
    </div>
  </details>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiCheckboxAdvancedExample",

  components: {
    Button: () => import("@ui-components/Button")
  },

  data() {
    return {
      exampleValue: 0 as number
    };
  },

  methods: {
    onClick() {
      this.exampleValue++;
    }
  }
});
</script>
