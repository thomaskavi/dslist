package com.thomaskavi.dslist.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.thomaskavi.dslist.entities.GameList;

public interface GameListRepository extends JpaRepository<GameList, Long> {

}
