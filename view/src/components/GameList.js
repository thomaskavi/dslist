import React, { useState, useEffect } from "react"; // Use 'useEffect' para carregar jogos iniciais
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './GameList.css';

const GameList = () => {
  const [games, setGames] = useState([]);
  const [allGames, setAllGames] = useState([]); // Adicionando estado para todos os jogos
  const navigate = useNavigate();

  // Função para carregar jogos baseados no gênero
  const loadGames = async (genreId) => {
    try {
      const response = await axios.get(`http://localhost:8080/lists/${genreId}/games`);
      setGames(response.data);
    } catch (error) {
      console.error("Erro ao carregar os jogos:", error);
    }
  };

  // Função para carregar todos os jogos
  const loadAllGames = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/games`); // Endereço de todos os jogos
      setAllGames(response.data);
      setGames(response.data);  // Inicialmente, exibe todos os jogos
    } catch (error) {
      console.error("Erro ao carregar todos os jogos:", error);
    }
  };

  // Função que será chamada ao clicar nos botões de filtro
  const handleGenreChange = (genreId) => {
    loadGames(genreId);  // Carregar os jogos do gênero selecionado
  };

  // UseEffect para carregar todos os jogos ao carregar a página
  useEffect(() => {
    loadAllGames(); // Carregar todos os jogos inicialmente
  }, []);

  return (
    <div>
      <button className="back-button" onClick={() => navigate('/')}>Voltar</button>
      <h2>Escolha um Gênero</h2>

      {/* Menu de Filtro de Gêneros */}
      <div className="genre-filter">
        <button onClick={() => setGames(allGames)}>Mostrar Todos</button> {/* Botão para mostrar todos os jogos */}
        <button onClick={() => handleGenreChange(1)}>Aventura e RPG</button>
        <button onClick={() => handleGenreChange(2)}>Jogos de Plataforma</button>
      </div>

      <h2>Lista de Jogos</h2>
      <div className="game-list">
        {games.length === 0 ? (
          <p>Não há jogos disponíveis para o gênero selecionado. Exibindo todos os jogos.</p>
        ) : (
          games.map((game) => (
            <div key={game.id} className="game-item">
              <img src={game.imgUrl} alt={game.title} className="game-image" />
              <div className="game-details">
                <h3>{game.title}</h3>
                <p>{game.shortDescription}</p>
                <p className="game-rating">Avaliação: {game.score}</p>
                <p className="game-release-date">Data de Lançamento: {game.year}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameList;
