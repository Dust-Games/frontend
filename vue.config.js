module.exports = {
    assetsDir: './',
    css: {
        loaderOptions: {
            scss: {
                prependData: `@import "@/assets/scss/_base.scss";`,
            },
        },
    },
};