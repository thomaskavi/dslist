package com.thomaskavi.dslist.dto;

import com.thomaskavi.dslist.entities.GameList;

import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
public class GameListDTO {
  private Long id;
  private String name;

  public GameListDTO(GameList entity) {
    id = entity.getId();
    name = entity.getName();
  }
}
