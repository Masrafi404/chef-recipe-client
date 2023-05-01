import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    const logOut = () => {

    }
    return (
        <div className=''>
            <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid container">
                    <Link className="navbar-brand" to="/"><img src="https://dtkudil.wpenginepowered.com/wp-content/themes/kudil/images/light-logo.png" alt="" /></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto gap-3">
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/recipe">Recipe</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" aria-current="page" to="/contact">contact</Link>
                            </li>

                        </ul>
                        <span className="navbar-text text-white">
                            <Link to="signUp" className='hover btn bg-white me-3'>Sign In</Link>
                            <Link to="logIn" className='hover btn bg-white me-3'>Login</Link>
                            <Link onClick={logOut} className='hover btn bg-white'>Log Out</Link>
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
