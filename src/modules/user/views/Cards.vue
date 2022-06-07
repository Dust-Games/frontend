<template>
  <DefaultLayout>
    Картоооочки
  </DefaultLayout>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "User_Cards",

  components: {
    DefaultLayout: () => import("@/layouts/Default")
  }
});
</script>
