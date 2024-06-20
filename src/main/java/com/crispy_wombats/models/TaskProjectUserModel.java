package com.crispy_wombats.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(schema = "dbo" , name =  "ttaskprojectuser")
public class TaskProjectUserModel {


    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "taskprojectuser_id")
    private int taskprojectuser_id;

    @Getter
    @Setter
    @Column(name = "task_id")
    private int task_id;

    @Getter
    @Setter
    @Column(name = "user_id")
    private int user_id;

    @Getter
    @Setter
    @Column(name = "project_id")
    private int project_id;

    @ManyToOne
    @JoinColumn(name = "task_id", insertable = false, updatable = false)
    @Getter
    @Setter
    private TaskModel task;

    @ManyToOne
    @JoinColumn(name = "user_id", insertable = false, updatable = false)
    @Getter
    @Setter
    private UsersModel user;

    @ManyToOne
    @JoinColumn(name = "project_id", insertable = false, updatable = false)
    @Getter
    @Setter
    private ProjectModel project;
}
