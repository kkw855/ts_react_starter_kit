const path = require('path');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');

console.log('웹팩 Production 빌드');
module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',

  plugins: [
    new Dotenv({
      path: path.resolve(__dirname, "./.env.production"),
    })
  ],
});
