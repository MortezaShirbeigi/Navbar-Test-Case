import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import MiniProfile from './miniProfile'
import WebsiteLanguage from './websiteLanguage'
import Notifications from './notifications'


const Profile = () => {

    const[token, setToken] = useState(true)

    const loginHandler = () => {
        console.log('add to local storage');
    }

    return (
        token ? (
            <div className="d-flex align-items-center">
                <MiniProfile />
                <Notifications />
                <WebsiteLanguage />
            </div>
        ) : (
            <Button variant="primary" onClick={loginHandler}>ورود یا عضویت</Button>  
        )
    )
}

export default Profile;
