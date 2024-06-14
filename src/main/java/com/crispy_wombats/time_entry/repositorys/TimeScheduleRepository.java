package com.crispy_wombats.time_entry.repositorys;

import com.crispy_wombats.time_entry.models.TimeSchedule;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TimeScheduleRepository extends JpaRepository <TimeSchedule,Integer> {
}
