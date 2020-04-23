const path = require("path");

module.exports = {
  assetsDir: "./",
  chainWebpack: config => {
    config.module
      .rule("i18n")
      .resourceQuery(/blockType=i18n/)
      .type("javascript/auto")
      .use("i18n")
      .loader("@kazupon/vue-i18n-loader");
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        "@assets": path.resolve(__dirname, "src/assets"),
        "@views": path.resolve(__dirname, "src/views"),
        "@layouts": path.resolve(__dirname, "src/layouts"),
        "@components": path.resolve(__dirname, "src/components"),
        "@ui-components": path.resolve(__dirname, "src/ui-components"),
        "@constructors": path.resolve(__dirname, "src/constructors"),
        "@modules": path.resolve(__dirname, "src/modules"),
        "@services": path.resolve(__dirname, "src/services"),
        "@locales": path.resolve(__dirname, "src/locales"),
        "@store": path.resolve(__dirname, "src/store"),
        "@router": path.resolve(__dirname, "src/router")
      }
    },
    module: {
      rules: [{
        test: /\.md$/,
        use: [{
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
      }]
    }
  },
  pluginOptions: {
    i18n: {
      locale: "ru",
      fallbackLocale: "ru"
        // localeDir: "locales",
        // enableInSFC: true
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