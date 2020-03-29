module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "src/assets/styles/abstract/variables";
        `
      }
    }
  },
  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule.use('babel-loader').loader('vue-svg-loader');
  }
};
