import React, { useState } from 'react'
import './authForm.css'

//images
import man from '../signup/man.svg';
import Email from '../signup/email.png'
import lock from '../signup/lock.png'
import showpass from '../signup/showpass.gif'

function AuthForm({email}) {
    const [show,setShow] = useState(false)
    const showPassword = ()=>{
      setShow((prev)=>!prev)
    }
    return (
        <div className="auth__form">
           <div className="username">
               <div className="username__img">
                <img src={man} alt="username"/>   
                </div>
                <input type="text" placeholder="username"/>
               </div>
          {email? <div className="email">
               <div className="email__img">
               <img src={Email} alt="email"/>  
               </div>
               <input type="email" placeholder="email"/>
           </div>:''}
           <div className="password">
               <div className="password__img">
               <img src={lock} alt="password"/>
               </div>
               <input type={show?"text":"password"} placeholder="password"/>
               <div className="showpassword__img">
               <img src={showpass} alt="show" onClick={showPassword}/>
               </div>
           </div>
        </div>
    )
}

export default AuthForm

