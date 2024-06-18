package com.crispy_wombats.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.UuidGenerator;

import java.util.List;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(schema = "dbo", name = "tusers")
public class UsersModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Getter
    @Setter
    @Column(name = "user_id")
    private int user_id;

    /*@UuidGenerator
    @Column(name = "UUID")
    private UUID uuid;*/

    @Getter
    @Setter
    @Column(name = "password")
    private String password;

    @Getter
    @Setter
    @Column(name = "firstname")
    private String firstname;

    @Getter
    @Setter
    @Column(name = "lastname")
    private String lastname;

    @Getter
    @Setter
    @Column(name = "email")
    private String email;


    public UsersModel(){

    }


    ////////////////////////////////////////////////////////////////////////////////////////////
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "ttaskprojectuser",
            joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "task_id") }
    )
    Set<TaskModel> tasks;
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    @ManyToMany(cascade = { CascadeType.ALL })
    @JoinTable(
            name = "ttaskprojectuser",
            joinColumns = { @JoinColumn(name = "user_id") },
            inverseJoinColumns = { @JoinColumn(name = "project_id") }
    )
    Set<ProjectModel> project;
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////


    @Getter
    @Setter
    @ManyToOne
    private RoleModel role;
    //////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////
    @Getter
    @Setter
    @OneToMany( fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @JsonIgnore
    private List<AbsenceModel> absences;

    //////////////////////////////////////////////////////////////////////////////////////////////

    @Getter
    @Setter
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @JsonIgnore
    private List<TimeScheduleModel> timeSchedule ;


}
