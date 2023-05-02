import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const { logInUser, googleSignIn, githubSignIn } = useContext(AuthContext)
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
    const googleSignin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const githubeSignin = () => {
        githubSignIn()
            .then(() => {
                navigate('/')
            })
            .catch(error => {
                setError(error.message)
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
                        <div onClick={googleSignin} className='btn d-flex bg-white align-items-center signUpGoogle mx-auto'>
                            <img className='sign ' src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" alt="" />
                            <strong>Sign in with Google</strong>
                        </div>
                        <div onClick={githubeSignin} className='mb-5 btn d-flex bg-white align-items-center mt-4 signUpGithub mx-auto'>
                            <img className='sign ' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                            <strong>Sign in with Github</strong>

                        </div>
                    </span>
                </form>
            </div >
        </div>
    );
};

export default Login;