package com.crispy_wombats.time_entry.services;

import com.crispy_wombats.time_entry.models.TimeModel;
import com.crispy_wombats.time_entry.models.UsersModel;
import com.crispy_wombats.time_entry.repositorys.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TimeService
{
    @Autowired
    TimeRepository timeRepository;

    public static void transferTimeData(TimeModel time)
    {
        time.setStarttime(time.getStarttime());
        time.setEndtime(time.getEndtime());
        time.setDate(time.getDate());
        time.setHoliday(time.isHoliday());
        time.setWeekend(time.isWeekend());
        time.setWorkinghours(time.getWorkinghours());


    }
}
