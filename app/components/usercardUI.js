import React from 'react'
import { connect } from 'react-redux'
import HeaderImage from './modules/usercard-header'
import UserTagline from './modules/usercard-tagline'
import SocialButton from './modules/usercard-button'

const mapStateToProps = (state) => {
	return{
		user: state.usercardState
	}
}
class UsercardUI extends React.Component{
	render(){
		return (
			<div className='ui-usercard'>
				<HeaderImage image={this.props.user.headerImg} />
				<UserTagline image={this.props.user.headerImg} snippet={this.props.user.snippet} />
				<div className='social-tray clearfix'>
					<SocialButton key='uc-social-1' metric='views' value={this.props.user.views} />
					<SocialButton key='uc-social-2' metric='comments' value={this.props.user.comments} />
					<SocialButton key='uc-social-3' metric='likes' value={this.props.user.likes} />
				</div>
			</div>
		);
	}
}

export default connect(mapStateToProps)(UsercardUI);