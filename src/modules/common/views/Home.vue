<template>
  <DefaultLayout>
    <div class="home">
      <div class="home__welcome">
        {{ $t("description") }}
        <br />
        <!-- eslint-disable-next-line vue-i18n/no-v-html -->
        <!-- <p v-html="$t('available')" /> -->
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
  </DefaultLayout>
</template>

<i18n>
{
  "en": {
    "home": "Main page",
    "description": "Welcome!"
  },
  "ru": {
    "home": "Главная страница",
    "description": "Добро пожаловать!"
  }
}
</i18n>

<script>
// "description": "Welcome! There is available pages now:",
// "available": "Signup (including via social networks)<br />Login (including via social networks)<br />Sidebar bottom info<br />Linked accounts"

// "description": "Добро пожаловать! Сейчас доступно:",
// "available": "Регистрация (в т.ч. через соцсети)<br />Вход (в т.ч. через соцсети)<br />Информация внизу сайдбара<br />Привязанные аккаунты<br />Таблица для LoR"

export default {
  name: "Home",

  components: {
    DefaultLayout: () => import("@/layouts/Default")
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

  &__welcome {
    // font-family: Roboto;

    & > * + * {
      // font-family: Roboto;
      margin-top: 15px;
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

// @media (max-width: 800px) {
//   .home {
//     margin: 20px;
//   }
// }
</style>
