<template>
  <div class="sidebar">
    <nav class="sidebar__nav">
      123
    </nav>
    <Footer class="sidebar__footer" />
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
