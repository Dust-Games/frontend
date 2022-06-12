<template>
  <IndexLarge class="sidebar large" v-if="windowWidth > 800" v-on="$listeners" />
  <IndexMobile class="sidebar mobile" v-else v-on="$listeners" />
</template>

<script lang="ts">
import { Vue } from "@/main";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Sidebar",

  components: {
    IndexLarge: () => import("./IndexLarge"),
    IndexMobile: () => import("./IndexMobile")
  },

  computed: {
    ...mapGetters(["windowWidth"])
  }
});
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;

  &.large {
    flex-direction: column;
  }

  &.mobile {
    flex-direction: row;
  }
}

@media (max-width: 800px) {
  #app {
    flex-direction: column;
  }
}
</style>
