package com.thomaskavi.dslist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thomaskavi.dslist.entities.Game;

public interface GameRepository extends JpaRepository<Game, Long> {

}
