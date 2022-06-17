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
    
    return (
        <div className="login-container">
            <div className="login-box">
                <form className="login-form">
                        <input type="text" value={registerData.username} onChange={handleChange} name="username" placeholder="Username" className="login-input"/>
                        <input type="text" value={registerData.email} onChange={handleChange} name="email" placeholder="Email address" className="login-input"/>
                        <input type="password" value={registerData.password} onChange={handleChange} name="password" placeholder="Password" className="login-input"/>
                        <button onClick={handleSubmit} className="login-btn">Sign up</button>
                </form>
            </div>
        </div>
    )
}

export default Register;