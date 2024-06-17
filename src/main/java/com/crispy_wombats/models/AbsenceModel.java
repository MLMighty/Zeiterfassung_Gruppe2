package com.crispy_wombats.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(schema = "dbo",name = "tabsence")
public class AbsenceModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
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
    @Column(name = "absencehours")
    private double absencehours;

    @Getter
    @Setter
    @Column(name = "isunpaidvacation")
    private double isunpaidvacation;

    @Getter
    @Setter
    @Column(name = "ispaidvacation")
    private Boolean isvacation;

    @Getter
    @Setter
    @Column(name = "issicknesswithattest")
    private double issicknesswithattest;

    @Getter
    @Setter
    @Column(name = "issickness")
    private Boolean issickness;

    @Getter
    @Setter
    @Column(name = "gotpermitted")
    private Boolean gotpermitted;


    public AbsenceModel() {
    }

    //////////////////////////////////////////////////////////////////////////////////////////////
    @Getter
    @Setter
    @ManyToOne
    private UsersModel user;
    //////////////////////////////////////////////////////////////////////////////////////////////
}
