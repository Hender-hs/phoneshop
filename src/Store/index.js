import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Cart } from './modules/Cart/reducer'
import { Products } from './modules/Products/reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({ Cart, Products })

export const store = createStore(reducers, applyMiddleware(thunk))