import React from 'react'
import { connect } from 'react-redux'
import { toggleState } from '../actions'

const mapStateToProps = (state) => {
	return{
		appState: state.appState
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onToggleState: (appState) => dispatch(toggleState(appState))
	}
}
class AppController extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className='app-controller'>
				<div className='btn' onClick={() => this.props.onToggleState(1)}>View 1</div>
				<div className='btn' onClick={() => this.props.onToggleState(2)}>View 2</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppController);