package com.crispy_wombats.repositorys;

import com.crispy_wombats.models.TimeScheduleModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeScheduleRepository extends JpaRepository <TimeScheduleModel,Integer> {
}