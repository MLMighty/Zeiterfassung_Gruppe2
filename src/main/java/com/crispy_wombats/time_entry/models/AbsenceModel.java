package com.crispy_wombats.time_entry.models;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name = "tabsence")
public class AbsenceModel {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "absence_id")
    private int absence_id;

    //////////////////////////////////////////////////////////////////////////////////////////////
    @Getter
    @Setter
    @ManyToOne( cascade = CascadeType.ALL)
    private UsersModel users;
    //////////////////////////////////////////////////////////////////////////////////////////////

    @Getter
    @Column(name = "user_id")
    private int user_id;

    @Getter
    @Setter
    @Column(name = "absenceStart")
    private Date absenceStart;

    @Getter
    @Setter
    @Column(name = "absenceEnd")
    private Date absenceEnd;

    @Getter
    @Setter
    @Column(name = "isVacation")
    private Boolean isVacation;

    @Getter
    @Setter
    @Column(name = "isSickness")
    private Boolean isSickness;

    @Getter
    @Setter
    @Column(name = "gotPermitted")
    private Boolean gotPermitted;

    public AbsenceModel() {
    }
}
