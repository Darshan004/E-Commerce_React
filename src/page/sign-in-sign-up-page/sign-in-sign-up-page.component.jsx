import React from 'react';

import './sign-in-sign-up-page.styles.scss';

import  SignIn from  '../../component/sign-in/sign-in.component';
import SignUp from '../../component/sign-up/sign-up.component';

const signInSignUpPage = () => (
    <div className = 'sign-in-sign-up-page'>
        <SignIn/>
        <SignUp/>
    </div>
)

export default signInSignUpPage;