<template>
  <transition name="modal">
    <modal
      class="auth-modal"
      :name="modalName"
      adaptive
      :clickToClose="clickToClose"
      :width="sizes && sizes.width ? sizes.width : '100%'"
      :height="scrollable ? 'auto' : sizes && sizes.height ? sizes.height : 'auto'"
      :minHeight="sizes && sizes.minHeight ? sizes.minHeight : 0"
      :minWidth="sizes && sizes.minWidth ? sizes.minWidth : 0"
      :maxHeight="sizes && sizes.maxHeight ? sizes.maxHeight : Infinity"
      :maxWidth="sizes && sizes.maxWidth ? sizes.maxWidth : Infinity"
      @before-open="$emit('before-open', $event)"
      @before-close="$emit('before-close', $event)"
    >
      <!-- Кнопка закрытия модалки -->
      <div class="auth-modal__close-wrapper">
        <div @click="onHide()">
          <Close class="auth-modal__close" />
        </div>
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
  name: "UiModal",

  components: {
    Close: () => import("@ui-components/Close")
  },

  props: {
    // Имя модального окна, чтобы по этому имени его закрыть
    modalName: { type: String, required: true },
    clickToClose: { type: Boolean, default: true },
    scrollable: Boolean,
    sizes: Object
  },

  methods: {
    onShow() {
      this.$modal.show(this.modalName);
    },

    onHide() {
      this.$modal.hide(this.modalName);
    }
  }
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

/deep/.vm--modal {
  background: $from-black-to-red-vert;
  box-shadow: none;
}

/deep/.vm--overlay {
  background: rgba($black-rgb, 0.6);
}

.auth-modal {
  // position: relative;
  width: 100%;

  &__close {
    // position: absolute;
    margin: 10px 10px 0 auto;

    &-wrapper {
      display: flex;
      justify-content: flex-end;
      // width: min-content;
    }
  }

  &__body {
    margin: -2px 50px 50px;
  }
}
</style>
