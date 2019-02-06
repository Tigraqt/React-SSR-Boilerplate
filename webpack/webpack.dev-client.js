const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.base.js')

const config = {
  mode: 'development',
  name: 'client',
  devtool: 'eval-source-map',
  entry: {
    vendor: ['react', 'react-dom', 'react-router-dom', 'redux', 'react-redux'],
    main: [
      'webpack-hot-middleware/client?reload=true',
      'react-hot-loader/patch',
      './src/client/index.js'
    ]
  },
  output: {
    filename: '[name]-bundle.js',
    path: path.resolve(__dirname, '../public'),
    publicPath: '/'
  },
  devServer: {
    hot: true,
    contentBase: 'public',
    overlay: true,
    stats: {
      colors: true
    }
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
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
          { loader: 'style-loader' },
          { loader: 'css-loader' }
        ]
      },
      {
        test: /\.(png|jpeg|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'images/[name]-[hash:8].[ext]'
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    })
  ]
}

module.exports = merge(baseConfig, config)
