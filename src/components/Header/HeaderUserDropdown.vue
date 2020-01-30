<template>
  <div class="user-dropdown">
    <div class="user-dropdown__button" @click="isOpen ? hide() : show()">
      <span class="user-dropdown__icon icon-user" />
      <span class="user-dropdown__nickname">{{ profile.nickname }}</span>
      <span class="user-dropdown__icon icon-circle-down" />
    </div>
    <div v-show="isOpen" class="user-dropdown__dropdown" v-click-outside="hide">
      <router-link class="user-dropdown__link" to="/user/profile">
        Профиль
      </router-link>
      <router-link class="user-dropdown__link" to="/auth/logout">
        ВЫЙТИ
      </router-link>
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
    show() {
      this.isOpen = true;
    },

    hide() {
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
