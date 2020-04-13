const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    mode: "production",
    entry: '../src/index.tsx',
    output: {
        filename:'static/[name].hash.js',
        path: path.resolve(__dirname, './../dist'),
        publicPath: '/'
    },
    devtool: 'source-map',
    module:{
        rules:[
            { est: /\.ts(x?)$/,  loader: 'awesome-typescript-loader'},
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
            template: '../public/index.html',
        }),
        
        // Create the stylesheet under 'styles' directory
        new MiniCssExtractPlugin({
          filename: 'styles/styles.[hash].css'
        })
      ]
}