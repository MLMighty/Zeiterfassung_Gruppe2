package com.crispy_wombats.time_entry.repositorys;

import com.crispy_wombats.time_entry.models.TaskModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TaskRepository extends JpaRepository<TaskModel, Long> {
}
