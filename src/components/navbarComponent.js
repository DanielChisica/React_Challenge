import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * This class represents a Navigation bar
 */
export default class Navbar extends Component {
    render() {
        return (
                <div className="navbar">
                    <Link to="/" className="navbar-item"><img className="navbar-logo" src={require('../assets/images/brand.jpg')} alt="brand"/> </Link>
                    <nav className="nav-bar">
                    <ul className="nav-links">
                        <li className="navbar-link"><Link to="/register" className="nav-link">Register</Link></li>
                        <li className="navbar-link"><Link to="/login" className="nav-link">Sign in</Link></li>
                    </ul>
                    </nav>
                </div>
        );
    }
}
