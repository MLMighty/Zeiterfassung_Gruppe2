package com.crispy_wombats.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;
import java.util.List;

@Entity
@Table(schema = "dbo",name = "tabsence")
public class AbsenceModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "absence_id")
    private int absence_id;

    @Getter
    @Setter
    @Column(name = "absencestart")
    private Date absencestart;

    @Getter
    @Setter
    @Column(name = "absenceend")
    private Date absenceend;

    @Getter
    @Setter
    @Column(name = "absencetype")
    private String absencetype;






    public AbsenceModel() {
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    @Getter
    @Setter
    @ManyToOne
    private UsersModel user;
    //////////////////////////////////////////////////////////////////////////////////////////////
}
