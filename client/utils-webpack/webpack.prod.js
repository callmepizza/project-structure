const commonPaths = require('./common-path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const config = {
  mode: 'production',
  entry: [`${commonPaths.appEntry}/index.tsx`],
  output: {
    filename: 'static/[name].hash.js',
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(png|jpg|jpeg|gif|ico|svg|webp)$/,
        loader: 'url-loader',
        options: {
          name: 'images/[name].[hash:8].[ext]',
          publicPath: '/dist/',
          limit: 4096,
        },
      },
      {
        test: /\.(woff|woff2|ttf|eot|otf)$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[hash:8].[ext]',
          publicPath: '/dist/',
          limit: 4096,
        },
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          {
            loader: 'css-loader',
          },
          { loader: 'postcss-loader' },
        ],
      },
    ],
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    splitChunks: {
      cacheGroups: {
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true,
        },
        vendor: {
          chunks: 'initial',
          test: 'vendor',
          name: 'vendor',
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles/styles.[hash].css',
    }),
  ],
}

module.exports = config
