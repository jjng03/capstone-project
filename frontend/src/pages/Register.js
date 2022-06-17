import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register({registerData, setRegisterData}) {
    const navigate = useNavigate();

    function handleChange(e) {
        setRegisterData({...registerData, [e.target.name]: e.target.value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/register', registerData)
        .then(function (response) {
            window.localStorage.setItem("token",response.data.accessToken)
            window.localStorage.setItem("username",response.data.username)
            console.log(response);
            navigate('/login')
            window.location.reload()
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    
    function handleLogin(e) {
        navigate('/login')
    }

    return (
        <div className="register-container">
            <div className="register-box">
                <form className="register-form">
                    <h1>Sign up for Jetflix!</h1>
                    <label>Username</label>
                        <input type="text" value={registerData.username} onChange={handleChange} name="username" placeholder="Enter your username" className="register-input"/>
                    <label>Email</label>
                        <input type="text" value={registerData.email} onChange={handleChange} name="email" placeholder="Enter your email address" className="register-input"/>
                    <label>Password</label>
                        <input type="password" value={registerData.password} onChange={handleChange} name="password" placeholder="Enter your password" className="register-input"/>
                        <button onClick={handleSubmit} className="login-btn">Sign up</button>
                        <button onClick={handleLogin} className="create-btn">Back to login</button>
                </form>
            </div>
        </div>
    )
}

export default Register;