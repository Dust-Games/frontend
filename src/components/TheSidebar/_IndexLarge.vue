<template>
  <div class="sidebar">
    <div class="sidebar__logo" @click="goToMain()">
      <img src="@/assets/images/logo-new.svg" />
    </div>
    <User class="sidebar__user" />
    <Nav class="sidebar__nav" />
    <Footer class="sidebar__footer" @on-change-language="$emit('on-change-language')" />
  </div>
</template>

<script setup lang="ts">
import User from './UserComponent.vue';
import Nav from './NavComponent.vue';
import Footer from './FooterComponent.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const goToMain = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped>
.sidebar {
  display: flex;
  flex-direction: column;

  padding: 30px;
  background: var(--from-black-to-red-vert);
  width: 283px;
  height: 100vh;
  box-sizing: border-box;

  &__logo {
    margin: -5px -30px;
    padding: 8px 30px 5px;
    background: transparent;

    & > * {
      height: 40px;
      width: 158px;
    }

    &:hover {
      cursor: pointer;
      transition: 0.3s;
      background: var(--from-orange-to-juice-dark);
      // background: $from-black-to-red-hor;
    }
  }

  &__user {
    margin-top: 30px;
  }

  &__nav {
    flex: 1;
    margin-top: 40px;
  }

  &__footer {
    margin-top: 20px;
  }
}

@media (max-width: 800px) {
  #app {
    flex-direction: column;
  }
}
</style>
