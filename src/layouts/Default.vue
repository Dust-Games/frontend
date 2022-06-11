<template>
  <div class="default-layout">
    <PageTitle class="default-layout__title">
      <slot name="title">{{ title }}</slot>
    </PageTitle>

    <div class="default-layout__content">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "DefaultLayout",

  components: {
    PageTitle: () => import("@/components/PageTitle")
  },

  data() {
    return {
      title: this.$route.meta.pageTitle
    };
  },

  computed: {
    ...mapGetters(["lang"])
  },

  watch: {
    lang() {
      this.$nextTick(() => {
        this.title = this.$route.meta.pageTitle;
      });
    }
  }
});
</script>

<style lang="scss" scoped>
.default-layout {
  &__title {
  }

  &__content {
    padding: 30px 50px 50px;

    @media (max-width: 800px) {
      padding: 20px 40px;
    }
  }
}
</style>
