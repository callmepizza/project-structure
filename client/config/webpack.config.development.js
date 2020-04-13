const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './../src/index.tsx'),
  output: {
    filename: 'bundle.[hash].js',
    path: path.resolve(__dirname, './../dist'),
  },
  resolve: {
    extensions: ['.ts', '.js', '.json', '.tsx'],
    alias: {
      common: path.resolve(__dirname, '../src/common/'),
      pages: path.resolve(__dirname, '../src/pages/'),
      abstraction: path.resolve(__dirname, '../src/abstraction/'),
      routes: path.resolve(__dirname, '../src/routes/'),
    },
  },

  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.ts(x?)$/, loader: 'awesome-typescript-loader' },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'url-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              localsConvention: 'camelCase',
              sourceMap: true,
            },
          },
        ],
      },
    ],
  },
  optimization: {
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
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './../public/index.html'),
    }),
    new CheckerPlugin(),
  ],
  devServer: {
    host: 'localhost',
    port: 3001,
    historyApiFallback: true,
    open: true,
  },
}
