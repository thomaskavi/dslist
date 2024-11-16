import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe o useNavigate

import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate(); // Criar uma instância do hook useNavigate

  const handleButtonClick = () => {
    navigate('/games'); // Redireciona para a página de jogos
  };

  return (
    <div className="home-container">
      <div className="content">
        <h1 className="title">Bem-vindo ao Mundo dos Games!</h1>
        <p className="subtitle">Onde sua jornada começa.</p>
        <button className="start-button" onClick={handleButtonClick}>Jogos</button>
      </div>
    </div>
  );
};

export default HomePage;
