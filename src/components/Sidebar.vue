<template>
  <div class="sidebar-wrapper">
    <div class="sidebar">
      <h1 class="sidebar__title">Меню</h1>
      <nav class="sidebar__nav">
        <div class="sidebar__nav-item">Главная</div>
        <div class="sidebar__nav-item">Турниры</div>
        <div class="sidebar__nav-item">Рейтинги</div>
        <div class="sidebar__nav-item">Сообщества</div>
        <div class="sidebar__nav-item">Создать турнир</div>
      </nav>
      <Footer class="sidebar__footer" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sidebar",

  components: {
    Footer: () => import("@components/Footer.vue")
  }
});
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;

  height: 100%;

  padding: 30px 45px;

  // position: absolute;

  &-wrapper {
    // position: relative;
    height: calc(100vh - 65px - 50px);

    position: sticky;
    top: 65px;

    background: $black;

    overflow: hidden;
  }

  &__title {
    color: $white;
    margin-top: -65px;
    text-align: left;
  }

  &__nav {
    flex: 2;
    // position: fixed;

    // top: 0;

    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-top: 10px;

    &-item {
      color: $white;
      font-size: 24px;
      text-align: left;

      &:hover {
        color: $light-blue;
        cursor: pointer;
        transition: 0.3s;
      }
    }

    & > * + * {
      margin-top: 30px;
    }
  }

  &__footer {
    // margin: 10px;
    // position: fixed;
  }
}
</style>
