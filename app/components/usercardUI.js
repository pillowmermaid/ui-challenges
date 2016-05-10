import React from 'react'
import { connect } from 'react-redux'
import UserInfo from './modules/usercard-userinfo'
import IconText from './modules/usercard-icon-text'

/*The second UI choice was based on the Google+-like 
user card.
It consists of 2 components that connect to the usercardState
to build the user information and the social icon features.
It will shrink after a 600px viewport for a more mobile-friendly
viewing experience.*/ 
const mapStateToProps = (state) => {
	return{
		user: state.usercardState
	}
}
class UsercardUI extends React.Component{
	constructor(props) {
		super(props);
	}
	render(){
		return (
			<div id='ui-usercard'>
				<div className='header-image'></div>
				<UserInfo type='user-info clearfix' name={this.props.user.username} text={this.props.user.snippet} />
				<div className='social-tray clearfix'>
					<IconText key='uc-social-1' type='social' metric='views' text={this.props.user.views} />
					<IconText key='uc-social-2' type='social' metric='comments' text={this.props.user.comments} />
					<IconText key='uc-social-3' type='social' metric='likes' text={this.props.user.likes} />
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(UsercardUI);