const commonPaths = require('./common-path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CheckerPlugin } = require('awesome-typescript-loader');

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
      assets: `${commonPaths.appEntry}/assets/`,
    },
  },
  module: {
    rules: [
      { test: /\.ts(x?)$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'url-loader',
        options: {
          name: '[name].[hash:8].[ext]',
          limit: 4096,
        },
      },
      {
        test: /\.(png|jpe?g|gif|jp2|webp|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[contenthash].[ext]',
          outputPath: 'assets/img',
          esModule: false 
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader','postcss-loader', 'sass-loader' ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${commonPaths.public}/index.html`,
    }),
    new CheckerPlugin(),
  ],
};

module.exports = config;
