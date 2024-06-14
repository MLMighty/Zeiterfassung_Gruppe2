package com.crispy_wombats.time_entry.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.User;

import java.util.Date;

@Entity
@Table(schema = "dbo", name = "ttimeschedule")
public class TimeSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "timeschedule_id")
    private int timeschedule_id;

    @Getter
    @Setter
    private int plannedhrs;

    @Getter
    @Setter
    private Date periodstart;

    @Getter
    @Setter
    private Date periodend;

    @Getter
    @Setter
    private boolean gotpermitted;

    @ManyToOne
    private UsersModel user;





}
