import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";
import Nav from './components/Nav.js';
import Sign from './components/Sign.js'

function App() {
  const URL = 'https://localhost:3000/';

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/signin' element={<Sign URL={URL}/>} />
      </Routes>
    </div>
  );
}

export default App;
