import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './components/app'
import mainReducer from './reducers'
import { toolbarInit, getUser } from './actions'

import toolbar from './data/toolbar.json';
import usercard from './data/usercard.json';


let store = createStore(
    mainReducer
);

toolbar.toolbarButtons.map(button => store.dispatch(toolbarInit(button.alerts, button.label, button.tag)))
store.dispatch(getUser(usercard.header_img, usercard.user_img, usercard.user_snippet, usercard.likes, usercard.comments, usercard.likes))

console.log(store.getState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)