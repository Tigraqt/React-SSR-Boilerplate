import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import axios from 'axios'
import reducers from './reducers'

const axiosInstance = axios.create({
  baseURL: '/api'
})

const CreateStore = initialState => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(thunk.withExtraArgument(axiosInstance))
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      const nextRootReducer = require('./reducers/index') // eslint-disable-line global-require
      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

const store = CreateStore(window.INITIAL_STATE)

export default store
