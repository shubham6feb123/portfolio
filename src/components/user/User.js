import React, { useEffect, useRef, useState } from 'react'
import './User.css';

//components
import SignIn from './signIn/SignIn';
import SignUp from './signup/SignUp';


function User() {
    const [authState,setAuthState] = useState('Sign In');
    const tabsSignInColor = useRef();
    const tabsSignUpColor = useRef();
    const userAuthAction = (e)=>{
      setAuthState(e.target.innerText);
    //   console.log(e);
      console.log(tabsSignInColor.current.innerText)
      console.log(tabsSignUpColor.current.innerText)
    //   if(tabsColor.current.innerText==="Sign In"){
    //     tabsColor.current.style.backgroundColor = 'red';
    //     tabsColor.nextElementSibling.style.backgroundColor = 'pink';
    //   }else if(tabsColor.current.innerText==="Sign Up"){
    //     tabsColor.previousElementSibling.style.backgroundColor = 'pink';
    //       tabsColor.current.style.backgroundColor = 'red';
    //   }
    }
    useEffect(()=>{

    })
    return (
        <div className="user__wrapper">
            <div className="user">
                <div className="user__tabs">
                    <div className="user__tabs__sign__in" onClick={userAuthAction} ref={tabsSignInColor}>Sign In</div>
                    <div className="user__tabs__sign__up" onClick={userAuthAction} ref={tabsSignUpColor}>Sign Up</div>
                </div>
              {authState==="Sign In"?(<SignIn/>):<SignUp/>}
            </div>
        </div>
    )
}

export default User
