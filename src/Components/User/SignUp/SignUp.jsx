import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import './SignUp.css'

const SignUp = () => {
    const user = useContext(AuthContext)
    console.log(user)
    return (
        < div className='signup-container'>

        </div >
    );
};

export default SignUp; 