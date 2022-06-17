import './styles/App.css';
import React, {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";
// import Nav from './components/Nav.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';

function App() {
  const URL = 'https://localhost:3000/';
  const [loginData, setLoginData] = useState(
    {
        username: "",
        email: "",
        password: ""
    }
  );
  const [registerData, setRegisterData] = useState(
    {
      username: "",
      email: "",
      password: ""
    }
  )
  return (
    <div className="App">
      {/* <Nav formData={formData} setFormData={setFormData}/> */}
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login loginData={loginData} setLoginData={setLoginData} URL={URL}/>} />
        <Route path='/register' element={<Register registerData={registerData} setRegisterData={setRegisterData} URL={URL}/>} />
      </Routes>
    </div>
  );
}

export default App;
