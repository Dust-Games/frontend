<template>
  <div class="user">
    <!-- Если юзер не вошел в свой аккаунт -->
    <div class="user__not-auth" v-if="!isAuthenticated">
      <i class="user__icon icon-person_outlineperm_identity" />
      <div class="user__not-auth-links">
        <!-- Кнопка входа -->
        <div class="user__link user__not-auth-login" @click="onLogin()">
          {{ $t('login') }}
        </div>
        <!-- Кнопка регистрации -->
        <!-- <div class="user__link user__not-auth-signup" @click="onSignup()">
          {{ $t("signup") }}
        </div> -->
      </div>
    </div>

    <!-- Если юзер вошел в свой аккаунт -->
    <div class="user__auth" v-else>
      <!-- Кнопка для перехода в профиль -->
      <div class="user__auth-nickname user__block user__link" @click="onToProfile()">
        <i class="user__icon icon-person_outlineperm_identity" />
        <span class="user__auth-nickname-text">{{ user.username || $t('load') }}</span>
      </div>
      <!-- Баланс -->
      <div class="user__link" v-if="!props.mobile" @click="onToWallet()">
        <!-- Баланс дасткоинов -->
        <div class="user__block">
          <i class="user__icon icon-dust" />
          {{ balance.dust_coins_num || $t('load') }}
        </div>
        <!-- Баланс usd -->
        <div class="user__block">
          <i class="user__icon icon-usd" />
          {{ balance.usd_tokens_num || $t('load') }}
        </div>
      </div>
      <!-- Кнопка выхода из аккаунта -->
      <div class="user__link user__block" @click="onLogout()">
        <i class="user__icon icon-exit_to_app" />
        {{ !isLogoutLoading ? $t('logout') : $t('load') }}
      </div>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "login": "login",
    "signup": "signup",
    "logout": "logout",
    "load": "loading..."
  },
  "ru": {
    "login": "вход",
    "signup": "регистрация",
    "logout": "выйти",
    "load": "загрузка..."
  }
}
</i18n>

<script setup lang="ts">
import { ref, inject, defineProps, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

const eventBus: any = inject('eventBus');

const props = defineProps({
  mobile: Boolean
});

const isLogoutLoading: boolean = ref(false);

const isAuthenticated = false;
const balance = 0;
const user = {
  username: 'UserNameee',
};
// computed: {
//     ...mapGetters(["balance", "user", "isAuthenticated"])
//   },

const getUser = () => {};
const getBalance = () => {};
const logout = () => {};
// ...mapActions(['getUser', 'getBalance', 'logout'])

const $modal = { show: (...params: any) => {} }; // @TODO

onMounted(() => {
  if (isAuthenticated) {
    getUser();
    // this.getBalance();
  }
});

const onToWallet = () => {
  router.push({ name: 'UserWallet' });
  // this.$emit("change");
  onChange();
};

const onToProfile = () => {
  router.push({ name: 'UserProfile' });
  onChange();
};

const onLogin = () => {
  $modal.show('login');
  onChange();
};

const onSignup = () => {
  $modal.show('register');
  onChange();
};

const onLogout = () => {
  isLogoutLoading.value = true;

  logout();
  onChange();

  isLogoutLoading.value = false;
  router.push('/home');
};

const onChange = () => {
  eventBus.$emit('close-mobile-menu');
};
</script>

<style lang="scss" scoped>
.user {
  font-size: 18px;

  &__not-auth {
    display: flex;
    align-items: center;

    &-signup {
      margin-top: -1px;
    }
  }

  &__icon {
    font-size: 30px;
    width: 30px;
    margin-right: 20px;
  }

  &__block {
    display: flex;
    align-items: center;

    margin-bottom: 13px;
  }

  &__link {
    // @include linkHover;
  }
}
</style>
