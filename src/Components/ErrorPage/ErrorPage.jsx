import React, { useContext } from 'react';
import './error.css'
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';
const ErrorPage = () => {

    const history = useNavigate();
    return (
        <div className='text-center mt-5 error-container'>
            <div className='mt-3'>
                <Link className='back grad btn me-5' to="/">Back to Home</Link>
                <Link className='go grad btn' onClick={() => history(-1)}> Go Back</Link >
            </div>
            <img className='image-404' src="https://e7.pngegg.com/pngimages/319/145/png-clipart-http-404-user-interface-design-design-purple-text.png" alt="" />
        </div >
    );
};

export default ErrorPage;