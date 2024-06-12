package com.crispy_wombats.time_entry.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;
import java.util.Set;

@Entity
@Table(name = "trole")
public class RoleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "role_id")
    private int role_id;
    //////////////////////////////////////////////////////////////////////////////////////////////
    @Getter
    @Setter
    @OneToMany(fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    @JoinColumn(name = "role_id", referencedColumnName = "role_id")
    @JsonIgnore
    private List<UsersModel> user;
    //////////////////////////////////////////////////////////////////////////////////////////////

    @Getter
    @Setter
    @Column(name = "roleName")
    private String roleName;

    @Getter
    @Setter
    @Column(name = "roleDescription")
    private String roleDescription;

    public RoleModel(){

    }
}

