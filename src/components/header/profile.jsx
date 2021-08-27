import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import PersonImage from '../../assets/images/person.jpg'
import NotificationIcon from '../../assets/images/notification-icon.svg'
import NotificationIconLight from '../../assets/images/notification-icon-light.svg'


const Profile = () => {

    const[token, setToken] = useState(true)

    const loginHandler = () => {
        console.log('add to local storage');
    }

    return (
        token ? (
            <div className="d-flex align-items-center">
                <img className="rounded-circle" width="50px" height="50px" src={PersonImage} alt="person" />
                <div className="d-block mx-3 notification" width="30px" height="30px">
                    <img className="notification__icon" width="30px" height="30px" src={NotificationIcon} alt="person" />
                    <img className="notification__light" width="7px" height="7px" src={NotificationIconLight} alt="person" />
                </div>
                <div className="flag flag__iran"></div>
            </div>
        ) : (
            <Button variant="primary" onClick={loginHandler}>ورود یا عضویت</Button>  
        )
    )
}

export default Profile;
