package com.crispy_wombats.repositorys;
import com.crispy_wombats.models.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<UsersModel, Integer> {
    UsersModel findByEmail(String email);
    UsersModel findAllByPassword(String password);
    @Query(nativeQuery = true, value = "SELECT * FROM ufGetUserID (:UUID)")
    String  callUfGetUserID(@Param("uuid") String uuid);

}