<template>
  <div id="app">
    <!-- Модалка с входом в аккаунт -->
    <!-- <LoginModal />
    <RegisterModal />
    <RegisterConfirmWarn />
    <RegisterConfirmSuccess /> -->

    <TheSidebar class="app__sidebar" @on-change-language="onChangeLanguage()" />

    <main class="app__main">
      <!-- <InDevelopment v-if="showIsInDevelopment && isInDevelopment" /> -->
      <h2>{{ routeTitle }}</h2>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount, onBeforeMount, watch, ref } from 'vue';
import { getRouteTitle } from '@/helpers/route.helper';
import { storeToRefs } from 'pinia'

import { useOtherStore } from '@/stores/other.store';
import { useTranslatorStore } from '@/stores/translator.store';
import { useI18n } from "vue-i18n";
import { useRoute } from 'vue-router';

import TheSidebar from '@/components/TheSidebar/_Index.vue';

// // import InDevelopment from "@components/InDevelopment"
// import  LoginModal from "@/components/auth/LoginModal"
// import  RegisterModal from "@/components/auth/RegisterModal"
// import  RegisterConfirmWarn from "@/components/auth/RegisterConfirmWarn"
// import  RegisterConfirmSuccess from "@/components/auth/RegisterConfirmSuccess"

const { locale, t } = useI18n();

const otherStore = useOtherStore();
const translatorStore = useTranslatorStore();
const { lang } = storeToRefs(translatorStore)

const route = useRoute();
// const routeTitleForI18n = route.meta?.titleForI18n
const routeTitle = ref<string>("Default")

onBeforeMount(() => {
  translatorStore.fetchLanguage();
})
onMounted(() => {
  otherStore.fetchWindowSizes();
});
onBeforeUnmount(() => {
  otherStore.destroyWindowSizes();
});

watch(
  () => route.meta?.titleForI18n,
  () => onUpdateRouteTitle()
)

watch(lang, (newLang) => {
  locale.value = newLang;
  onUpdateRouteTitle()
});

const onUpdateRouteTitle = () => {
  const normalizedRouteTitle = getRouteTitle(route.meta, t);

  routeTitle.value = normalizedRouteTitle
  document.title = normalizedRouteTitle;
}

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
    margin: 1rem 2rem;

    @media (max-width: 800px) {
      height: 100%;
      width: 100%;
    }
  }
}
</style>
