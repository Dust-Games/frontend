<template>
  <AuthModal
    modalName="register-confirm-warn"
    :sizes="{ maxWidth: windowWidth > 660 ? 630 : 300 }"
    :clickToClose="false"
  >
    <div class="confirm-warn">
      <h1 class="confirm-warn__title">{{ $t("confirmTitle") }}</h1>
      <p class="confirm-warn__text">{{ $t("confirmText") }}</p>
      <div class="confirm-warn__image">
        <img class="confirm-warn__image-svg" src="@/assets/images/email-warn.svg" />
        <div class="confirm-warn__image-bkg" />
      </div>
    </div>
  </AuthModal>
</template>

<i18n>
{
  "en": {
    "confirmTitle": "Registration is complete",
    "confirmText": "Thank you for registering, now you have an account! Don't forget to confirm your email to use our service to the maximum."
  },
  "ru": {
    "confirmTitle": "Регистрация завершена",
    "confirmText": "Спасибо за регистрацию, теперь у вас есть аккаунт! Не забудьте подтвердить свою почту, чтобы использовать наш сервис по максимуму."
  }
}
</i18n>

<script lang="ts">
import { Vue } from "@/main";
import { mapGetters } from "vuex";

export default Vue.extend({
  name: "AuthRegisterConfirmWarnModal",

  components: {
    AuthModal: () => import("@layouts/AuthModal")
  },

  computed: {
    ...mapGetters(["windowWidth"])
  },

  methods: {
    hide() {
      this.$modal.hide("register-confirm-warn");
    }
  }
});
</script>

<style lang="scss" scoped>
.confirm-warn {
  &__title {
    margin-top: 0;
    margin-bottom: 50px;
    font-size: 30px;
  }

  &__text {
    font-size: 18px;
    margin-bottom: 50px;
  }

  &__image {
    display: flex;
    justify-content: center;

    &-svg {
      z-index: 2;
    }

    &-bkg {
      position: absolute;
      margin-left: 30%;
      margin-top: 80px;
      width: 100%;
      height: 90px;
      background: $from-orange-to-juice;
      border-top-left-radius: 7px;
      border-bottom-left-radius: 7px;
    }
  }
}

@media (max-width: 660px) {
  /deep/.auth-modal__body {
    margin: -2px 27px 50px !important;
  }

  .confirm-warn {
    &__title {
      margin-bottom: 35px;
    }

    &__text {
      font-size: 16px;
      margin-bottom: 35px;
    }
  }
}
</style>
