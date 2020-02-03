<template>
  <div class="user-dropdown" v-click-outside="hide">
    <div class="user-dropdown__button" @click="isOpen ? onHide() : onShow()">
      <span class="user-dropdown__icon icon-user" />
      <span class="user-dropdown__nickname">{{ profile.nickname }}</span>
      <span class="user-dropdown__icon icon-circle-down" />
    </div>
    <div v-show="isOpen" class="user-dropdown__dropdown">
      <router-link class="user-dropdown__link" to="/user/profile">
        Профиль
      </router-link>
      <div class="user-dropdown__logout" @click="onLogout()">
        <span
          class="user-dropdown__logout-icon user-dropdown__icon icon-bell"
        />
        <span class="user-dropdown__logout-text">Выйти</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

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

  methods: {
    onShow() {
      this.isOpen = true;
    },

    onHide() {
      this.isOpen = false;
    }
  }
});
</script>

<style lang="scss" scoped>
.user-dropdown {
  &__button {
    user-select: none;

    & > * + * {
      padding-left: 5px;
    }

    &:hover {
      cursor: pointer;
    }
  }

  &__dropdown {
    position: absolute;
    z-index: 10;
    padding: 10px 0;
    background: $black;
    color: $white;
    // margin-left: -20px;
    right: calc(0 - 100%);
    min-width: 200px;

    display: flex;
    flex-direction: column;

    & > * + * {
      padding-top: 20px;
    }

    & > * {
      margin: 0 20px;
    }
  }
}
</style>
