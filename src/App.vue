<template>
  <div id="app">
    <!-- Модалка с входом в аккаунт -->
    <!-- <LoginModal />
    <RegisterModal />
    <RegisterConfirmWarn />
    <RegisterConfirmSuccess /> -->

    <TheSidebar class="app__sidebar" @on-change-language="onChangeLanguage()" />

    <main class="app__main">
      Главная
      <!-- <InDevelopment v-if="showIsInDevelopment && isInDevelopment" /> -->
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, onBeforeMount, watch } from 'vue';
import { useOtherStore } from '@/stores/other.store';
import { useTranslatorStore } from '@/stores/translator.store';
import { storeToRefs } from 'pinia'
import { useI18n } from "vue-i18n";


import TheSidebar from '@/components/TheSidebar/_Index.vue';
// // import InDevelopment from "@components/InDevelopment"
// import  LoginModal from "@/components/auth/LoginModal"
// import  RegisterModal from "@/components/auth/RegisterModal"
// import  RegisterConfirmWarn from "@/components/auth/RegisterConfirmWarn"
// import  RegisterConfirmSuccess from "@/components/auth/RegisterConfirmSuccess"

const {  locale } = useI18n();

const otherStore = useOtherStore();
const translatorStore = useTranslatorStore();
const { lang } = storeToRefs(translatorStore)

onBeforeMount(() => {
  translatorStore.fetchLanguage();
})
onMounted(() => {
  otherStore.fetchWindowSizes();
});
onBeforeUnmount(() => {
  otherStore.destroyWindowSizes();
});

watch(lang, (newLang) => {
  console.log("watch", {newLang})
  locale.value = newLang;
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
@import '@/assets/scss/_base.scss';

body {
  margin: 0;
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
