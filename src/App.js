import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import PokemonDetail from './pages/Detail/PokemonDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokemon/:name" component={PokemonDetail} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

