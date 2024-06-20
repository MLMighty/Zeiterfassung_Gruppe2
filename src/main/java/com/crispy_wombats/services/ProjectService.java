package com.crispy_wombats.services;

import com.crispy_wombats.models.ProjectModel;
import com.crispy_wombats.repositorys.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {

    private final ProjectRepository projectRepository;

    @Autowired
    public ProjectService(ProjectRepository projectRepository) {
        this.projectRepository = projectRepository;
    }

    public List<ProjectModel> findAll() {
        return projectRepository.findAll();
    }

    public ProjectModel findById(int id) {
        return projectRepository.findById(id).orElse(null);
    }

    public ProjectModel save(ProjectModel projectModel) {
        return projectRepository.save(projectModel);
    }

    public void deleteById(int id) {
        projectRepository.deleteById(id);
    }
}