package com.crispy_wombats.time_entry.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;


@Entity
@Table(name = "ttime")
public class TimeModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "time_id")
    private int time_id;

    @Getter
    @Column(name = "taskprojectuser_id")
    private int taskprojectuser_id;

    @Getter
    @Setter
    @Column(name = "startTime")
    private Date startTime;

    @Getter
    @Setter
    @Column(name = "endTime")
    private Date endTime;

    @Getter
    @Setter
    @Column(name = "date")
    private Date date;

    @Getter
    @Setter
    @Column(name = "holiday")
    private boolean holiday;

    @Getter
    @Setter
    @Column(name = "weekEnd")
    private boolean weekEnd;

    @Getter
    @Setter
    @Column(name = "workingHours")
    private double workingHours;
}
