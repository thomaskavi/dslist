import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage'; // O arquivo HomePage.js
import GameList from './components/GameList'; // O arquivo GameList.js

function App() {
  return (
    <Router>
      <Routes>
        {/* Página Inicial */}
        <Route path="/" element={<HomePage />} />

        {/* Página de Lista de Jogos */}
        <Route path="/games" element={<GameList />} />
      </Routes>
    </Router>
  );
}

export default App;
