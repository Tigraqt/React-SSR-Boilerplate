const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.base.js')

const config = {
  mode: 'production',
  name: 'server',
  target: 'node',
  externals: nodeExternals(),
  entry: './src/server/renderer.js',
  output: {
    filename: 'prod-server-bundle.js',
    path: path.resolve(__dirname, '../build'),
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          { loader: 'css-loader',
            options: {
              modules: true,
              localIdentName: '[name]__[local]--[hash:base64:5]',
              sourceMap: true
            } },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' }
        ]
      },
      {
        test: /\.css$/,
        use: [
          { loader: MiniCSSExtractPlugin.loader },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:8].[ext]',
              emitFile: false
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCSSExtractPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}

module.exports = merge(baseConfig, config)
