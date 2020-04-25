<template>
  <AuthModal modalName="register-confirm-success" :sizes="{ width: '400px' }" :clickToClose="false">
    <div class="confirm-success">
      <h1 class="confirm-success__title">{{ $t("confirmTitle") }}</h1>
      <p class="confirm-success__text">{{ $t("confirmText") }}</p>
      <div class="confirm-success__image"><img src="@/assets/images/email-success.svg" /></div>
    </div>
  </AuthModal>
</template>

<i18n>
{
  "en": {
    "confirmTitle": "Email is confirmed",
    "confirmText": "Thank you for confirming email kozlova9v@mail.ru. It's time to start using the site!"
  },
  "ru": {
    "confirmTitle": "Почта подтверждена",
    "confirmText": "Спасибо за подтверждение почты kozlova9v@mail.ru. Самое время начать пользоваться сайтом!"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AuthRegisterConfirmSuccessModal",

  components: {
    AuthModal: () => import("@layouts/AuthModal")
  },

  methods: {
    hide() {
      this.$modal.hide("register-confirm-success");
    }
  }
});
</script>

<style lang="scss" scoped>
.confirm-success {
  &__title {
    margin-top: 0;
    margin-bottom: 50px;
  }

  &__text {
    font-size: 18px;
    margin-bottom: 50px;
  }
}

@media (max-width: 400px) {
  .confirm-success {
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
