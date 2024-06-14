package com.crispy_wombats.time_entry.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.Role;
import org.apache.catalina.User;
import org.hibernate.type.descriptor.jdbc.VarcharJdbcType;

import java.sql.Time;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Table(schema = "dbo", name = "tusers")
public class UsersModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "user_id")
    private int user_id;

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
    @OneToMany(mappedBy = "absence", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @JsonIgnore
    private List<AbsenceModel> absences;

    //////////////////////////////////////////////////////////////////////////////////////////////

    @Getter
    @Setter
    @OneToMany( mappedBy = "timeSchedule",fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "user_id", referencedColumnName = "user_id")
    @JsonIgnore
    private List<TimeSchedule> timeSchedule ;


}
