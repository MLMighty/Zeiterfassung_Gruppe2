package com.crispy_wombats.controller.post_controller;

import com.crispy_wombats.models.ProjectModel;
import com.crispy_wombats.models.TaskModel;
import com.crispy_wombats.models.TimeModel;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.security_measurements.HashUtil;
import com.crispy_wombats.security_measurements.Uuid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class TimeEntryController {

       /* @PostMapping("/timeentry")
        public void absenceController (@RequestBody Map<String,Object> timeEntryData  ){
            TaskModel taskModel = new TaskModel();
            String fisch = (String) timeEntryData.get("taskname");
            System.out.println(fisch);
            ProjectModel projectModel = new ProjectModel();

            TimeModel timeModel = new TimeModel();
         taskModel.setTaskname();
         TimeModel timeModel = new TimeModel();

        }*/

    public ResponseEntity<Map<String, String>> getAllWorkingData(int userID) {

        Map<String, String> allData = new HashMap<String, String>();
        allData.put("dog", "type of animal"); //example

        return new ResponseEntity<>(allData, HttpStatus.OK);
    }


}
