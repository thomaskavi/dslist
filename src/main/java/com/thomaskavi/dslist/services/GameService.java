package com.thomaskavi.dslist.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.thomaskavi.dslist.dto.GameDTO;
import com.thomaskavi.dslist.dto.GameMinDTO;
import com.thomaskavi.dslist.entities.Game;
import com.thomaskavi.dslist.repositories.GameRepository;

@Service
public class GameService {

  @Autowired
  private GameRepository gameRepository;

  @Transactional(readOnly = true)
  public List<GameMinDTO> findAll() {
    List<Game> result = gameRepository.findAll();
    List<GameMinDTO> dto = result.stream().map(x -> new GameMinDTO(x)).toList();
    return dto;
  }

  @Transactional(readOnly = true)
  public GameDTO findById(Long id) {
    Game result = gameRepository.findById(id).get();
    return new GameDTO(result);
  }

}
