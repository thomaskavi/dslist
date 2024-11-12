package com.thomaskavi.dslist.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.thomaskavi.dslist.dto.GameDTO;
import com.thomaskavi.dslist.dto.GameMinDTO;
import com.thomaskavi.dslist.services.GameService;

@RestController
@RequestMapping("/games")
public class GameController {

  @Autowired
  private GameService gameService;

  @GetMapping
  public List<GameMinDTO> findAll() {
    List<GameMinDTO> result = gameService.findAll();
    return result;
  }

  @GetMapping(value = "/{id}")
  public GameDTO findById(@PathVariable Long id) {
    GameDTO result = gameService.findById(id);
    return result;
  }

}
