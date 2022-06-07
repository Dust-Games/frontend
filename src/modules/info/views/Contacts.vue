<template>
  <InfoLayout :component="component" />
</template>

<script lang="ts">
import Vue from "vue";
import ruContacts from "@locales/ru/Contacts.md";
import enContacts from "@locales/en/Contacts.md";

export default Vue.extend({
  name: "InfoContacts",

  components: {
    InfoLayout: () => import("@layouts/Info")
  },

  computed: {
    component(): string {
      if (this.$i18n.locale == "en") {
        return enContacts;
      } else {
        return ruContacts;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
.contacts {
  text-align: left;
  padding: 40px;
  // max-width: 1080px;
  // margin: 0 auto;

  &__title {
    text-transform: uppercase;
  }
}
</style>
