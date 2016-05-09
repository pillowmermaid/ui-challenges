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
				<h4>UI Challenges</h4>
				<div className='app-btn-row'>
					<div className='btn' onClick={() => this.props.onToggleState(1)}>Alert Menu</div>
					<div className='btn' onClick={() => this.props.onToggleState(2)}>User Card</div>
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AppController);