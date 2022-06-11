import { Link } from 'react-router-dom';
import React from 'react';
import Logout from '../pages/Logout';


function Nav() {
    return (
        <div className="nav-container">
            <Link to='/'>
                <div className="home">
                    <div className="home-link">
                        <img src="https://i.imgur.com/eAhPPci.jpg" alt="jetflix" className="jetflix"/>
                    </div>
                </div>
            </Link>
            <Link to='/login'>
                { window.localStorage.getItem("username") ? 
                    <div className="signin">
                        <div className="signin-link">{window.localStorage.getItem("username")}</div> 
                    </div>
                : <div className="signin">
                    <div className="signin-link">Sign in</div> 
                </div>}
                
            </Link>
            <Logout />
        </div>
        
    )
}

export default Nav;