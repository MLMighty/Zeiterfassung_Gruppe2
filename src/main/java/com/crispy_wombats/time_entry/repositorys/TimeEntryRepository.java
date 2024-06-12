package com.crispy_wombats.time_entry.repositorys;

import com.crispy_wombats.time_entry.models.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TimeEntryRepository extends JpaRepository<UsersModel,Integer> {

}