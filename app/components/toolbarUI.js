import React from 'react'
import { connect } from 'react-redux'
import Button from './modules/toolbar-button'
import { resetToolbar } from '../actions'
import toolBarAnimate from './toolbarUI-animations'

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