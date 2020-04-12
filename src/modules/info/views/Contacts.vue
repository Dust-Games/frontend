<template>
  <Layout>
    <template #title>{{ $t("contacts") }}</template>
    <template #content>
      <component :is="componentName" />
    </template>
  </Layout>
</template>

<i18n>
{
  "en": {
    "contacts": "Contacts"
  },
  "ru": {
    "contacts": "Контакты"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import ruContacts from "@locales/ru/Contacts.md";
import enContacts from "@locales/en/Contacts.md";

export default Vue.extend({
  name: "InfoContacts",

  components: {
    ruContacts,
    enContacts,
    Layout: () => import("../layouts/Info")
  },

  computed: {
    componentName(): string {
      if (this.$i18n.locale == "en") {
        return "enAbout";
      } else {
        return "ruAbout";
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
