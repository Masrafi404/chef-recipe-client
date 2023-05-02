import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const { logInUser } = useContext(AuthContext)
    const loginSubmitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logInUser(email, password)
            .then((logIn) => {
                const user = logIn.user
                console.log(user)
                e.target.reset()
            })
            .catch((error) => {
                const errorMassage = error.massage
                console.log(error)
                console.log(errorMassage)
            })
    }
    return (
        <div className='mt-5'>
            <div className='body text-center signup-container'>
                <form onSubmit={loginSubmitHandler} className="signup-header">
                    <h4 className=' mt-5 mb-3 text-white'>Please Login</h4>
                    <input name='email' className='input-field ps-3' type="email" placeholder='Email' required /><br />
                    <input name='password' className='input-field ps-3' type="password" placeholder='Password' required /><br />
                    <input className='btn bg-white text-black mb-5' type="submit" value="Login" />
                </form>
            </div >
        </div>
    );
};

export default Login;