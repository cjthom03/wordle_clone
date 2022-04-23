const path = require('path');
const { merge } = require('webpack-merge');
const ESLintPlugin = require('eslint-webpack-plugin');
const prodConfig = require('./webpack.config');

module.exports = merge(prodConfig, {
  devServer: {
    port: 9000,
    static: {
      directory: path.join(__dirname, 'dist'),
    },
  },
  plugins: [
    new ESLintPlugin(),
  ],
})
