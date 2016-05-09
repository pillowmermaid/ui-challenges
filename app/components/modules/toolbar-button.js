import React from 'react'
import { connect } from 'react-redux'
import { toggleOption, resetToolbar } from '../../actions'
import toolBarAnimate from '../toolbarUI-animations'

const mapStateToProps = (state) => {
	return{
		appState: state.toolbarState
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onSelected: (id) => dispatch(toggleOption(id)),
		onSelection: () => dispatch(resetToolbar())
	}
}
class Button extends React.Component{
	constructor(props){
		super(props);
		this.getNumAlerts = this.getNumAlerts.bind(this);
	}
	getNumAlerts(){
		if (this.props.alerts.length> 0 && this.props.tag !== 'settings'){
			return (<span className='alert-count'>{this.props.alerts.length}</span>)
		}
	}
	getAlerts(){
		if (this.props.selected === 'selected'){
			return this.props.alerts.map(alert => <div className='message btn' onClick={() => {toolBarAnimate.toggleMobileTray(); this.props.onSelection();}}>{alert}</div>)
		}
	}
	render(){
		let toolbarOptionClass = 'toolbar-item ' + this.props.selected;
		let toolbarIconClass = 'toolbar-icon ' + this.props.tag;
		let toolbarWidget = this.props.tag +'-widget';
		let toolbarAlertsId =  this.props.tag + '-target';
		return (
			<div id={toolbarWidget} className={toolbarOptionClass} onClick={() => toolBarAnimate.revealAlerts(this.props.tag, this.props.alerts.length, this.props.selected)}>
				<div className='toolbar-btn btn' onClick={() => this.props.onSelected(this.props.id)}>
					<i className={toolbarIconClass}></i>
					<span className='toolbar-label'>{this.props.label}</span>
					{this.getNumAlerts()}
				</div>
				<div id={toolbarAlertsId} className='alerts'>
					{this.getAlerts()}
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Button);