import React from 'react';
import './error.css'
import { Link, useNavigate } from 'react-router-dom';
const ErrorPage = () => {

    const history = useNavigate();
    return (
        <div className='text-center mt-auto error-container'>
            <h1> <span className='text-warning'>404</span><span className='text-danger'> Error Page</span> </h1>
            <p className='p'>Sorry, This page doesn't exist</p>
            <Link className='back grad btn me-5' to="/">Back to Home</Link>
            <Link className='go grad btn' onClick={() => history(-1)}> Go Back</Link >
        </div >
    );
};

export default ErrorPage;