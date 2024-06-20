package com.crispy_wombats.controller.post_controller;
import com.crispy_wombats.models.AbsenceModel;
import com.crispy_wombats.models.UsersModel;
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
    UserRepository userRepository;


    @PostMapping("/saveabsence")
    public void saveAbsence(@RequestBody AbsenceModel absence){
        absenceService.addAbsence(absence);
    }

    @PostMapping("/absencedata")


    public ResponseEntity<List<AbsenceModel>> getAbsencesByUserId(@RequestBody String uuid){
        UUID uuids = UUID.fromString(uuid);
        Integer userId = userRepository.callUfGetUserID(uuids);

        return null ;



    }
}
