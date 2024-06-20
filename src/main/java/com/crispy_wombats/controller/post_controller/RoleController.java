package com.crispy_wombats.controller.post_controller;



import com.crispy_wombats.models.RoleModel;
import com.crispy_wombats.services.RoleService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5500",allowCredentials = "true")
@RestController
public class RoleController {

    RoleService roleService = new RoleService();
   @GetMapping("/getroles")
    public ResponseEntity<?> absenceController (){

        return roleService.getAllRoles();

    }

    @GetMapping("/absencedata")
    public ResponseEntity<RoleModel> forwardAbsenceController (@RequestBody RoleModel role){

        return

    }


}
