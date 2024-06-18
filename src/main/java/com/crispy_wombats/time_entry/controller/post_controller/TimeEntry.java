package com.crispy_wombats.time_entry.controller.post_controller;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@CrossOrigin(origins = "http://127.0.0.1:5500",allowCredentials = "true")
@RestController
public class TimeEntry {

     @PostMapping("/timeentry")
     public void absenceController (@RequestBody  Map<String,Object> timeEntryData  ){



    }
}
