<template>
  <carousel :perPage="1" :navigationEnabled="true" class="carousel">
    <slide class="carousel__slide">
      Slide 1 Content
    </slide>
    <slide class="carousel__slide">
      Slide 2 Content
    </slide>
    <slide class="carousel__slide">
      Slide 3 Content
    </slide>
    <slide class="carousel__slide">
      Slide 4 Content
    </slide>
  </carousel>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'HomeCarousel',
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
