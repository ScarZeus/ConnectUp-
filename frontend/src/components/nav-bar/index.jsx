import React from "react";
import { NavLink } from "react-router-dom";
import './index.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-links">
                <li>
                    <NavLink to="/home" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/search" activeClassName="active">Search</NavLink>
                </li>
                <li>
                    <NavLink to="/profile" activeClassName="active">Profile</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;