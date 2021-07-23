import React from 'react';
import './signIn.css'

//componenet
import AuthForm from '../authform/AuthForm'

function SignIn() {
    return (
        <>
       
            <AuthForm email={false} signIn="Sign In"/>
       
        </>
    )
}

export default SignIn
