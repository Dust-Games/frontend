<template>
  <div id="app">
    <!-- Модалка с входом в аккаунт -->
    <!-- <LoginModal />
    <RegisterModal />
    <RegisterConfirmWarn />
    <RegisterConfirmSuccess /> -->

    <Sidebar class="app__sidebar" @on-change-language="onChangeLanguage()" />

    <main class="app__main">
      123
      <!-- <InDevelopment v-if="showIsInDevelopment && isInDevelopment" /> -->
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue';

import Sidebar from '@/components/Sidebar/Index.vue';
// // import InDevelopment from "@components/InDevelopment"
// import  LoginModal from "@/components/auth/LoginModal"
// import  RegisterModal from "@/components/auth/RegisterModal"
// import  RegisterConfirmWarn from "@/components/auth/RegisterConfirmWarn"
// import  RegisterConfirmSuccess from "@/components/auth/RegisterConfirmSuccess"

import { useOtherStore } from '@/stores/other.store';
const otherStore = useOtherStore();
onMounted(() => {
  otherStore.fetchWindowSizes();
});
onBeforeUnmount(() => {
  otherStore.destroyWindowSizes();
});

const onChangeLanguage = () => {
  console.log('onChangeLanguage');
  // if (this.lang == "en") {
  //   this.changeLanguage("ru");
  // } else {
  //   this.changeLanguage("en");
  // }
};
</script>

<style lang="scss">
@import '@/assets/scss/base';

body {
  margin: 0;
}

html {
  --white: white;
  --gray-900: #babec1;
  --gray-1000: #81919b;
  --gray-2000: #415663;
  --gray-2500: #151924;
  --black: rgb(17, 19, 27);
  --black-rgb: 17, 19, 27;

  --primary-color: #f12057;
  --primary-color-1000: #731934;
  --primary-color-2000: #54172c;

  // Другие цвета
  --blue-light: #2d9cdb;
  --blue: #557bad;
  --blue-2000: #14233b;
  --blue-dark: #091322;
  --blue-fly: linear-gradient(90deg, #48c6ef 0%, #6f86d6 100%);
  --blue-deep: linear-gradient(90deg, #e0c3fc 0%, #8ec5fc 100%);
  --blue-steel: #585e92;
  --orange-900: #ffb59f;
  --orange: #e66a41;
  --juice: #fc6080;
  --orange-2000: #6f4132;
  --from-orange-to-juice: linear-gradient(90deg, #fc6080 0%, var(--orange) 100%);
  --from-orange-to-juice-dark: linear-gradient(90deg, #be3853 0%, #c77126 100%);

  // Красный
  --red-900: #ffb8cb;
  --red-1000: #f12057;
  --red-2000: #54172c;
  --red-2500: #4e1727;
  --red-3000: #44314c;
  --from-black-to-red-vert: linear-gradient(0deg, #4e1727 0%, #242536 100%);
  --from-black-to-red-hor: linear-gradient(90deg, #4e1727 0%, #33243a 100%);
}
</style>

<style lang="scss" scoped>
#app {
  background: var(--black);
  color: var(--white);
  height: 100vh;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media (max-width: 800px) {
    min-height: 100vh;
    height: 100%;

    flex-direction: column;
    justify-content: flex-start;
  }
}

.app {
  &__main {
    width: 100%;
    overflow-y: auto;

    @media (max-width: 800px) {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
