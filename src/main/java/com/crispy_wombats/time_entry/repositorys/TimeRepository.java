package com.crispy_wombats.time_entry.repositorys;

import com.crispy_wombats.time_entry.models.TimeModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeRepository extends JpaRepository<TimeModel,Integer> {
}
