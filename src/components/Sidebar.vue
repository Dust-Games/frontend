<template>
  <div class="sidebar-wrapper">
    <div class="sidebar">
      <nav class="sidebar__nav">
        123
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

  height: calc(100vh - 65px);

  // position: absolute;

  &-wrapper {
    position: relative;
  }

  &__nav {
    flex: 2;
    // position: fixed;
    position: sticky;
    top: 0;
  }

  &__footer {
    margin: 10px;
    // position: fixed;
  }
}
</style>
