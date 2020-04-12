<template>
  <carousel :perPage="1" :navigationEnabled="true" class="carousel">
    <slide class="carousel__slide">
      {{ $t("content", 0) }}
    </slide>
    <slide class="carousel__slide">
      {{ $t("content", 1) }}
    </slide>
    <slide class="carousel__slide">
      {{ $t("content", 2) }}
    </slide>
    <slide class="carousel__slide">
      {{ $t("content", 1) }}
    </slide>
  </carousel>
</template>

<i18n>
{
  "en": {
    "content": ["About", "About 2", "About 3"]
  },
  "ru": {
    "content": ["О нас", "About 33", "About 44"]
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HomeCarousel"
});
</script>

<style lang="scss" scoped>
.carousel {
  &__slide {
    width: 100%;
    height: 400px;
    background: $gray-light;
  }
}
</style>
