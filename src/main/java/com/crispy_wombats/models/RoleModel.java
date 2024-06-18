package com.crispy_wombats.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.apache.catalina.User;

import java.util.List;
import java.util.Set;

@Entity
@Table(schema = "dbo",name = "trole")
public class RoleModel {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Getter
    @Setter
    @Column(name = "role_id")
    private int role_id;

    @Getter
    @Setter
    @Column(name = "rolename")
    private String rolename;

    @Getter
    @Setter
    @Column(name = "roledescription")
    private String roledescription;

    @Getter
    @Setter
    @Column(name = "permissionrights")
    private Boolean permissionrights;

    public RoleModel(){

    }


}

