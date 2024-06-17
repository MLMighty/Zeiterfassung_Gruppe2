package com.crispy_wombats.time_entry.services;

import com.crispy_wombats.time_entry.models.ProjectModel;
import com.crispy_wombats.time_entry.repositorys.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService
{
    @Autowired
    private ProjectRepository projectRepository;

    private void transferProjectData(ProjectModel project) {
        project.setProjectname(project.getProjectname());
        project.setProjectdescription(project.getProjectdescription());
    }
}
