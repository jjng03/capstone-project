import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
    return (
        <div className="nav-container">
            <Link to='/'>
                <div className="home-link">Jetflix</div>
            </Link>
            <Link to='/login'>
                <div className="login-link">Login</div>
            </Link>
        </div>
        
    )
}

export default Nav;