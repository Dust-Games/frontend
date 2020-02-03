<template>
  <div class="user-dropdown" v-click-outside="onHide">
    <div
      class="user-dropdown__button"
      v-if="isAuthenticated"
      @click="isOpen ? onHide() : onShow()"
    >
      <span class="user-dropdown__icon icon-user" />
      <span class="user-dropdown__nickname">{{ profile.nickname }}</span>
      <span class="user-dropdown__icon icon-arrow-down2" />
    </div>
    <div
      class="user-dropdown__login"
      @click="onLogin()"
      v-if="!isAuthenticated"
    >
      Войти
    </div>
    <div v-show="isOpen" v-if="isAuthenticated" class="user-dropdown__dropdown">
      <!-- <div
        class="user-dropdown__link user-dropdown__profile"
        @click="onToProfile()"
      >
        Профиль
      </div> -->
      <div class="user-dropdown__logout" @click="onLogout()">
        <span
          class="user-dropdown__logout-icon user-dropdown__icon icon-exit"
        />
        <span class="user-dropdown__logout-text">Выйти</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { mapActions, mapGetters } from "vuex";

export default Vue.extend({
  name: "HeaderUserDropdown",

  props: {
    profile: Object
  },

  data() {
    return {
      isOpen: false
    };
  },

  computed: {
    ...mapGetters(["isAuthenticated"])
  },

  methods: {
    ...mapActions(["logout", "login"]),

    onShow() {
      this.isOpen = true;
    },

    onHide() {
      this.isOpen = false;
    },

    onToProfile() {
      this.$router.push("/user/profile");
      this.onHide();
    },

    onLogout() {
      this.logout();
      this.onHide();
    },

    onLogin() {
      this.login();
    }
  }
});
</script>

<style lang="scss" scoped>
.user-dropdown {
  position: relative;

  &__button {
    user-select: none;

    & > * + * {
      padding-left: 5px;
    }

    &:hover {
      cursor: pointer;
      color: $light-blue;
    }
  }

  &__dropdown {
    z-index: 10;
    padding: 10px;
    background: $blue;
    color: $white;
    min-width: 150px;

    position: absolute;
    top: 30px;
    right: 0;

    display: flex;
    flex-direction: column;

    & > * + * {
      padding-top: 20px;
    }

    & > * {
      margin: 0 20px;
    }
  }

  &__login {
    &:hover {
      cursor: pointer;
      color: $light-blue;
      transition: 0.3s;
    }
  }

  &__profile {
    &:hover {
      cursor: pointer;
      color: $black;
      transition: 0.3s;
    }
  }

  &__logout {
    &-text {
      padding-left: 5px;
    }

    &:hover {
      cursor: pointer;
      color: $black;
      transition: 0.3s;
    }
  }
}
</style>
