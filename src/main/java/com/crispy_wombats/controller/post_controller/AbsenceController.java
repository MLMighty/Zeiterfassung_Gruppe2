package com.crispy_wombats.controller.post_controller;


import com.crispy_wombats.models.AbsenceModel;
import com.crispy_wombats.services.AbsenceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class AbsenceController {

    @Autowired
    AbsenceService absenceService;

    @PostMapping("/saveabsence")
    public void absenceController (@RequestBody AbsenceModel absence){

        absenceService.addAbsence(absence);
    }

//    @GetMapping("/absencedata")
//    public ResponseEntity<AbsenceModel> forwardAbsenceController (@RequestBody AbsenceModel absence){
//
//        return
//
//    }


}
