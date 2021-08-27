import { Button } from 'react-bootstrap'
import React, { useState } from 'react'



const Profile = () => {

    const loginHandler = () => {
        console.log('add to local storage');
    }

    return (
        <>
          <Button variant="primary" onClick={loginHandler}>ورود یا عضویت</Button>  
        </>
    )
}

export default Profile;
