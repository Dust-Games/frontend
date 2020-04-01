<template>
  <div class="news">
    <div class="news__header">
      <h1 class="news__header-text">НОВОСТИ</h1>
      <span class="news__header-icon">чето</span>
    </div>
    <div class="news__content">
      Новости
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeNews"
});
</script>

<style lang="scss" scoped>
.news {
  &__header {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  &__content {
    background: $gray-light;
    height: 300px;
  }
}
</style>
