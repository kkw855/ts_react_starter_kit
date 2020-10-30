const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // 라우터 404 에러 Fixed
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },
});