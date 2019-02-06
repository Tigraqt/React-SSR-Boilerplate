import React from 'react'
import PropTypes from 'prop-types'
import { renderRoutes } from 'react-router-config'
import { fetchCurrentUser } from './actions'

import Header from './components/header/header'

import style from './app.scss'

export const App = ({ route }) => (
  <div className={style.wrapper}>
    <Header />
    <div className={style.content}>{renderRoutes(route.routes)}</div>
  </div>
)

App.propTypes = {
  route: PropTypes.shape().isRequired
}

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}
