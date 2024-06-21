package com.crispy_wombats.controller.post_controller;
import com.crispy_wombats.models.AbsenceModel;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.repositorys.AbscenceRepository;
import com.crispy_wombats.repositorys.UserRepository;
import com.crispy_wombats.services.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@CrossOrigin(origins = "http://127.0.0.1:5501", allowCredentials = "true")
@RestController
public class AbsenceController {

    @Autowired
    AbsenceService absenceService;

    @Autowired
    AbscenceRepository abscenceRepository;

    @Autowired
    UserRepository userRepository;

    @PostMapping("/saveabsence")
    public void saveAbsence(@RequestBody AbsenceModel absence){

        absenceService.addAbsence(absence);

    }

    @GetMapping("/absencedata")
    public ResponseEntity<List<AbsenceModel>> getAbsencesByUserId()
    {
        return new ResponseEntity<>(abscenceRepository.findAll(),HttpStatus.OK);
      /*  UUID uuids = UUID.fromString(uuid);
        try {

            Integer userId = userRepository.callUfGetUserID(uuids);
            if (userId != null) {
               return new ResponseEntity<>(abscenceRepository.findAllByUser_id(userId),HttpStatus.OK);

            } else {
                System.err.println("User ID not found for UUID: " + uuid);
            }
        } catch (IllegalArgumentException e) {
            System.err.println("Invalid UUID format: " + uuids);

        }*/


    }
}