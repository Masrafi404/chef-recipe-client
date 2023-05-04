import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'
import { AuthContext } from '../Provider/AuthProvider';
import ActiveLink from '../ActiveLink/ActiveLink';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { Tooltip as ReactTooltip } from 'react-tooltip'

const Header = () => {

    const { logOut, user } = useContext(AuthContext)

    const logOuthandler = () => {
        logOut()
            .then(result => { })
            .catch(error => {
                const errorMessage = error.message
                alert(errorMessage)
            });
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
                                <ActiveLink className="" to="/">Home</ActiveLink>
                            </li>
                            {/* <li className="nav-item">
                                <ActiveLink className="" to="/recipe">Recipe</ActiveLink>
                            </li> */}
                            <li className="nav-item">
                                <ActiveLink className="" to="/blog">Blog</ActiveLink>
                            </li>
                            <li className="nav-item">
                                <ActiveLink className="" to="/contact">contact</ActiveLink>
                            </li>

                        </ul>
                        <span className="navbar-text text-white">


                            {user ? <span className='d-flex'>
                                <img className='user-image me-3 ' title={user?.email} src={user?.photoURL} alt="" />
                                <Link onClick={logOuthandler} className='hover btn bg-white'>Log Out</Link>
                            </span>
                                : <span className='d-flex'>
                                    <Link to="signUp" className='hover btn bg-white me-3'>Sign up</Link>
                                    <Link to="logIn" className='hover btn bg-white me-3'>Login</Link></span>}
                        </span>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
