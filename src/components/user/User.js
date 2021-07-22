import React, { useState } from 'react'
import './User.css';

function User() {
    const [authState,setAuthState] = useState('Sign In');
    const userAuthAction = (e)=>{
    //   console.log('value',e.target.innerText)
      setAuthState(e.target.innerText);
    }
    return (
        <div className="user__wrapper">
            <div className="user">
                <div className="user__tabs">
                    <div className="user__tabs__sign__in" onClick={userAuthAction}>Sign In</div>
                    <div className="user__tabs__sign__up" onClick={userAuthAction}>Sign Up</div>
                </div>
              {authState==="Sign In"?"sign In":"sign up"}
            </div>
        </div>
    )
}

export default User
