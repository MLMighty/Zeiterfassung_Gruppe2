package com.crispy_wombats.services;


import com.crispy_wombats.models.AbsenceModel;
import com.crispy_wombats.repositorys.AbscenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbsenceService {

    @Autowired
    AbscenceRepository abscenceRepository;

    public void addAbsence(AbsenceModel absence) {
        absence.setAbsencetype(absence.getAbsencetype());
        absence.setAbsencestart(absence.getAbsencestart());
        absence.setAbsenceend(absence.getAbsenceend());
        abscenceRepository.save(absence);

    }



 /*   public List<AbsenceModel> getAbsencesByUserId(int userId) {
        return abscenceRepository.findByUserId(userId);
    }*/




}
