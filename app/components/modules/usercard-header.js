import React from 'react'
import { connect } from 'react-redux'

class Button extends React.Component{
	render(){
		return (
			<div className='usercard-header-img'>
				{this.props.headerImg}
				<img src={this.props.image} />
			</div>
		);
	}
}

export default connect()(Button);