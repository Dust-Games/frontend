<template>
  <DefaultLayout>
    <div class="team">
      <h2>{{ $t("ceo") }}</h2>
      <div>
        <p>
          {{ $t("Igor") }}
          <a href="https://vk.com/iokramer" target="_blank">{{ $t("vkLink") }}</a>
        </p>
      </div>

      <h2>{{ $t("programmers") }}</h2>
      <div>
        <p>
          {{ $t("frontend") }}
          <a href="https://vk.com/animeshny_kot" target="_blank">{{ $t("vkLink") }}</a>
        </p>
        <p>
          {{ $t("arraBot") }}
          <a href="https://vk.com/arramaga" target="_blank">{{ $t("vkLink") }}</a>
        </p>
      </div>
    </div>
  </DefaultLayout>
</template>

<i18n>
{
  "en": {
    "programmers": "Programmers",
    "frontend": "Frontend author: ",
    "backend": "Backend author: ",
    "arraBot": "Arra-bot author: ",
    "vkLink": "VK link",
    "githubLink": "GitHub link",

    "ceo": "CEO",
    "Igor": "Igor"
  },
  "ru": {
    "programmers": "Программисты",
    "frontend": "Фронтендер: ",
    "backend": "Бекендер: ",
    "arraBot": "Автор АРРА бота: ",
    "vkLink": "ссылка на VK",
    "githubLink": "ссылка на GitHub",

    "ceo": "CEO",
    "Igor": "Игорь"
  }
}
</i18n>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Info_Team",

  components: {
    DefaultLayout: () => import("@/layouts/Default")
  }
});
</script>

<style lang="scss" scoped>
.team {
}
</style>
