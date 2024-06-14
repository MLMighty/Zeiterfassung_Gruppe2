package com.crispy_wombats.time_entry.controller.post_controller;


import com.crispy_wombats.time_entry.models.TaskModel;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5500",allowCredentials = "true")
@RestController
public class TaskController {

    @PostMapping("/savetask")
    public ResponseEntity<Boolean> absenceController (@RequestBody TaskModel task){

        return

    }
//
//    @GetMapping("/taskdata")
//    public ResponseEntity<TaskModel> forwardAbsenceController (@RequestBody TaskModel task){
//
//        return
//
//    }

}
