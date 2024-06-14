package com.crispy_wombats.time_entry.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;
import java.util.Set;


@Entity
@Table(schema = "dbo", name = "ttime")
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
    @Column(name = "starttime")
    private Date starttime;

    @Getter
    @Setter
    @Column(name = "endtime")
    private Date endtime;

    @Getter
    @Setter
    @Column(name = "date")
    private Date date;

    @Getter
    @Setter
    @Column(name = "isholiday")
    private boolean holiday;

    @Getter
    @Setter
    @Column(name = "isweekend")
    private boolean weekend;

    @Getter
    @Setter
    @Column(name = "workinghours")
    private double workinghours;

    public TimeModel(){

    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "ttaskprojectuser",
            joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "task_id") }
    )
    Set<TaskModel> tasks;
    //////////////////////////////////////////////////////////////////////////////////////////////
}
