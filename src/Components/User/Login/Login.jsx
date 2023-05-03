import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.path || '/'
    const { logInUser, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [error, setError] = useState('')
    const [show, setShow] = useState(false)
    const loginSubmitHandler = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        logInUser(email, password)
            .then((logIn) => {
                const user = logIn.user
                e.target.reset()
                navigate(from, { replace: true })
            })
            .catch((error) => {
                const errorMassage = error.message
                setError(errorMassage)
            })

    }
    const googleSignin = () => {
        googleSignIn()
            .then(result => {
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
            <div className='body signup-container'>
                <form onSubmit={loginSubmitHandler} className="signup-header">
                    <h4 className=' mt-5 mb-3 text-white text-center'>Please Login</h4>
                    <div className="text-center">
                        <input name='email' className='input-field ps-3' type="email" placeholder='Email' required /></div><br />
                    <div className="text-center mb-0">
                        <input name='password' className='input-field ps-3 mb-0' type={show ? "text" : "password"} placeholder='Password' required /></div><br />
                    <p className='mt-0 ms-5'>
                        <small className='text-white'>
                            {show ? <span className='ms-3'><input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Hide Password</span>
                                : <span className='ms-3'><input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Show password</span>}
                        </small>
                    </p>
                    {
                        error && <p className='ms-4 m-0'> <small className='text-white ms-5'>{error}</small></p>
                    } <br />
                    <span>
                        <div className="text-center">
                            <input className='btn bg-white text-black mb-2 mt-3' type="submit" value="Login" /> <br />
                            <div className="d-flex ms-4">
                                <p className='text-white ms-5 mb-5'>Kudil New? <Link to="/signUp">Create An Account</Link></p>
                            </div>
                        </div>
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