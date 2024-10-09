import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import PokemonDetail from './pages/Detail/PokemonDetail';
import { Provider } from 'react-redux';
import store from './redux/store';
import Favorites from './pages/Favorites/FavoritePokemons';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/pokemon/:name" element={<PokemonDetail />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
