const path = require('path')
const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    outputDir: './dist',
    assetsDir: 'static',
    filenameHashing: true, // false 来关闭文件名哈希
    lintOnSave: false, // 关闭eslint
    productionSourceMap: false, //  调整内部的 webpack 配置

    configureWebpack: config => {}, //(Object | Function)

    chainWebpack: config => {
        config.entry.app = [resolve('src/main.js')]
        config.resolve.alias
            .set('@', resolve('src'))
            .set('cpt', resolve('src/components'))
    },

    // CSS 相关选项
    css: {
        // 将组件内的 CSS 提取到一个单独的 CSS 文件 (只用在生产环境中)

        // 也可以是一个传递给 `extract-text-webpack-plugin` 的选项对象

        extract: true,

        // 为预处理器的 loader 传递自定义选项。比如传递给 // Css-loader 时，使用 `{ Css: { ... } }`。
        loaderOptions: {
            css: {
                // 这里的选项会传递给 css-loader
            },

            postcss: {
                // 这里的选项会传递给 postcss-loader
            }
        }, // 为所有的 CSS 及其预处理文件开启 CSS Modules。 // 这个选项不会影响 `*.vue` 文件。

        modules: false
    },
    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader` // 在多核机器下会默认开启。

    parallel: require('os').cpus().length > 1,
    // PWA 插件的选项。 // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md

    pwa: {},
    // 三方插件的选项

    pluginOptions: {
        // ...
    }
}
