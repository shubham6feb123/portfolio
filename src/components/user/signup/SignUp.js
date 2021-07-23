import React from 'react'
import './signUp.css'

//images
// import man from '../signup/man.svg';
// import email from '../signup/email.png'
// import lock from '../signup/lock.png'
// import showpass from '../signup/showpass.gif'

//component
import AuthForm from '../authform/AuthForm';

function SignUp() {
    // const [show,setShow] = useState(false)
    // const showPassword = ()=>{
    //   setShow((prev)=>!prev)
    // }
    return (
        <>
       
            <AuthForm email={true} signUp={true}/>
           {/* <div className="username">
               <div className="username__img">
                <img src={man} alt="username"/>   
                </div>
                <input type="text" placeholder="username"/>
               </div>
           <div className="email">
               <div className="email__img">
               <img src={email} alt="email"/>  
               </div>
               <input type="email" placeholder="email"/>
           </div>
           <div className="password">
               <div className="password__img">
               <img src={lock} alt="password"/>
               </div>
               <input type={show?"text":"password"} placeholder="password"/>
               <div className="showpassword__img">
               <img src={showpass} alt="show" onClick={showPassword}/>
               </div>
           </div> */}
 
        </>
    )
}

export default SignUp

