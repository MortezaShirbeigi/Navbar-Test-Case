import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import PersonImage from '../../assets/images/person.jpg'
import iranFlag from '../../assets/images/iran-flag.svg'


const Profile = () => {

    const[token, setToken] = useState(true)

    const loginHandler = () => {
        console.log('add to local storage');
    }

    return (
        token ? (
            <div className="d-flex align-items-center">
                <img className="rounded-circle" width="50px" height="50px" src={PersonImage} alt="person" />
                <img className="rounded-circle" width="50px" height="50px" src={iranFlag} alt="person" />
                <div className="flag"></div>
            </div>
        ) : (
            <Button variant="primary" onClick={loginHandler}>ورود یا عضویت</Button>  
        )
    )
}

export default Profile;
