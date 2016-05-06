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
			return this.props.alerts.map(alert => <div className='message btn'>{alert}</div>)
		}
	}
	render(){
		let toolbarOptionClass = 'toolbar-btn btn ' + this.props.selected;
		let toolbarIconClass = 'toolbar-icon ' + this.props.tag;
		let toolbarAlertsId = 'toolbar-alerts-' + this.props.tag;
		return (
			<div className='toolbar-item'>
				<div className={toolbarOptionClass} onClick={() => this.props.onSelected(this.props.id)}>
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