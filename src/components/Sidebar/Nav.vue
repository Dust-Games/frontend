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

<i18n>
{
  "en": {
    "soon": "(soon!)"
  },
  "ru": {
    "soon": "(скоро!)"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import { mapActions } from "vuex";

interface ItemType {
  title: string;
  path: string;
  availablePaths: string[];
  isDisabled?: boolean;
}

export default Vue.extend({
  name: "SidebarNav",

  computed: {
    items() {
      return [{ title: this.$i18n.t("Cards"), path: "/user/cards" }] as ItemType[];
    }
  },

  methods: {
    ...mapActions(["setIsMobileMenuOpen"]),

    onTo(path: string) {
      this.$router.push(path);
      this.setIsMobileMenuOpen(false);
    },

    isActive(item: ItemType) {
      if (item.availablePaths) {
        return item.availablePaths.includes(this.$route.fullPath);
      } else {
        return this.$route.fullPath == item.path;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.nav {
  &__item {
    font-size: 18px;

    & + & {
      padding-top: 20px;
    }

    @include linkHover;

    &[disabled] {
      color: $gray-2000;
      pointer-events: none;
    }

    &:not([disabled])[active] {
      color: $primary-color;
    }
  }
}
</style>
