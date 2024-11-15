package com.thomaskavi.dslist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thomaskavi.dslist.dto.GameListDTO;
import com.thomaskavi.dslist.dto.GameMinDTO;
import com.thomaskavi.dslist.dto.ReplacementDTO;
import com.thomaskavi.dslist.services.GameListService;
import com.thomaskavi.dslist.services.GameService;

import jakarta.transaction.Transactional;

@RestController
@RequestMapping("/lists")
public class GameListController {

  @Autowired
  private GameListService gameListService;

  @Autowired
  private GameService gameService;

  @GetMapping
  public List<GameListDTO> findAll() {
    List<GameListDTO> result = gameListService.findAll();
    return result;
  }

  @GetMapping(value = "/{listId}/games")
  public List<GameMinDTO> findByList(@PathVariable Long listId) {
    List<GameMinDTO> result = gameService.findByList(listId);
    return result;
  }

  @Transactional
  @PostMapping(value = "/{listId}/replacement")
  public void move(@PathVariable Long listId, @RequestBody ReplacementDTO body) {
    gameListService.move(listId, body.getSourceIndex(), body.getDestinationIndex());
  }
}
