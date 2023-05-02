import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { logInUser } = useContext(AuthContext)
    const [error, setError] = useState('')
    const loginSubmitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logInUser(email, password)
            .then((logIn) => {
                const user = logIn.user
                console.log(user)
                e.target.reset()
                navigate('/')
            })
            .catch((error) => {
                const errorMassage = error.message
                setError(errorMassage)
            })
    }
    return (
        <div className='mt-5'>
            <div className='body text-center signup-container'>
                <form onSubmit={loginSubmitHandler} className="signup-header">
                    <h4 className=' mt-5 mb-3 text-white'>Please Login</h4>
                    <input name='email' className='input-field ps-3' type="email" placeholder='Email' required /><br />
                    <input name='password' className='input-field ps-3' type="password" placeholder='Password' required /><br />
                    {
                        error && <small className='text-white'>{error}</small>
                    } <br />
                    <span>
                        <input className='btn bg-white text-black mb-5' type="submit" value="Login" />
                    </span>
                </form>
            </div >
        </div>
    );
};

export default Login;