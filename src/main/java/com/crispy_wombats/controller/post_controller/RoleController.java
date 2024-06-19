package com.crispy_wombats.controller.post_controller;


//weil der Admin Rolen erstellen kann

import com.crispy_wombats.models.RoleModel;
import com.crispy_wombats.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class RoleController {

    @Autowired
    RoleService roleService = new RoleService();

    @PostMapping("/saverole")
    public ResponseEntity<?> absenceController (@RequestBody RoleModel role){

        return roleService.addNewRole(role);

    }
//
//    @GetMapping("/absencedata")
//    public ResponseEntity<RoleModel> forwardAbsenceController (@RequestBody RoleModel role){
//
//        return
//
//    }


}
