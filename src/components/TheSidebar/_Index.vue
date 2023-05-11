<template>
  <IndexLarge class="sidebar large" v-if="windowWidth > 800" v-bind="$attrs" />
  <IndexMobile class="sidebar mobile" v-else v-bind="$attrs" />
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useOtherStore } from '@/stores/other.store';

import IndexLarge from './_IndexLarge.vue';
import IndexMobile from './_IndexMobile.vue';

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
