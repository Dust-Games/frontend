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
      rules: [
        {
          test: /\.md$/,
          loader: "raw-loader" // npm install -D raw-loader
        }
        // {
        //   test: /\.css$/i,
        //   use: ["css-loader"]
        // }
        // {
        //   test: /\.css$/,
        //   use: [
        //     "vue-style-loader",
        //     {
        //       loader: "css-loader",
        //       options: {
        //         // включаем CSS модули
        //         modules: true,
        //         // настраиваем генерируемое имя класса
        //         localIdentName: "[local]_[hash:base64:8]"
        //       }
        //     }
        //   ]
        // }
      ]
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
