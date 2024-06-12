package com.crispy_wombats.time_entry.repositorys;

import com.crispy_wombats.time_entry.models.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UsersModel, Integer> {

    UsersModel findAllByEmailAndAndPassword(String email, int password);

}
