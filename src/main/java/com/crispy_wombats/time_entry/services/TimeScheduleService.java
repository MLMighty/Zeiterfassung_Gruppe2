package com.crispy_wombats.time_entry.services;

import com.crispy_wombats.time_entry.controller.post_controller.TimeSchedule;
import com.crispy_wombats.time_entry.models.TimeScheduleModel;
import com.crispy_wombats.time_entry.repositorys.TimeScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimeScheduleService {

    @Autowired
    TimeScheduleRepository timeScheduleRepository;

    public static void transferTimeScheduleData(TimeScheduleModel timeSchedule) {

        timeSchedule.setPlannedhrs(timeSchedule.getPlannedhrs());
        timeSchedule.setPeriodstart(timeSchedule.getPeriodstart());
        timeSchedule.setPeriodend(timeSchedule.getPeriodend());
        timeSchedule.setPermitted(timeSchedule.isPermitted());
    }
}
