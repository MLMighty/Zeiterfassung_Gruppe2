package com.crispy_wombats.services;

import com.crispy_wombats.models.TimeModel;
import com.crispy_wombats.repositorys.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class TimeService {

    private final TimeRepository timeRepository;

    @Autowired
    public TimeService(TimeRepository timeRepository) {
        this.timeRepository = timeRepository;
    }

    public List<TimeModel> findAll()
    {
        return timeRepository.findAll();
    }

    public TimeModel findById(int id)
    {
        return timeRepository.findById(id).orElse(null);
    }

    public TimeModel save(TimeModel timeModel)
    {
        return timeRepository.save(timeModel);
    }

    public void deleteById(int id)
    {
        timeRepository.deleteById(id);
    }


    public void saveTimeEntry(TimeModel timeModel) {
        timeRepository.save(timeModel);
    }
}
