package com.crispy_wombats.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Set;

@Entity
@Table(schema = "dbo", name = "ttask")
public class TaskModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "task_id")
    private int task_id;

    @Getter
    @Setter
    @Column(name = "taskname")
    private String taskname;

    @Getter
    @Setter
    @Column(name = "taskdescription")
    private String taskdescription;

    @Getter
    @Setter
    @ManyToMany(mappedBy = "tasks")
    private Set<UsersModel> users;

}