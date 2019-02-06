import 'ignore-styles'

import express from 'express'
import webpack from 'webpack'
import webpackHotServerMiddleware from 'webpack-hot-server-middleware'
import proxy from 'express-http-proxy'

import configDevClient from '../../webpack/webpack.dev-client'
import configDevServer from '../../webpack/webpack.dev-server'
import configProdClient from '../../webpack/webpack.prod-client'
import configProdServer from '../../webpack/webpack.prod-server'

const app = express()

app.use(
  '/api',
  proxy('http://react-ssr-api.herokuapp.com', {
    proxyReqOptDecorator(opts) {
      opts.headers['x-forwarded-host'] = 'localhost:3000'
      return opts
    }
  })
)

const isProd = process.env.NODE_ENV === 'production'

if (!isProd) {
  const compiler = webpack([configDevClient, configDevServer])
  const clientCompiler = compiler.compilers[0]

  const webpackDevMiddleware = require('webpack-dev-middleware')(compiler, configDevClient.devServer) // eslint-disable-line global-require
  const webpackHotMiddleware = require('webpack-hot-middleware')(clientCompiler, configDevClient.devServer) // eslint-disable-line global-require

  app.use(webpackDevMiddleware)
  app.use(webpackHotMiddleware)
  app.use(webpackHotServerMiddleware(compiler))
} else {
  webpack([configProdClient, configProdServer]).run(() => {
    const renderProd = require('../../build/prod-server-bundle.js').default // eslint-disable-line global-require

    const expressStaticGzip = require('express-static-gzip') // eslint-disable-line global-require
    app.use(
      expressStaticGzip('public', {
        enableBrotli: true,
        index: false,
        orderPreference: ['br']
      })
    )
    app.use(renderProd())
  })
}

const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV} ...`) // eslint-disable-line
})
