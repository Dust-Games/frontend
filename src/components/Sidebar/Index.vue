<template>
  <IndexLarge class="sidebar large" v-if="windowWidth > 800" />
  <!-- v-on="$listeners" -->
  <IndexMobile class="sidebar mobile" v-else />
  <!-- v-on="$listeners"  -->
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useOtherStore } from '@/stores/other.store';

import IndexLarge from './IndexLarge.vue';
import IndexMobile from './IndexMobile.vue';

const otherStore = useOtherStore();
const windowWidth = computed(() => otherStore.windowWidth);
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
