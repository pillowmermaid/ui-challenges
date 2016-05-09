import React from 'react'
import { connect } from 'react-redux'

class Button extends React.Component{
	render(){
		let iconClass = 'social-icon ' + this.props.metric;
		return (
			<div className='usercard-social'>
				<i className={iconClass}></i>
				<span>{this.props.value}</span>
			</div>
		);
	}
}

export default connect()(Button);