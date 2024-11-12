package com.thomaskavi.dslist.entities;

import jakarta.persistence.EmbeddedId;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "tb_belonging")
@Getter
@Setter
@NoArgsConstructor
@EqualsAndHashCode
public class Belonging {

  @EmbeddedId
  private BelongingPK id = new BelongingPK();
  private Integer position;

  public Belonging(Game game, GameList list, Integer position) {
    id.setGame(game);
    id.setList(list);
    this.position = position;
  }

}
