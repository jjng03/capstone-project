import './styles/App.css';
// import { Route, Routes } from 'react-router-dom';
import Home from "./components/Home.js";
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
    </div>
  );
}

export default App;
