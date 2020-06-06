<template>
  <div>
    <p>{{ exampleItems }}</p>

    <CheckboxArray :value="exampleValue" :items="exampleItems" @change="onChange" />
    <CheckboxArray :value="exampleValue + 11" :items="exampleItems" @change="onChange" />
    <CheckboxArray :value="exampleValue + 22222222" :items="exampleItems" @change="onChange" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UiCheckboxAdvancedExample",

  components: {
    CheckboxArray: () => import("@ui-components/CheckboxArray")
  },

  data() {
    return {
      exampleValue: "ghgh" as string,
      exampleItems: [] as Array<any>
    };
  },

  methods: {
    onChange(val: Array<any>) {
      this.exampleItems = val;
    }
  }
});
</script>
