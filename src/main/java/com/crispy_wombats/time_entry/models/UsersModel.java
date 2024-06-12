package com.crispy_wombats.time_entry.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "tusers")
public class UsersModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "user_id")
    private int user_id;

    @Getter
    @Column(name = "role_id")
    private int role_id;

    @Getter
    @Setter
    @Column(name = "firstName")
    private Date firstName;
    //////////////////////////////////////////////////////////////////////////////////////////////
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "ttaskprojectuser",
            joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "task_id") }
    )
    Set<TaskModel> tasks;
    //////////////////////////////////////////////////////////////////////////////////////////////

    @Getter
    @Setter
    @Column(name = "lastName")
    private Date lastName;

    @Getter
    @Setter
    @Column(name = "email")
    private String email;

    @Getter
    @Setter
    @Column(name = "password")
    private boolean password;

}
