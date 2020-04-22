<template>
  <div class="team">
    <h1>{{ $t("ourTeam") }}</h1>
    <h2>{{ $t("programmers") }}</h2>
    <div>
      <p>
        {{ $t("frontend") }}
        <a href="https://vk.com/animeshny_kot" target="_blank">{{ $t("vkLink") }}</a>
      </p>
      <p>
        {{ $t("backend") }}
        <a href="https://github.com/kaizzzoku" target="_blank">{{ $t("githubLink") }}</a>
      </p>
      <p>
        {{ $t("arraBot") }}
        <a href="https://vk.com/arramaga" target="_blank">{{ $t("vkLink") }}</a>
      </p>
    </div>
  </div>
</template>

<i18n>
{
  "en": {
    "ourTeam": "Our team",
    "programmers": "Programmers",
    "frontend": "Frontend author: ",
    "backend": "Backend author: ",
    "arraBot": "Arra-bot author: ",
    "vkLink": "VK link",
    "githubLink": "GitHub link"
  },
  "ru": {
    "ourTeam": "Наша команда",
    "programmers": "Программисты",
    "frontend": "Фронтендер: ",
    "backend": "Бекендер: ",
    "arraBot": "Автор АРРА бота: ",
    "vkLink": "ссылка на VK",
    "githubLink": "ссылка на GitHub"
  }
}
</i18n>

<style lang="scss" scoped>
.team {
}
</style>
