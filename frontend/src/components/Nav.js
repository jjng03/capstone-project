import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
    return (
        <div className="nav-container">
            <Link to='/'>
                <div className="home-link">Jetflix</div>
            </Link>
            <Link to='/signin'>
                <div className="sign-link">Sign in</div>
            </Link>
        </div>
        
    )
}

export default Nav;