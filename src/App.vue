<template>
  <div id="app">
    <Header class="app__header" />
    <split-pane
      class="app__content"
      :min-percent="getPercentagesOfPixels(50)"
      :default-percent="getPercentagesOfPixels(400)"
      v-on:resize="onResizeContent"
      split="vertical"
      ref="content"
    >
      <template #paneL>
        <Sidebar
          class="app__sidebar"
          :class="{ 'app__sidebar-hide': isHideSidebar }"
        />
      </template>
      <template #paneR>
        <main class="app__main">
          <!-- <div v-click-outside="hide" /> -->
          <InDevelopment v-if="showIsInDevelopment && isInDevelopment" />
          <router-view v-else />
        </main>
      </template>
    </split-pane>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// import ClickOutside from "vue-click-outside";
import { mapGetters, mapActions } from "vuex";

export default Vue.extend({
  name: "App",

  components: {
    Header: () => import("@components/Header/Header.vue"),
    Sidebar: () => import("@components/Sidebar.vue"),
    InDevelopment: () => import("@components/InDevelopment")
  },

  // directives: {
  //   ClickOutside
  // },

  data() {
    return {
      showIsInDevelopment: new Boolean(),
      windowWidth: document.documentElement.clientWidth as number
    };
  },

  computed: {
    ...mapGetters(["isInDevelopment"]),

    maxPercent(): number {
      return this.getPercentagesOfPixels(400);
    },

    minPercent(): number {
      return this.getPercentagesOfPixels(50);
    },

    minForHidePercent(): number {
      return this.getPercentagesOfPixels(100);
    },

    // НЕ РАБОТАЕТ, ИБО НЕ РЕАКТИВНОЕ
    isHideSidebar(): boolean {
      if (this.$refs.content as any) {
        const percent = (this.$refs.content as any).percent;
        const minForHidePercent = this.getPercentagesOfPixels(240);
        return percent < minForHidePercent;
      } else {
        return false;
      }
    }
  },

  mounted() {
    // this.showIsInDevelopment = true;
    this.getBalance();
    this.getUser();

    this.$nextTick(() => {
      this.windowWidth = document.documentElement.clientWidth;
      window.addEventListener("resize", this.getWindowWidth as any);
    });
  },

  methods: {
    ...mapActions(["getBalance", "getUser"]),

    // hide() {
    //   this.showIsInDevelopment = false;
    // }

    /**
     * Передаем число пикселей, получаем процент, который составляет
     * это число от ширины экрана
     */
    getPercentagesOfPixels(pixels: number) {
      return (pixels / this.windowWidth) * 100;
    },

    /**
     * При изменении ширины бокового меню проверять, не достигло
     * ли оно максимального или минимального размера ширины, если да,
     * то ограничивать и не давать делаться больше/меньше допустимых
     * пределов
     */
    onResizeContent() {
      const percent = (this.$refs.content as any).percent;
      if (percent > this.maxPercent) {
        (this.$refs.content as any).percent = this.maxPercent;
      }
      if (percent < this.minPercent) {
        (this.$refs.content as any).percent = this.minPercent;
      }
    },

    /**
     * Получить ширину окна и запустить функцию проверки ширины
     * бокового меню
     */
    async getWindowWidth() {
      this.windowWidth = document.documentElement.clientWidth;
      await this.onResizeContent();
    }
  }
});
</script>

<style lang="scss">
#app {
  text-align: center;
  background: $gray-darkest;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.splitter-paneL {
  background: $black;
}

.app {
  &__header {
    z-index: 5;
  }

  &__content {
    flex: 2;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    position: relative;
  }

  &__sidebar {
    // position: fixed;

    &-hide {
      /deep/.sidebar {
        background: red;
      }
    }
  }

  &__main {
    flex: 2;
  }
}
</style>
