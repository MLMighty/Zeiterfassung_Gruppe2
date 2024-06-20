package com.crispy_wombats.services;

import com.crispy_wombats.models.ProjectModel;
import com.crispy_wombats.repositorys.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    ProjectRepository projectRepository;

    public void createProject(ProjectModel project) {
        projectRepository.save(project);
    }

    public List<ProjectModel> getAllProjects() {
        return projectRepository.findAll();
    }
}
