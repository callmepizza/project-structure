const commonPaths = require('./common-path')
const CircularDependencyPlugin = require('circular-dependency-plugin')
// Plagin speed test bundle
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const path = require('path')
const { UnusedFilesWebpackPlugin } = require('unused-files-webpack-plugin')
const smp = new SpeedMeasurePlugin()
const port = process.env.PORT || 3000

const config = smp.wrap({
  mode: 'development',
  entry: [`${commonPaths.appEntry}/index.tsx`],
  output: {
    filename: 'bundle.[hash].js',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CircularDependencyPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: port,
    historyApiFallback: true,
    open: true,
  },
})

module.exports = config
