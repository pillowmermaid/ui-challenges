import React from 'react'
import { connect } from 'react-redux'
import Button from './modules/toolbar-button'
import { resetToolbar } from '../actions'
import toolBarAnimate from './toolbarUI-animations'

/*The first UI choice was based on the alert menu.
It consists of a single component that connects to the toolbarState
to build the buttons.
It will collapse into a simple slide menu after a 600px 
viewport for a more mobile-friendly viewing experience.*/  
const mapStateToProps = (state) => {
	return{
		buttons: state.toolbarState
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSelection: () => dispatch(resetToolbar())
	}
}
class ToolbarUI extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className='ui-toolbar'>
				<div className='mobile-header'>
					<div id='collapse-toolbar' className='btn' onClick={() => {toolBarAnimate.toggleMobileTray(); this.props.onSelection();}}></div>
				</div>
				<div id='ui-options'>
					{this.props.buttons.map(button => <Button key={button.id} {...button} />)}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ToolbarUI);