package com.crispy_wombats.time_entry.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Table(schema = "dbo",name = "tproject")
public class ProjectModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "project_id")
    private int project_id;
    //////////////////////////////////////////////////////////////////////////////////////////////
    @Getter
    @Setter
    @ManyToMany(mappedBy = "project")
    Set<UsersModel> users;
    //////////////////////////////////////////////////////////////////////////////////////////////

    @Getter@Setter
    @Column(name = "projectName")
    private String projectName;

    @Getter@Setter
    @Column(name = "projectDescription")
    private String projectDescription;
    public ProjectModel() {

    }
}
