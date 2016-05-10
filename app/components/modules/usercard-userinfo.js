import React from 'react'
import { connect } from 'react-redux'

/* A module built out to house the user avatar, their name
and a brief description */

class IconText extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div className={this.props.type}>
				<div className='user-icon-container'>
					<div className='icon'></div>
				</div>
				<div className='text'>	
					<h2>{this.props.name}</h2>
					<span>{this.props.text}</span>
				</div>
			</div>
		);
	}
}

export default connect()(IconText);