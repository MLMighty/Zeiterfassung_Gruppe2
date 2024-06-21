package com.crispy_wombats.controller.post_controller;


//weil der Admin Rolen erstellen kann

import com.crispy_wombats.models.RoleModel;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.services.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class TeamLeadWebController
{



    @PostMapping("/teamleadweb")
    public ResponseEntity<?> absenceController (@RequestBody Map<String,Object> teamLeadWebData){

        return null ;

    }

    @GetMapping("/teamleadwebdata")
    public ResponseEntity<List<UsersModel>> forwardAbsenceController (){

        return null;

    }


}
