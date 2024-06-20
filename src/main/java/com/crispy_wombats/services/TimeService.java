package com.crispy_wombats.services;

import com.crispy_wombats.models.TimeModel;
import com.crispy_wombats.repositorys.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

public class TimeService
{
    @Autowired
    TimeRepository timeRepository;

    public void addTimeEntry(TimeModel timeEntry) {
        timeRepository.save(timeEntry);
    }

    public List<TimeModel> getAllTimeEntries() {
        return timeRepository.findAll();
    }

    public List<TimeModel> getTimeEntriesByUserId(int userId) {
        return timeRepository.findById(userId);
    }
}
