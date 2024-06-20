package com.crispy_wombats.repositorys;

import com.crispy_wombats.models.TaskModel;
import com.crispy_wombats.models.TaskProjectUserModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskProjectUserRepository  extends JpaRepository<TaskProjectUserModel, Long> {

    List<TaskProjectUserModel> findByUserId(int userId);
}
