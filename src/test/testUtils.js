import { createStore } from 'redux'
import reducers from '../client/reducers'

const storeFactory = initialState => createStore(reducers, initialState)

export default storeFactory
