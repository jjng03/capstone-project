import { Link } from 'react-router-dom';
import React from 'react';
import Logout from '../pages/Logout';


function Nav({formData}) {
    return (
        <div className="nav-container">
            <Link to='/'>
                <div className="home-link">Jetflix</div>
            </Link>
            <Link to='/login'>
                { window.localStorage.getItem("username") ? 
                    <div className="login-link">
                        {window.localStorage.getItem("username")}
                    </div> 
                : <div className="login-link">Login</div>}
                
            </Link>
            <Logout />
        </div>
        
    )
}

export default Nav;