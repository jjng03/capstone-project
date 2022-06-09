import React, {useState, useEffect} from 'react';
import axios from 'axios';

function Login() {
    const [formData, setFormData] = useState(
        {
            email: "",
            password: ""
        }
        )

    function handleChange(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleLogin(e) {
        e.preventDefault()
        axios.post('http://localhost:4000/login', formData)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        })
    }
    return (
        <div className="login-container">
            <div className="login-box">
                <form>
                    <label>Email</label>
                        <input type="text" value={formData.email} onChange={handleChange} name="email"/>
                    <label>Password</label>
                        <input type="password" value={formData.password} onChange={handleChange} name="password"/>
                    <button onClick={handleLogin}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login;