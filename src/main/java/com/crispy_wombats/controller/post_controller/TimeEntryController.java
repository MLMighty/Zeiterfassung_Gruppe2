package com.crispy_wombats.controller.post_controller;

import com.crispy_wombats.models.TaskModel;
import com.crispy_wombats.models.TimeModel;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.repositorys.TimeRepository;
import com.crispy_wombats.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;

import java.util.Date;
import java.util.List;
import java.util.Map;
import java.util.UUID;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")

@RestController
public class TimeEntryController {

    @Autowired
    private TimeRepository timeRepository;

    @Autowired

    UserRepository userRepository;


 

    private UserRepository userRepository;

    @PostMapping("/timeentry")
    public void addTimeEntryWebData(@RequestBody Map<String,Object> timeEntryData) throws ParseException {
        String uuidStr = (String) timeEntryData.get("uuid");
        UUID uuid = UUID.fromString(uuidStr);
        Integer userId = userRepository.callUfGetUserID(uuid);
  
        TimeModel timeModel = new TimeModel();
        String startTime = (String) timeEntryData.get("starttime");
        String endTime = (String) timeEntryData.get("endtime");
        SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss");
        Date startDate = dateFormat.parse(startTime);
        Date endDate = dateFormat.parse(endTime);
        timeModel.setStarttime(startDate);
        timeModel.setEndtime(endDate);

        timeRepository.save(timeModel);
    }

    @PostMapping("/timeentrydata")
    public ResponseEntity<List<UsersModel>> forwardTimeEntryWebData(@RequestBody String uuid)  {
        UsersModel user = userRepository.findByUuid(UUID.fromString(uuid));


    }
}
