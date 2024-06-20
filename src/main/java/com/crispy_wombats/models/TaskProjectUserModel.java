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
    private int task_id;

    @Getter
    @Setter
    private int user_id;

    @Getter
    @Setter
    private int project_id;





}