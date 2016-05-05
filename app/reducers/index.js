import { combineReducers } from 'redux'
import appState from './appState'
import toolbarState from './toolbarState'

const mainReducer = combineReducers({
	appState,
	toolbarState
})

export default mainReducer
