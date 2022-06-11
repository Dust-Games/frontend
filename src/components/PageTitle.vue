<template>
  <h1 class="page-title"><slot /></h1>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PageTitle"
});
</script>

<style lang="scss" scoped>
.page-title {
  border-bottom: 2px dashed $red-3000;
  padding: 20px 50px;

  @media (max-width: 800px) {
    padding: 15px 40px;
  }
}
</style>
