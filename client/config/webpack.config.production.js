const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')
module.exports = {
    mode: "production",
    entry:  path.resolve(__dirname, './../src/index.tsx'),
    output: {
        filename:'static/[name].hash.js',
        path: path.resolve(__dirname, './../dist'),
        publicPath: '../'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.js', '.json', '.tsx'],
      alias: {
        common: path.resolve(__dirname, '../src/common/'),
        pages: path.resolve(__dirname, '../src/pages/'),
        abstraction: path.resolve(__dirname, '../src/abstraction/'),
        routes: path.resolve(__dirname, '../src/routes/'),
      },
    },
  
    module:{
        rules:[
            { test: /\.ts(x?)$/,  loader: 'awesome-typescript-loader'},
            {
              test: /\.s[ac]ss$/i,
              use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.css$/,
                use: [
                  { loader: MiniCssExtractPlugin.loader },
                  {
                    loader: 'css-loader',
                    options: {
                      modules: true,
                      importLoaders:1,
                      localsConvention: 'camelCase',
                      sourceMap: true,
                    },
                  },
                  {loader: 'postcss-loader'},
                ],
              },
        ]
    },
    optimization: {
        splitChunks: {
          cacheGroups: {
            styles: {
              name: 'styles',
              test: /\.css$/,
              chunks: 'all',
              enforce: true
            },
            vendor: {
              chunks: 'initial',
              test: 'vendor',
              name: 'vendor',
              enforce: true
            }
          }
        }
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, './../public/index.html'),
        }),
        
        new MiniCssExtractPlugin({
          filename: 'styles/styles.[hash].css'
        }),
        new CheckerPlugin(),
      ]
}