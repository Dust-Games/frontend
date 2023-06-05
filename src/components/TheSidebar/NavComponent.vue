<template>
  <nav class="nav">
    <div
      class="nav__item"
      v-for="(item, index) in items"
      :key="index"
      :active="isActive(item)"
      :disabled="item.isDisabled"
      @click="onTo(item.path)"
    >
      {{ item.title }}
    </div>
  </nav>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useI18n } from 'vue-i18n';

const router = useRouter();
const route = useRoute();
const eventBus: any = inject('eventBus');
const { t } = useI18n();

interface ItemType {
  title: string;
  path: string;
  availablePaths: string[];
  isDisabled?: boolean;
}

const items = computed(() => [{ title: t('Cards'), path: '/user/cards' }] as ItemType[]);

const onTo = (path: string) => {
  router.push(path);
  eventBus.$emit('close-mobile-menu');
};

const isActive = (item: ItemType) => {
  if (item.availablePaths) {
    return item.availablePaths.includes(route.fullPath);
  } else {
    return route.fullPath == item.path;
  }
};
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    font-size: 18px;

    & + & {
      padding-top: 20px;
    }

    // @include linkHover;

    &[disabled] {
      color: var(--gray-2000);
      pointer-events: none;
    }

    &:not([disabled])[active] {
      color: var(--primary-color);
    }
  }
}
</style>
