import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import './SignUp.css'
const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser } = useContext(AuthContext)
    const signUpSubmitHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        createUser(email, password)
            .then((signinUser) => {
                const user = signinUser.user
                console.log(user)
                e.target.reset()
            })
            .catch((error) => {
                const errorMassage = error.massage;
                console.log(error)
            })
    }
    return (
        <div className="body">
            <div className='mt-5 text-center signup-container'>
                <form onSubmit={signUpSubmitHandler} className="signup-header">
                    <h4 className=' mt-5 mb-3 text-white'>Please Register</h4>
                    <input name='name' className='input-field ps-3' type="text" placeholder='User Name' required /><br />
                    <input name='email' className='input-field ps-3' type="email" placeholder='Email' required /><br />
                    <input name='password' className='input-field ps-3' type="password" placeholder='Password' required /><br />
                    <input name='confirmPassword' className='input-field ps-3' type="password" placeholder='Confirm Password' required /><br />

                    <input className='btn bg-white text-black mb-5' type="submit" value="Register" />
                </form>
            </div >
        </div>

    );
};

export default SignUp; 
