<template>
  <div class="home">
    <Carousel class="home__carousel" />
    <Tournaments class="home__tournaments" />
    <div class="home__other">
      <News class="home__news" />
      <div class="home__tops">
        TOPS
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {
    Carousel: () => import("@components/Home/Carousel.vue"),
    Tournaments: () => import("@components/Home/Tournaments.vue"),
    News: () => import("@components/Home/News.vue")
  }
};
</script>

<style lang="scss" scoped>
/deep/a {
  color: $white;
}

.home {
  color: $white;

  & > * {
    margin-bottom: 80px !important;
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
</style>
