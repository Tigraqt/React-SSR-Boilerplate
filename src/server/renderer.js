import 'babel-polyfill'

import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { matchRoutes, renderRoutes } from 'react-router-config'
import { Provider } from 'react-redux'
import { Helmet } from 'react-helmet'
import serialize from 'serialize-javascript'
import createStore from './createStore'


import Routes from '../client/routes'

export default () => (req, res) => {
  const store = createStore(req)
  const promises = matchRoutes(Routes, req.path).map(({ route }) => (route.loadData
    ? route.loadData(store)
    : null
  )).map(promise => {
    if (promise) {
      return new Promise(resolve => {
        promise.then(resolve).catch(resolve)
      })
    }
    return null
  })

  Promise.all(promises).then(() => {
    const context = {}

    const content = renderToString(
      <Provider store={store}>
        <StaticRouter location={req.path} context={context}>
          <div>{renderRoutes(Routes)}</div>
        </StaticRouter>
      </Provider>
    )

    if (context.url) {
      return res.redirect(301, context.url)
    }

    if (context.notFound) {
      res.status(404)
    }

    const helmet = Helmet.renderStatic()

    return res.send(`
    <html>
    <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      <link href="https://fonts.googleapis.com/css?family=Lato:100,400,700,900" rel="stylesheet">
      ${process.env.NODE_ENV === 'production' ? '<link href="/main.css" rel="stylesheet" />' : ''}
    </head>
      <body>
        <div id="react-root">${content}</div>
        <script>window.INITIAL_STATE = ${serialize(store.getState())}</script>
        <script src="vendor-bundle.js"></script>
        <script src="main-bundle.js"></script>
      </body>
    </html>
  `)
  })
}
