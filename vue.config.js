
const pxtorem = require('postcss-pxtorem')

module.exports = {
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
          @import '@/assets/custom_theme.scss';
          @import '@nutui/nutui/dist/styles/index.scss';
          `,
      },
      postcss: {
        plugins: [
          require('autoprefixer')({
            overrideBrowserslist: ['last 2 versions'],
          }),
          pxtorem({
            rootValue: 37.5,
            propList: ['*'],
          }),
        ],
      },
    },
  },
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')
    svgRule.uses.clear()
    svgRule
      .use('vue-svg-loader')
      .loader('raw-loader')
      .tap((options) => {
        options = {
          esModule: false,
        }
        return options
      })
  },
}
