package com.crispy_wombats.time_entry.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
@Entity
@Table(name = "trole")
public class RoleModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "role_id")
    private int role_id;

    @Getter
    @Setter
    @Column(name = "roleName")
    private String roleName;

    @Getter
    @Setter
    @Column(name = "roleDescription")
    private String roleDescription;
}

