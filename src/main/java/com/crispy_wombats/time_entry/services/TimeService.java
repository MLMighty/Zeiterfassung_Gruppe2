package com.crispy_wombats.time_entry.services;

import com.crispy_wombats.time_entry.models.TimeModel;
import com.crispy_wombats.time_entry.repositorys.TimeRepository;
import com.crispy_wombats.time_entry.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class TimeService
{
    public static ResponseEntity<String> insertTime(TimeModel time)
    {
        @Autowired;
        TimeRepository timeRepository;
        UserRepository userRepository;

        public ResponseEntity<String> createTime(TimeModel time)
        {
            time.setStarttime(time.getStarttime());
            time.setEndtime(time.getEndtime());
            time.setDate(time.getDate());

            //time.setUsers(time.getUsers());
            time.setHoliday(time.isHoliday());  //Eigentlich: time.setHoliday(time.getHoliday());
            time.setWeekend(time.isWeekend());  //Eigentlich: time.setWeekEnd(time.getWeekend());
            timeRepository.save(time);

            return new ResponseEntity<>("Zeit erstellt", HttpStatus.OK);
        }
    }
}
