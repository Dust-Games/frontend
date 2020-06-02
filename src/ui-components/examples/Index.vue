<template>
  <div>
    <div v-for="(item, index) in items" :key="index">
      <p>{{ componentNames[index] }}</p>
      <component :is="item" />
      <br />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Examples",

  data() {
    return {
      componentNames: [] as Array<any>
    };
  },

  computed: {
    items(): Array<any> {
      return this.componentNames.map((componentName: any) => {
        return () => import(`./${componentName}.vue`);
      });
    }
  },

  mounted() {
    const ComponentContext = require.context("./", true, /\.vue$/i, "lazy");

    ComponentContext.keys().forEach((componentFilePath: any) => {
      const componentName: any = componentFilePath
        .split("/")
        .pop()
        .split(".")[0];

      this.componentNames.push(componentName);

      Vue.component(componentName, () => ComponentContext(componentFilePath));
    });

    this.componentNames = this.componentNames.filter(componentName => componentName != "Index");
  }
});
</script>
