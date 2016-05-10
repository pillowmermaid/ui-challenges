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

/* A couple of UI challenges taken from
http://pixelkit.com/kits/metro-ui-kit */

// Combines the reducers into one to be used by the store
let store = createStore(
    mainReducer
);

// initializes the state stores for each widget
toolbar.toolbarButtons.map(button => store.dispatch(toolbarInit(button.alerts, button.label, button.tag)))
store.dispatch(getUser(usercard.user_name, usercard.user_snippet, usercard.likes, usercard.comments, usercard.likes))

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)