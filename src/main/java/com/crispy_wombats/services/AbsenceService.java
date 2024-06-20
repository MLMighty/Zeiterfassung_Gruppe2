package com.crispy_wombats.services;

import com.crispy_wombats.models.AbsenceModel;
import com.crispy_wombats.repositorys.AbscenceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AbsenceService {

    @Autowired
    AbscenceRepository absenceRepository;

    public void addAbsence(AbsenceModel absence) {
        absenceRepository.save(absence);
    }

    public List<AbsenceModel> getAllAbsences() {
        return absenceRepository.findAll();
    }

    public void deleteAbsence(int absenceId) {
        absenceRepository.deleteById(absenceId);
    }

    public List<AbsenceModel> getAbsencesByUserId(int userId) {
        return absenceRepository.findById(userId);
    }
}
