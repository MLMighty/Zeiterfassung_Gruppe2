package com.crispy_wombats.repositorys;

import com.crispy_wombats.models.AbsenceModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AbscenceRepository extends JpaRepository<AbsenceModel,Integer> {
/*    AbsenceModel findAllByUser_id(int user_id);*/
}
