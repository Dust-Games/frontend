<template>
  <div class="sidebar-mobile" v-click-outside="onHide">
    <!-- Лого -->
    <div class="sidebar-mobile__logo" @click="goToMain()">
      <img src="@/assets/images/logo-new.svg" />
    </div>

    <!-- Гамбургер -->
    <MobileHamburger class="sidebar-mobile__hamburger" v-model="isMenuShow" />
    <!-- Само меню -->
    <transition name="slide-fade">
      <div class="sidebar-mobile__menu" v-show="isMenuShow">
        <div class="sidebar-mobile__hr" />
        <!-- Вход/регистрация или ник юзера -->
        <User class="sidebar-mobile__user" mobile />
        <!-- Меню -->
        <Nav class="sidebar-mobile__nav" />
        <div class="sidebar-mobile__hr" />
        <!-- Футер -->
        <Footer class="sidebar-mobile__footer" @on-change-language="$emit('on-change-language')" />
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import MobileHamburger from './MobileHamburger.vue';
import Nav from './NavComponent.vue';
import User from './UserComponent.vue';
import Footer from './FooterComponent.vue';

import { useRouter } from 'vue-router';
const router = useRouter();

const isMenuShow = ref(false);

const isAuthenticated = false;
// computed: {
//     ...mapGetters(["isAuthenticated"])
//   },

const onHide = () => {
  isMenuShow.value = false;
};

const onChangeHamburgerState = (isChecked: boolean) => {
  // console.log(123);
  isMenuShow.value = isChecked;
};

const goToMain = () => {
  router.push('/');
};
</script>

<style lang="scss" scoped>
// плавная выплывашка
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s ease;
}
.slide-fade-enter {
  transform: translateY(-50px);
  opacity: 0;
}
.slide-fade-leave-to {
  transform: translateY(-50px);
  opacity: 0;
}

.sidebar-mobile {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background: var(--from-black-to-red-hor);
  width: 100%;
  height: 70px;

  //@TODO
  // /deep/.footer__links {
  //   margin-right: 30px;
  // }

  &__logo {
    margin: -5px -30px -5px -8px;
    padding: 8px 30px 5px;
    background: transparent;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;

    & > * {
      height: 40px;
      width: 158px;
    }

    &:hover {
      cursor: pointer;
      transition: 0.3s;
      background: var(--from-orange-to-juice-dark);
    }
  }

  &__menu {
    position: absolute;
    margin-top: 70px;
    top: 0;
    width: 100%;
    background: var(--from-black-to-red-hor);
    z-index: 10;
  }

  &__nav {
    margin: 30px;
  }

  &__user,
  &__footer {
    margin-left: 30px;
    margin-bottom: 30px;
  }

  &__hr {
    height: 0;
    border-top: 2px dashed var(--gray-900);
    border-radius: 5px;
    width: 100%;
    margin: 5px 0 20px;
  }
}
</style>
