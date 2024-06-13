package com.crispy_wombats.time_entry.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.Role;
import org.apache.catalina.User;
import org.hibernate.type.descriptor.jdbc.VarcharJdbcType;

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
    @Setter
    @Column(name = "password")
    private String password;

    @Getter
    @Column(name = "role_id")
    private int role_id;

    @Getter
    @Setter
    @Column(name = "firstName")
    private String firstName;
    //////////////////////////////////////////////////////////////////////////////////////////////
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "ttaskprojectuser",
            joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "task_id") }
    )
    Set<TaskModel> tasks;
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "ttaskprojectuser",
            joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "project_id") }
    )
    Set<ProjectModel> project;
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "ttaskprojectuser",
            joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "time_id") }
    )
    Set<TimeModel> time;
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    @Getter
    @Setter
    @ManyToOne( cascade = CascadeType.ALL)
    private RoleModel role;
    //////////////////////////////////////////////////////////////////////////////////////////////


    @Getter
    @Setter
    @Column(name = "lastName")
    private String lastName;

    @Getter
    @Setter
    @Column(name = "email")
    private String email;

<<<<<<< HEAD

=======
    @Getter
    @Setter
    @Column(name = "password")
    private String password;
>>>>>>> 02b72eab2e50ba51a1d9991efb1536fec377372b

    public UsersModel(){

    }


}
