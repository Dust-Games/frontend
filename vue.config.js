const path = require("path");

module.exports = {
  assetsDir: "./",
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@views": path.resolve(__dirname, "src/views"),
        "@components": path.resolve(__dirname, "src/components"),
        "@ui-components": path.resolve(__dirname, "src/ui-components"),
        "@modules": path.resolve(__dirname, "src/modules"),
        "@services": path.resolve(__dirname, "src/services"),
        "@locales": path.resolve(__dirname, "src/locales"),
        "@store": path.resolve(__dirname, "src/store"),
        "@router": path.resolve(__dirname, "src/router")
      }
    },
    module: {
      rules: [
        {
          test: /\.md$/,
          use: [
            {
              loader: "vue-loader",
              options: {
                compilerOptions: {
                  preserveWhiteSpace: false
                }
              }
            },
            {
              loader: "@tianyong90/vue-markdown-loader",
              options: {
                contentCssClass: "markdown-body",
                markdown: {
                  lineNumbers: true // enable linenumber
                }
              }
            }
          ]
        }
      ]
    }
  },
  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "ru",
      localeDir: "locales",
      enableInSFC: true
    }
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "@/assets/scss/_base.scss";`
      }
    }
  }
};
