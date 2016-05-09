import React from 'react'
import { connect } from 'react-redux'

class Button extends React.Component{
	render(){
		return (
			<div className='usercard-user-info'>
				Zesty
			</div>
		);
	}
}

export default connect()(Button);