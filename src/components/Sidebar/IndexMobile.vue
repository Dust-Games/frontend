<template>
  <div class="sidebar-mobile" v-click-outside="onHide">
    <!-- Лого -->
    <div class="sidebar-mobile__logo"><img src="@/assets/images/logo.png" /></div>
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

<script lang="ts">
import Vue from "vue";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "Sidebar_IndexMobile",

  components: {
    MobileHamburger: () => import("./MobileHamburger"),
    Nav: () => import("./Nav"),
    User: () => import("./User"),
    Footer: () => import("./Footer")
  },

  data() {
    return {
      isMenuShow: false
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated"])
  },

  methods: {
    onHide() {
      this.isMenuShow = false;
    },

    onChangeHamburgerState(isChecked: boolean) {
      // console.log(123);
      this.isMenuShow = isChecked;
    }
  }
});
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

  background: $from-black-to-red-hor;
  width: 100%;
  height: 70px;

  /deep/.footer__links {
    margin-right: 30px;
  }

  &__logo {
    padding-left: 20px;
    margin-top: 5px;

    & > * {
      height: 35px;
      // width: 100px;
    }
  }

  &__menu {
    position: absolute;
    margin-top: 70px;
    top: 0;
    width: 100%;
    background: $from-black-to-red-hor;
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
    border-top: 2px dashed $gray-900;
    border-radius: 5px;
    width: 100%;
    margin: 5px 0 20px;
  }
}
</style>
