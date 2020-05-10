<template>
  <div class="info-layout">
    <h1 class="info-layout__title"><slot name="title" /></h1>
    <div class="info-layout__content">
      <vue-simple-markdown :source="component" :postrender="postRender" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "InfoLayout",

  props: {
    component: { type: String, required: true }
  },

  data() {
    return {};
  },

  methods: {
    /**
     * Разработчики библиотеки неправильно написали некоторые функции
     * (для этого проекта не подходит, по крайней мере), исправила...
     */
    postRender(source: string) {
      const HEADINGS_REGEX = /^(#{1,6}) (.+)/;
      // const LINK_REGEX = /\[(.+?)\]\(.*\)/g;

      let lines: string[] | string = source;

      // Для норм ###
      lines = source.split("\n");
      lines.forEach((line, index, lines) => {
        if (HEADINGS_REGEX.test(line)) {
          const match = HEADINGS_REGEX.exec(line) || [];
          lines[index] = line.replace(
            HEADINGS_REGEX,
            "<h" + match[1].length + ">$2</h" + match[1].length + ">"
          );
        }
      });
      lines = lines.join("\n");

      // Для норм ссылок (не только с http)
      // lines = lines.replace(LINK_REGEX, '<a href="$2" target="_blank">$1</a>');

      return lines;
    }
  }
});
</script>

<style lang="scss">
.markdown-body {
  color: $white !important;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    // margin: 0;
  }

  * {
    font-family: "NotoSans";
    font-size: 14px;
  }
}
</style>

<style lang="scss" scoped>
.info-layout {
  color: $white;

  /deep/a {
    color: $white;
  }

  &__content {
    padding-top: 10px;
    padding-bottom: 50px;
  }
}
</style>
