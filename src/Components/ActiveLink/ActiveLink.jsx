import React from 'react';
import './ActiveLink.css'
import { NavLink } from 'react-router-dom';

const ActiveLink = ({ to, children }) => {
    return (
        <div>
            <NavLink
                to={to}
                className={({ isActive }) => isActive ? "nav-link active" : "nav-link text-white"}
            >
                {children}
            </NavLink>
        </div>
    );
};

export default ActiveLink;

