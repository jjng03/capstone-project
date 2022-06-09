import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";
import Nav from './components/Nav.js';
import Login from './pages/Login.js'

function App() {
  const URL = 'https://localhost:3000/';

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login URL={URL}/>} />
      </Routes>
    </div>
  );
}

export default App;
