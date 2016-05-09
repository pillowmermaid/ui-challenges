import React from 'react'
import { connect } from 'react-redux'
import AppController from './appController'
import ToolbarUI from './toolbarUI'
import UserSettingsUI from './userCardUI'

//css
import '../css/styles.css'

const mapStateToProps = (state) => {
	return{
		appState: state.appState
	}
}
class App extends React.Component{
	render(){
		let activeWidget = ''
		switch(this.props.appState.appState) {
			case 1:
				activeWidget = <ToolbarUI />
				break;
			case 2:
				activeWidget = <UserSettingsUI />
				break;
			default:
				activeWidget = ''
				break;
		}
		return (
			<div className='app-root'>
				<AppController />
				<div className='active-app'>
					{activeWidget}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(App);