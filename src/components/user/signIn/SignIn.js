import React from 'react';
import './signIn.css'

//componenet
import AuthForm from '../authform/AuthForm'

function SignIn() {
    return (
        <div className="sign__in">
            <AuthForm email={false}/>
        </div>
    )
}

export default SignIn
