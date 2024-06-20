package com.crispy_wombats.controller.post_controller;

import com.crispy_wombats.models.ProjectModel;
import com.crispy_wombats.models.TaskModel;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.repositorys.ProjectRepository;
import com.crispy_wombats.repositorys.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class AdminWebController {

    @Autowired
    TaskRepository taskRepository;
    @Autowired
    ProjectRepository projectRepository;


    @PostMapping("/adminwebdata")
    public void addAdminWebData (@RequestBody Map<String,Object> adminWebData  )  {

        // daten in die verscheidene models rein machen
        //in getrrennte Services reinmachen
        Map<String,Object> d = ( Map<String,Object>) adminWebData.get("");

        TaskModel taskModel = new TaskModel();
        String taskName = (String) adminWebData.get("taskname");
        taskModel.setTaskname(taskName);
        ProjectModel projectModel = new ProjectModel();

        projectModel.setProjectname((String) adminWebData.get("projectname"));
        projectModel.setProjectdescription((String) adminWebData.get("projectdescription"));
        (ArrayList<String>) adminWebData.get("rojectaddedworker")

        for (int i = 0; i < ; i++) {

        }

        projectRepository.save(projectModel);
        taskRepository.save(taskModel);
    }

    @GetMapping("/admindata")
    public ResponseEntity<List<UsersModel>> forwardAdminWebData (  )  {


        return null;

    }





}
