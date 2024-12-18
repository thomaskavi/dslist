package com.thomaskavi.dslist.dto;

import com.thomaskavi.dslist.entities.Game;
import com.thomaskavi.dslist.projections.GameMinProjection;

import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Getter
public class GameMinDTO {

  private Long id;
  private String title;
  private Integer year;
  private Double score;
  private String imgUrl;
  private String shortDescription;

  public GameMinDTO(Game entity) {
    id = entity.getId();
    title = entity.getTitle();
    year = entity.getYear();
    score = entity.getScore();
    imgUrl = entity.getImgUrl();
    shortDescription = entity.getShortDescription();
  }

  public GameMinDTO(GameMinProjection projection) {
    id = projection.getId();
    title = projection.getTitle();
    year = projection.getGameYear();
    score = projection.getScore();
    imgUrl = projection.getImgUrl();
    shortDescription = projection.getShortDescription();
  }

}
