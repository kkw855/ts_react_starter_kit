const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

console.log('웹팩 Development 빌드');
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  // 라우터 404 에러 Fixed
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    hot: true
  },

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.development"),
    })
  ],
});