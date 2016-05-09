import { combineReducers } from 'redux'
import appState from './appState'
import toolbarState from './toolbarState'
import usercardState from './usercardState'

const mainReducer = combineReducers({
	appState,
	toolbarState,
	usercardState
})

export default mainReducer
