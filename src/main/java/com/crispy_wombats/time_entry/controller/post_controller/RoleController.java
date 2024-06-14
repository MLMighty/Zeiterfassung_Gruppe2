package com.crispy_wombats.time_entry.controller.post_controller;


//weil der Admin Rolen erstellen kann

import com.crispy_wombats.time_entry.models.RoleModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5500",allowCredentials = "true")
@RestController
public class RoleController {

    @PostMapping("/saverole")
    public ResponseEntity<Boolean> absenceController (@RequestBody RoleModel role){

        return

    }
//
//    @GetMapping("/absencedata")
//    public ResponseEntity<RoleModel> forwardAbsenceController (@RequestBody RoleModel role){
//
//        return
//
//    }


}
