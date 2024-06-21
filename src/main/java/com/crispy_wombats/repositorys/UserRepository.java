package com.crispy_wombats.repositorys;
import com.crispy_wombats.models.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;
import java.util.UUID;

@Repository
public interface UserRepository extends JpaRepository<UsersModel, Integer> {
    UsersModel findByEmail(String email);

    @Query(value = "SELECT dbo.ufGetUserID(:uuid)", nativeQuery = true)
    Integer callUfGetUserID(@Param("uuid") UUID uuid);


}