package com.crispy_wombats.time_entry.controller.post_controller;


import com.crispy_wombats.time_entry.models.TaskModel;
import com.crispy_wombats.time_entry.models.TimeModel;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class TimeEntry {

     @PostMapping("/timeentry")
     public void absenceController (@RequestBody  Map<String,Object> timeEntryData  ){
         TaskModel taskModel = new TaskModel();
         String fisch = (String) timeEntryData.get("taskname");
         System.out.println(fisch);
         /*taskModel.setTaskname();
         TimeModel timeModel = new TimeModel();*/



    }
}
