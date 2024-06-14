package com.crispy_wombats.time_entry.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Set;


@Entity
@Table(name = "ttask")
public class TaskModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "task_id")
    private int task_id;
    //////////////////////////////////////////////////////////////////////////////////////////////
    @Getter
    @Setter
    @ManyToMany(mappedBy = "tasks")
    Set<UsersModel> users;
    //////////////////////////////////////////////////////////////////////////////////////////////
    @Getter
    @Setter
    @Column(name = "taskname")
    private String taskname;

    @Getter
    @Setter
    @Column(name = "taskdescription")
    private String taskdescription;

    public TaskModel(){

    }
}
