package com.crispy_wombats.repositorys;

import com.crispy_wombats.models.AbsenceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AbscenceRepository extends JpaRepository<AbsenceModel, Integer> {
   /* List<AbsenceModel> findByUserId(int userId);*/
}
