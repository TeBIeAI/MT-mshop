const path = require('path')
// const autoprefixer = require('autoprefixer')
// const pxtorem = require('postcss-pxtorem')
const resolve = dir => {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: '/',
    outputDir: './dist',
    assetsDir: 'static',
    filenameHashing: true, // false 来关闭文件名哈希
    lintOnSave: false,
    productionSourceMap: false, //  调整内部的 webpack 配置

    configureWebpack: config => {}, //(Object | Function)

    chainWebpack: config => {
        config.entry.app = [resolve('src/main.js')]
        config.resolve.alias
            .set('@', resolve('src'))
            .set('cpt', resolve('src/components'))

        // svg rule loader
        const svgRule = config.module.rule('svg') // 找到svg-loader
        svgRule.uses.clear() // 清除已有的loader, 如果不这样做会添加在此loader之后
        svgRule.exclude.add(/node_modules/) // 正则匹配排除node_modules目录
        svgRule // 添加svg新的loader处理
            .test(/\.svg$/)
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader')
            .options({
                symbolId: 'icon-[name]'
            })
        // 修改images loader 添加svg处理
        const imagesRule = config.module.rule('images')
        imagesRule.exclude.add(resolve('src/assets/icons'))
        config.module.rule('images').test(/\.(png|jpe?g|gif|svg)(\?.*)?$/)
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
                // plugins: [
                //     autoprefixer(),
                //     pxtorem({
                //         rootValue: 37.5,
                //         propList: ['*']
                //     })
                // ]
            }
        }
    },
    // 在生产环境下为 Babel 和 TypeScript 使用 `thread-loader` // 在多核机器下会默认开启。

    parallel: require('os').cpus().length > 1,
    // PWA 插件的选项。 // 查阅 https://github.com/vuejs/vue-docs-zh-cn/blob/master/vue-cli-plugin-pwa/README.md

    pwa: {},
    // 三方插件的选项

    pluginOptions: {
        // autoprefixer: {
        //     browsers: ['Android >= 4.0', 'iOS >= 8']
        // },
        // 'postcss-pxtorem': {
        //     rootValue: 37.5,
        //     propList: ['*']
        // }
    }
}
