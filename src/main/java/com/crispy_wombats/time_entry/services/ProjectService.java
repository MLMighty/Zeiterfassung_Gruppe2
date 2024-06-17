package com.crispy_wombats.time_entry.services;

import com.crispy_wombats.time_entry.models.ProjectModel;
import com.crispy_wombats.time_entry.repositorys.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class ProjectService
{
    @Autowired
    ProjectRepository projectRepository;
    public ResponseEntity<String> createproject(ProjectModel project)
    {
        project.setProjectname(project.getProjectname());
        project.setProjectdescription(project.getProjectdescription());
        projectRepository.save(project);
        return new ResponseEntity<>("Projekt erstellt", HttpStatus.OK);
    }

}
