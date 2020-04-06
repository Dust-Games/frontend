<template>
  <transition name="modal">
    <modal
      :name="modalName"
      :clickToClose="false"
      adaptive
      :width="width"
      :height="height"
      :minHeight="150"
      class="auth-modal"
    >
      <!-- Кнопка закрытия модалки -->
      <div class="auth-modal__close-wrapper" @click="onHide()">
        <Close class="auth-modal__close" />
      </div>
      <!-- Основной контент -->
      <div class="auth-modal__body">
        <slot />
      </div>
    </modal>
  </transition>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AuthModal",

  components: {
    Close: () => import("@ui-components/Close"),
  },

  props: {
    modalName: { type: String, default: "auth" },
    width: { type: [String, Number], default: "500px" },
    height: { type: [String, Number], default: "auto" },
  },

  methods: {
    onShow() {
      this.$modal.show(this.modalName);
    },
    onHide() {
      this.$modal.hide(this.modalName);
    },
  },
});
</script>

<style lang="scss" scoped>
/* base */
.modal {
  backface-visibility: hidden;
  z-index: 1;

  &-move {
    transition: all 600ms ease-in-out 50ms;
  }

  &-enter-active {
    transition: all 400ms ease-out;
  }

  &-leave-active {
    transition: all 200ms ease-in;
    position: absolute;
    z-index: 0;
  }

  &-enter,
  &-leave-to {
    opacity: 0;
  }
}

/deep/.v--modal {
  background: $primary-color;

  &-background {
    background: rgba($black, 0.7);
  }
}

.auth-modal {
  // position: relative;
  width: 100%;

  &__close {
    // position: absolute;
    margin: 10px 10px 0 auto;
  }

  &__body {
    margin: -2px 50px 50px;
  }
}
</style>
