<template>
  <InfoLayout :component="component">
    <template #title>
      <div class="rules__header">
        <h1 class="rules__title">{{ $t("rules") }}</h1>
        <Button class="rules__back" theme="blue-steel" @click.prevent="toLeague()">
          {{ $t("back") }}
        </Button>
      </div>
    </template>
  </InfoLayout>
</template>

<i18n>
{
  "en": {
    "rules": "League rules",
    "back": "Back to league"
  },
  "ru": {
    "rules": "Регламент лиги",
    "back": "Назад к лиге"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";
import ruLeagueRules from "@locales/ru/LeagueRules.md";
import enLeagueRules from "@locales/en/LeagueRules.md";

export default Vue.extend({
  name: "LeagueRules",

  components: {
    InfoLayout: () => import("@layouts/Info"),
    Button: () => import("@ui-components/Button")
  },

  computed: {
    component(): string {
      if (this.$i18n.locale == "en") {
        return enLeagueRules;
      } else {
        return ruLeagueRules;
      }
    }
  },

  methods: {
    toLeague() {
      this.$router.push("/leagues");
    }
  }
});
</script>

<style lang="scss" scoped>
.rules {
  &__header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }

  &__title {
    margin: 0;
    margin-right: 15px;
  }

  &__back {
    font-size: 14px;
  }
}
</style>
