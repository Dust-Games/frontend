<template>
  <div class="storybook">
    <div>
      <p>Иконки</p>
      <a href="file:///var/www/dust/frontend/src/assets/icomoon/demo.html" target="_blank">
        file:///var/www/dust/frontend/src/assets/icomoon/demo.html
      </a>
    </div>
    <br />

    <div v-for="(item, index) in items" :key="index">
      <component :is="item" />
      <hr />
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

<style lang="scss">
.storybook {
  &__title {
    padding: 10px 0;
    font-size: 16px;
    font-weight: bold;

    &:hover {
      cursor: pointer;
    }
  }

  &__block {
    display: flex;
    flex-direction: column;

    &-inner {
      display: flex;

      & > * {
        margin-right: 10px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
