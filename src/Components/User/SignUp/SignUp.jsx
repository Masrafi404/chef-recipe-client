import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const [error, setError] = useState('')
    const [errorSign, setErrorSign] = useState('')
    const [show, setShow] = useState(false)
    const { createUser, googleSignUp, githubSignUp, user } = useContext(AuthContext)
    console.log(user)
    const signUpSubmitHandler = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const img = e.target.image.value
        if (password !== confirmPassword) {
            setError('Confirm Password does not match')
            return;
        }
        else if (password.length < 6) {
            setError('Password must be at least 6 characters long')
            return;
        }
        else if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least on uppercase')
            return;
        }
        else if (!/(?=.*[a-z])/.test(password)) {
            setError('Please add at least on lowercase')
            return
        }
        else if (!/(?=.*[1-9])/.test(password)) {
            setError('Please add at least on number')
            return
        }
        createUser(email, password)
            .then((signinUser) => {
                const user = signinUser.user
                e.target.reset()
                navigate('/')
            })
            .catch((error) => {
                const errorMassage = error.message;
                setErrorSign(errorMassage)
            })
    }

    const googleSignInHandler = () => {
        googleSignUp()
            .then(result => {
                const user = result.user
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    const githubSignInHandler = () => {
        githubSignUp()
            .then(result => {
                const user = result.user
                navigate('/')
            })
            .catch(error => {
                const errorMessage = error.message;
                setError(errorMessage)
            })
    }
    return (
        <div className="body">
            <div className='mt-5 signup-container'>
                <form onSubmit={signUpSubmitHandler} className="signup-header">
                    <h4 className=' mt-5 mb-3 text-white text-center'>Please Register</h4>
                    <div className="text-center">
                        <input name='name' className='input-field ps-3' type="text" placeholder='User Name' required /></div><br />
                    <div className="text-center">
                        <input name='email' className='input-field ps-3' type="email" placeholder='Email' required /></div><br />
                    <div className="text-center">
                        <input name='password' className='input-field-pass ps-3 mb-0' type={show ? "text" : "password"} placeholder='Password' required /></div><br />
                    <p className='mt-0 ms-5'>
                        <small className='text-white'>
                            {show ?
                                <span className='ms-3'><input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Hide Password</span> :
                                <span className='ms-3'><input onClick={() => setShow(!show)} type="checkbox" name="" id="" /> Show password</span>}
                        </small>
                    </p>
                    <div className="text-center">
                        <input name='confirmPassword' className='input-field ps-3' type={show ? "text" : "password"} placeholder='Confirm Password' required /></div><br />
                    <div className="text-center">
                        <input name='image' className='input-field ps-3' type="text" placeholder=' image Url' required /></div> <br />
                    {
                        error && <small className='text-white'>{error}</small>
                    } <br />
                    <div className="text-center">
                        <input className='btn bg-white text-black mt-2' type="submit" value="Register" />

                    </div><br />
                    <div className="d-flex ms-4">
                        <p className='text-white ms-5'>Already Account <Link to="/logIn">Login</Link></p>
                    </div>
                    {
                        errorSign && <small className='text-white'>{errorSign}</small>
                    }

                    <div onClick={googleSignInHandler} className='btn d-flex bg-white align-items-center mt-3 signUpGoogle mx-auto'>
                        <img className='sign ' src="https://cdn-icons-png.flaticon.com/512/2504/2504739.png" alt="" />
                        <strong>Sign up with Google</strong>
                    </div>
                    <div onClick={githubSignInHandler} className='mb-5 btn d-flex bg-white align-items-center mt-4 signUpGithub mx-auto'>
                        <img className='sign ' src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="" />
                        <strong>Sign up with Github</strong>

                    </div>
                </form>
            </div >
        </div>

    );
};

export default SignUp;
