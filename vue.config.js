const { mocker } = require('http-mockjs');

module.exports = {
  assetsDir: 'static',
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/styles/variables.scss";',
      },
    },
  },
  devServer: {
    before: (app) => {
      mocker(app);
    },
  },
  transpileDependencies: ['vant'],
  lintOnSave: false,
  productionSourceMap: false,
};
