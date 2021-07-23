import React, { useEffect, useRef, useState } from 'react'
import './User.css';

//components
import SignIn from './signIn/SignIn';
import SignUp from './signup/SignUp';


function User() {
    const [authState,setAuthState] = useState('Sign In');
    const signInTabColor = useRef();
    const signUpTabColor = useRef();
    const userAuthAction = (e)=>{
      setAuthState(e.target.innerText);

    }
    useEffect(()=>{
    if(authState==="Sign In"){
      signInTabColor.current.style.backgroundColor = '#65a6f399';
      signUpTabColor.current.style.backgroundColor = '#ffffff00';
    }else{
      signUpTabColor.current.style.backgroundColor = '#65a6f399';
      signInTabColor.current.style.backgroundColor = '#ffffff00';
    }
    },[authState])
    return (
        <div className="user__wrapper">
            <div className="user">
                <div className="user__tabs">
                    <div className="user__tabs__sign__in" onClick={userAuthAction} ref={signInTabColor}>Sign In</div>
                    <div className="user__tabs__sign__up" onClick={userAuthAction} ref={signUpTabColor}>Sign Up</div>
                </div>
              {authState==="Sign In"?(<SignIn/>):<SignUp/>}
            </div>
        </div>
    )
}

export default User

//     background: #65a6f399;

// original #65A6F3
