package com.crispy_wombats.repositorys;

import com.crispy_wombats.models.TimeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeRepository extends JpaRepository<TimeModel,Integer> {
}
