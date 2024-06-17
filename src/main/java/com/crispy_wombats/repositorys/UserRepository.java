package com.crispy_wombats.repositorys;
import com.crispy_wombats.models.UsersModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UsersModel, Integer> {
    UsersModel findByEmail(String email);
    UsersModel findAllByPassword(String password);
}