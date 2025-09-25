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
                <NavLink to="/about" activeClassName="active">About</NavLink>
            </li>
            <li>
                <NavLink to="/contact" activeClassName="active">Contact</NavLink>
            </li>
        </ul>
    </nav>
);
};

export default Navbar;