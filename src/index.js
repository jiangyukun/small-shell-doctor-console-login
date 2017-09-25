import 'babel-polyfill'
import 'isomorphic-fetch'
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, combineReducers, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from './reducers/'
import App from './App'
import './css/index.scss'


const allReducers = combineReducers({...reducers})

const store = createStore(allReducers, {}, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
