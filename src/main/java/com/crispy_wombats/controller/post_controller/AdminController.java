package com.crispy_wombats.controller.post_controller;

import com.crispy_wombats.models.ProjectModel;
import com.crispy_wombats.models.TaskModel;
import com.crispy_wombats.models.TimeModel;
import com.crispy_wombats.repositorys.ProjectRepository;
import com.crispy_wombats.repositorys.TaskRepository;
import com.crispy_wombats.repositorys.TimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.Map;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class AdminController {

    @Autowired
    TaskRepository taskRepository;
    @Autowired
    ProjectRepository projectRepository;


    @PostMapping("/adminwebdata")
    public void addAdminWebData (@RequestBody Map<String,Object> adminWebData  )  {
        TaskModel taskModel = new TaskModel();
        String taskName = (String) adminWebData.get("taskname");
        taskModel.setTaskname(taskName);
        ProjectModel projectModel = new ProjectModel();
        String projectName = (String) adminWebData.get("projectname");
        projectModel.setProjectname(projectName);

        projectRepository.save(projectModel);
        taskRepository.save(taskModel);



    }
}
