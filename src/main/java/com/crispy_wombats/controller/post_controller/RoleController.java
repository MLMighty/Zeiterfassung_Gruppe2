package com.crispy_wombats.controller.post_controller;



import com.crispy_wombats.models.RoleModel;
import com.crispy_wombats.services.RoleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class RoleController {

    RoleService roleService = new RoleService();
    @GetMapping("/getroles")
    public ResponseEntity<List<RoleModel>> absenceController (){

        return roleService.getAllRoles();

    }

    @GetMapping("/absencedata")
    public ResponseEntity<RoleModel> forwardAbsenceController (@RequestBody RoleModel role){

        return null;

    }


}