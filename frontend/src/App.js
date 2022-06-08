import './styles/App.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";
import Nav from './components/Nav';

function App() {
  const URL = ''
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
