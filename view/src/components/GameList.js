import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./GameList.css";

const GameList = () => {
  const [games, setGames] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null); // Armazena o gênero selecionado
  const navigate = useNavigate();

  const loadGames = async (genreId) => {
    try {
      const response = await axios.get(`http://localhost:8080/lists/${genreId}/games`);
      setGames(response.data);
    } catch (error) {
      console.error("Erro ao carregar os jogos:", error);
    }
  };

  const handleGenreClick = (genreId) => {
    if (selectedGenre === genreId) {
      // Se o gênero já foi selecionado, limpar a lista
      setGames([]);
      setSelectedGenre(null);
    } else {
      // Caso contrário, carregar os jogos do gênero
      loadGames(genreId);
      setSelectedGenre(genreId);
    }
  };

  useEffect(() => {
    if (selectedGenre) {
      loadGames(selectedGenre);
    }
  }, [selectedGenre]);

  const [draggedIndex, setDraggedIndex] = useState(null);

  // Função chamada ao começar a arrastar
  const handleDragStart = (index) => {
    setDraggedIndex(index);
  };

  // Função chamada ao soltar o item
  const handleDrop = (droppedIndex) => {
    if (draggedIndex === null || draggedIndex === droppedIndex) return;

    const updatedGames = [...games];
    const [movedGame] = updatedGames.splice(draggedIndex, 1);
    updatedGames.splice(droppedIndex, 0, movedGame);

    setGames(updatedGames);
    updateGameOrder(draggedIndex, droppedIndex);

    setDraggedIndex(null); // Resetando o estado
  };

  // Atualiza a ordem no backend
  const updateGameOrder = async (sourceIndex, destinationIndex) => {
    try {
      await axios.post(`http://localhost:8080/lists/${selectedGenre}/replacement`, {
        sourceIndex,
        destinationIndex,
      });
      console.log("Ordem atualizada no backend.");
    } catch (error) {
      console.error("Erro ao atualizar a ordem no backend:", error);
    }
  };

  return (
    <div className="game-list-container">
      <button className="back-button" onClick={() => navigate("/")}>Voltar</button>

      <div className="genre-filter">
        <button onClick={() => handleGenreClick(1)}>Aventura e RPG</button>
        <button onClick={() => handleGenreClick(2)}>Jogos de Plataforma</button>
      </div>

      <h2>{selectedGenre ? "Lista de Jogos" : "Escolha um Gênero"}</h2>

      <div className="message">
        {games.length === 0 && !selectedGenre && (
          <p>Escolha um gênero para começar.</p>
        )}

        {games.length === 0 && selectedGenre && (
          <p>Não há jogos disponíveis para o gênero selecionado.</p>
        )}
      </div>

      <div className="game-list">
        {games.length > 0 && (
          games.map((game, index) => (
            <div
              key={game.id}
              className="game-item"
              draggable
              onDragStart={() => handleDragStart(index)}
              onDragOver={(e) => e.preventDefault()} // Permitir soltar
              onDrop={() => handleDrop(index)} // Chamado quando soltar o item
            >
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
