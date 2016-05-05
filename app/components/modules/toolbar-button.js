import React from 'react'
import { connect } from 'react-redux'
import { toggleOption } from '../../actions'

const mapStateToProps = (state) => {
	return{
		appState: state.toolbarState
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSelected: (id) => dispatch(toggleOption(id))
	}
}
class Button extends React.Component{
	constructor(props) {
		super(props);
		this.getNumAlerts = this.getNumAlerts.bind(this);
	}
	getNumAlerts() {
		if (this.props.alerts.length> 0 && this.props.tag !== 'settings'){
			return (<span className='alert-count'>{this.props.alerts.length}</span>)
		}
	}
	render(){
		let toolbarOptionClass = this.props.selected + ' toolbar-option btn';
		return (
			<div className={toolbarOptionClass} onClick={() => this.props.onSelected(this.props.id)}>
				<span className='toolbar-label'>{this.props.label}</span>
				{this.getNumAlerts()}
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);