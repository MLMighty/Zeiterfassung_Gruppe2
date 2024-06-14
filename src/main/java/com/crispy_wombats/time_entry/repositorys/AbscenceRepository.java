package com.crispy_wombats.time_entry.repositorys;

import com.crispy_wombats.time_entry.models.AbsenceModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AbscenceRepository extends JpaRepository<AbsenceModel,Integer> {
}
