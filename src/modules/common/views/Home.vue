<template>
  <div class="home">
    <h1 class="home__title">{{ $t("home") }}</h1>
    <div class="home__welcome">
      {{ $t("description") }}
      <br />
      <!-- eslint-disable-next-line vue-i18n/no-v-html -->
      <p v-html="$t('available')" />
    </div>
    <!-- <Carousel class="home__carousel" />
    <Tournaments class="home__tournaments" />
    <div class="home__other">
      <News class="home__news" />
      <div class="home__tops">
        TOPS
      </div>
    </div> -->
  </div>
</template>

<i18n>
{
  "en": {
    "home": "Main page",
    "description": "Welcome! There is available pages now:",
    "available": "Signup<br />Login<br />Wallet"
  },
  "ru": {
    "home": "Главная страница",
    "description": "Добро пожаловать! Сейчас доступно:",
    "available": "Регистрация<br />Вход<br />Кошелек"
  }
}
</i18n>

<script>
export default {
  name: "Home",

  components: {
    // Carousel: () => import("@components/Home/Carousel.vue"),
    // Tournaments: () => import("@components/Home/Tournaments.vue"),
    // News: () => import("@components/Home/News.vue")
  }
};
</script>

<style lang="scss" scoped>
/deep/a {
  color: $white;
}

.home {
  text-align: left;
  // margin: 50px;

  & > * {
    // margin-bottom: 80px !important;
  }

  &__title {
    margin-top: 0;
  }

  &__welcome {
    font-family: Roboto;

    & > * {
      font-family: Roboto;
    }
    // margin: 0;
  }

  &__carousel {
  }

  &__tournaments {
    max-width: 1080px;
    margin: 0 auto;
  }

  &__other {
    max-width: 1080px;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__news {
    flex-grow: 7;
  }

  &__tops {
    flex-grow: 3;
  }
}

// @media (max-width: 700px) {
//   .home {
//     margin: 20px;
//   }
// }
</style>
