import { Link } from 'react-router-dom';
import React from 'react';

function Nav({formData}) {
    return (
        <div className="nav-container">
            <Link to='/'>
                <div className="home-link">Jetflix</div>
            </Link>
            <Link to='/login'>
                {/* { {formData} ? <div className="login-link">{formData.username}</div> : <div className="login-link">Login</div>} */}
                <div className="login-link">Login</div>
            </Link>
        </div>
        
    )
}

export default Nav;