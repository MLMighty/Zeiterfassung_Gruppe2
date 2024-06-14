package com.crispy_wombats.time_entry.repositorys;

import com.crispy_wombats.time_entry.models.ProjectModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<ProjectModel, Integer> {
}
