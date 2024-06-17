package com.crispy_wombats.services;


import com.crispy_wombats.time_entry.models.AbsenceModel;
import com.crispy_wombats.time_entry.repositorys.AbscenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

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



}
