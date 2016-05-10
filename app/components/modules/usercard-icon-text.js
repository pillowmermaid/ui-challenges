import React from 'react'
import { connect } from 'react-redux'
import { likeUser } from '../../actions'

/* A module built out to house the a social media icon and 
a value representing the number of hits per metric.
You can click the heart to 'like' or 'unlike' */
const mapStateToProps = (state) => {
	return{
		user: state.usercardState
	}
}
const mapDispatchToProps = (dispatch) => {
	return {
		onLike: () => dispatch(likeUser())
	}
}
class IconText extends React.Component{
	constructor(props) {
		super(props);
		this.like = this.like.bind(this);
	}
	like(){
		if(this.props.metric === 'likes'){
			this.props.onLike();
		}
	}
	render(){
		let iconTextClass = this.props.type + ' icon-text';
		let iconClass = this.props.metric + ' ' + this.props.user.liked + ' icon';
		return (
			<div className={iconTextClass} onClick={() => this.like()}>
				<div className={iconClass} ></div>
				<div className='text'>{this.props.text}</div>
			</div>
		);
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(IconText);