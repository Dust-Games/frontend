<template>
  <div id="app">
    <Header class="app__header" />
    <split-pane
      class="app__content"
      :min-percent="getPercentagesOfPixels(230)"
      :default-percent="getPercentagesOfPixels(400)"
      v-on:resize="onResize"
      split="vertical"
      ref="leftPane"
    >
      <template #paneL>
        <Sidebar
          class="app__sidebar"
          :class="{ 'app__sidebar-hide': isHideSidebar }"
        />
      </template>
      <template #paneR>
        <main class="app__main" :style="styleObject">
          <!-- <div v-click-outside="hide" /> -->
          <InDevelopment v-if="showIsInDevelopment && isInDevelopment" />
          <router-view v-else />
        </main>
      </template>
    </split-pane>
  </div>
</template>

<script lang="ts">
// TODO в инфо сделать белыми значки
// TODO фон в целом поправить

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
      showIsInDevelopment: false as boolean,
      windowWidth: window.innerWidth as number,
      leftPaneWidth: 0 as number
    };
  },

  computed: {
    ...mapGetters(["isInDevelopment"]),

    styleObject(): any {
      return {
        marginLeft: (this.leftPaneWidth + "%") as string
      };
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

  async mounted() {
    // this.showIsInDevelopment = true;
    this.getBalance();
    this.getUser();
    await this.onResize();

    window.addEventListener("resize", async event => {
      this.windowWidth = window.innerWidth;
      await this.onResize();
    });
  },

  methods: {
    ...mapActions(["getBalance", "getUser"]),

    // hide() {
    //   this.showIsInDevelopment = false;
    // }

    // Получить процент от ширины экрана из пикселей
    getPercentagesOfPixels(pixels: number): number {
      return (pixels / this.windowWidth) * 100;
    },

    // Получить пиксели из процентов от ширины экрана
    getPixelsOfPercentages(pixels: number): number {
      return (pixels / this.windowWidth) * 100;
    },

    /**
     * Получить ширину левой панели в процентах
     */
    // getLeftPaneWidth(): number {
    //   return this.leftPaneWidth;
    // },

    /**
     * При изменении ширины бокового меню проверять, не достигло ли оно максимального или минимального
     * размера ширины, если да, то ограничивать и не давать делаться больше/меньше допустимых пределов
     */
    onResize() {
      const percent = (this.$refs.leftPane as any).percent;
      const minPercent = this.getPercentagesOfPixels(50);
      const maxPercent = this.getPercentagesOfPixels(400);

      if (percent > maxPercent) {
        (this.$refs.leftPane as any).percent = maxPercent;
      }
      if (percent < minPercent) {
        (this.$refs.leftPane as any).percent = minPercent;
      }

      this.leftPaneWidth = (this.$refs.leftPane as any).percent;
    }
  }
});
</script>

<style lang="scss" scoped>
#app {
  text-align: center;
  background: $gray-darkest;
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/deep/.splitter-pane.vertical.splitter-paneL {
  background: $black;
  z-index: 65;
  // height: auto !important;
}

/deep/.splitter-pane.vertical.splitter-paneR {
  position: relative !important;
  width: 100% !important;
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
