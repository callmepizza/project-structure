const commonPaths = require('./common-path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const { CheckerPlugin } = require('awesome-typescript-loader')

const path = require('path')
const config = {
  output: {
    filename: 'bundle.[hash].js',
    path: commonPaths.outputPath,
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
    alias: {
      common: `${commonPaths.appEntry}/common/`,
      pages: `${commonPaths.appEntry}/pages/`,
      abstraction: `${commonPaths.appEntry}/abstraction/`,
      routes: `${commonPaths.appEntry}/routes/`,
    },
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'resolve-url-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${commonPaths.public}/index.html`,
    }),
    new CheckerPlugin(),
  ],
}

module.exports = config
