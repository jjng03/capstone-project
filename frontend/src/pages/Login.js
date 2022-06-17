import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({loginData, setLoginData}) {
    const navigate = useNavigate();

    function handleChange(e) {
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    function handleLogin(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/login', loginData)
        .then(function (response) {
            window.localStorage.setItem("token",response.data.accessToken)
            window.localStorage.setItem("username",response.data.username)
            console.log(response);
            navigate('/')
            window.location.reload()
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    return (
        <div className="login-container">
            <div className="login-box">
                <form className="login-form">
                        <input type="text" value={loginData.username} onChange={handleChange} name="username" placeholder="username" className="login-input"/>
                        <input type="password" value={loginData.password} onChange={handleChange} name="password" placeholder="password" className="login-input"/>
                        <button onClick={handleLogin} className="login-btn">Sign in</button>
                </form>
            </div>
        </div>
    )
}

export default Login;