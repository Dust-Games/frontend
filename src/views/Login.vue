<template>
  <div class="login">
    <h1 class="login__title">
      Тут должно быть перенаправление на страницу стима.
    </h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',

  components: {
    // Input: () => import('@/ui-components/Input.vue'),
  },

  data() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.login {
  color: $white;
}
</style>
