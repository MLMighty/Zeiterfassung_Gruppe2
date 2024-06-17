package com.crispy_wombats.time_entry.services;


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
        System.out.println(absence.getAbsencetype());
        System.out.println(absence.getAbsencestart());
        System.out.println(absence.getAbsenceend());


        abscenceRepository.save(absence);
      /*  absence.setAbcencetype(absence.getAbsencetype());


        calculateAbsenceHours(absence);*/
    }


  /*  public int calculateAbsenceHours(AbsenceModel absence  ){
        int absenceHours = absence.getAbsencestart().

        return
    }
*/
}
