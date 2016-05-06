import React from 'react'
import { connect } from 'react-redux'
import Button from './modules/toolbar-button'

const mapStateToProps = (state) => {
	return{
		buttons: state.toolbarState
	}
}

class ToolbarUI extends React.Component{
	render(){
		return (
			<div className='ui-toolbar row'>
				<div className='collapse-toolbar btn'>=</div>
				{this.props.buttons.map(button => <Button key={button.id} {...button} />)}
			</div>
		);
	}
}

export default connect(mapStateToProps)(ToolbarUI);