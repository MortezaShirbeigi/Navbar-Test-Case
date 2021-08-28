import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import MiniProfile from './miniProfile'
import WebsiteLanguage from './websiteLanguage'
import Notifications from './notifications'
import { getItemLocalStorage, setItemLocalStorage } from '../../../utilities'


const Profile = () => {

    const [token, setToken] = useState(getItemLocalStorage("login"))

    const loginHandler = () => {
        setItemLocalStorage("login", true)
        setToken(true)
    }

    return (
        token ? (
            <div className="d-flex align-items-center">
                <MiniProfile />
                <Notifications />
                <WebsiteLanguage />
            </div>
        ) : (
            <div className="d-flex align-items-center">
                <Button className="text-white m-2" variant="primary" onClick={loginHandler}>ورود یا عضویت</Button>  
                <WebsiteLanguage />
            </div>
        )
    )
}

export default Profile;
