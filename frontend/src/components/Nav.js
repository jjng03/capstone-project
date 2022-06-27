import { Link } from 'react-router-dom';
import Logout from '../pages/Logout';
import GenreModal from './GenreModal.js';
import {MdDehaze} from 'react-icons/md';
import React, {useState} from 'react';

function Nav() {
    const [genreModal, setGenreModal] = useState(false);

    return (
        <div className="nav-container">
            <button className="genre-btn" onClick={()=> {setGenreModal(true)}}>
                <MdDehaze className="genre" size={30}/>
            </button>
            <div className="genre-modal">
                {genreModal && <GenreModal closeModal={setGenreModal}/>}
            </div>
            <div className="home">
                <div className="home-link">
                    <Link to='/'>
                        <img src="https://i.imgur.com/eAhPPci.jpg" alt="jetflix" className="jetflix"/>
                    </Link>
                </div>
            </div>
        
            { window.localStorage.getItem("username") ? 
                <div className="signin">
                    <div className="signin-link">{window.localStorage.getItem("username")}</div> 
                </div>
            : <Link to='/login'>
                <div className="signin">
                    <div className="signin-link">Sign in</div> 
                </div> 
                </Link>}
            
            <Logout />
        </div>
        
    )
}

export default Nav;