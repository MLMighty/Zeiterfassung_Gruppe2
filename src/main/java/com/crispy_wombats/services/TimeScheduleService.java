package com.crispy_wombats.services;

import com.crispy_wombats.models.TimeScheduleModel;
import com.crispy_wombats.repositorys.TimeScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeScheduleService {

    @Autowired
    TimeScheduleRepository timeScheduleRepository;

    public void addTimeSchedule(TimeScheduleModel timeSchedule) {
        timeScheduleRepository.save(timeSchedule);
    }

    public List<TimeScheduleModel> getAllTimeSchedules() {
        return timeScheduleRepository.findAll();
    }

    public List<TimeScheduleModel> getTimeSchedulesByUserId(int userId) {
        return timeScheduleRepository.findById(userId);
    }
}
