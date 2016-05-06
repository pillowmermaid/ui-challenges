import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app'
import mainReducer from './reducers'
import { toolbarInit } from './actions'

import toolbar from './data/toolbar.json';
import './animation'

let store = createStore(
    mainReducer
);

toolbar.toolbarButtons.map(button => store.dispatch(toolbarInit(button.alerts, button.label, button.tag)))

console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)