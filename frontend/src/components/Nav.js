import { Link } from 'react-router-dom';
import React from 'react';

function Nav() {
    return (
        <div className="nav-container">
            <Link to='/'>
                <div className="home-link">Jetflix</div>
            </Link>
            <div className="sign-link">Sign in</div>
            
        </div>
        
    )
}

export default Nav;