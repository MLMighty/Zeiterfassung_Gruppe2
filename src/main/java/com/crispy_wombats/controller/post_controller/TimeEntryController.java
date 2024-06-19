package com.crispy_wombats.controller.post_controller;


import com.crispy_wombats.models.TimeModel;
import com.crispy_wombats.repositorys.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Map;
@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class TimeEntryController {

    @Autowired
    TimeRepository timeRepository;

    @PostMapping("/timeentry")
    public void addTimeEntryWebData (@RequestBody Map<String,Object> timeEntryData  ) throws ParseException {


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


}
