package com.crispy_wombats.time_entry.controller.post_controller;


import com.crispy_wombats.time_entry.models.AbsenceModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5500",allowCredentials = "true")
@RestController
public class AbsenceController {


    @PostMapping("/saveabsence")
    public ResponseEntity<Boolean> absenceController (@RequestBody AbsenceModel absence){

        return

    }

//    @GetMapping("/absencedata")
//    public ResponseEntity<AbsenceModel> forwardAbsenceController (@RequestBody AbsenceModel absence){
//
//        return
//
//    }


}
