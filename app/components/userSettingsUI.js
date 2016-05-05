import React from 'react'
import { connect } from 'react-redux'
import Button from './modules/usersettings-button'

class UserSettingsUI extends React.Component{
    render(){
        return (
            <div className='ui-usersettings'>
				<Button />
				<Button />
            </div>
        );
    }
}

export default connect()(UserSettingsUI);