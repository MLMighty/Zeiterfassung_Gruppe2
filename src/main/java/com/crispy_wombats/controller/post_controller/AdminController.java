package com.crispy_wombats.controller.post_controller;

import com.crispy_wombats.models.ProjectModel;
import com.crispy_wombats.models.TaskModel;
import com.crispy_wombats.models.TimeModel;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.repositorys.ProjectRepository;
import com.crispy_wombats.repositorys.TaskRepository;
import com.crispy_wombats.repositorys.TimeRepository;
import com.crispy_wombats.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.text.ParseException;
import java.util.ArrayList;
import java.util.Map;
import java.util.UUID;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class AdminController {

    @Autowired
    TaskRepository taskRepository;
    @Autowired
    ProjectRepository projectRepository;

    @Autowired
    UserRepository userRepository;


    @PostMapping("/adminwebdata")
    public void addAdminWebData (@RequestBody Map<String,Object> adminWebData  )  {
        String uuidStr = (String) adminWebData.get("uuid");

        try {
            UUID uuid = UUID.fromString(uuidStr);
            Integer userId = userRepository.callUfGetUserID(uuid);
            if (userId != null) {
                System.out.println("User ID: " + userId);

            } else {
                System.err.println("User ID not found for UUID: " + uuid);
            }
        } catch (IllegalArgumentException e) {
            System.err.println("Invalid UUID format: " + uuidStr);
            return;
        }


        /*Map<String,Object> d = ( Map<String,Object>) adminWebData.get("");

        TaskModel taskModel = new TaskModel();
        String taskName = (String) adminWebData.get("taskname");
        taskModel.setTaskname(taskName);
        ProjectModel projectModel = new ProjectModel();

        projectModel.setProjectname((String) adminWebData.get("projectname"));
        projectModel.setProjectdescription((String) adminWebData.get("projectdescription"));
        (ArrayList<String>) adminWebData.get("rojectaddedworker")

        for (int i = 0; i < ; i++) {

        }*/

/*
        projectRepository.save(projectModel);
        taskRepository.save(taskModel);
*/

    }
/*    @PostMapping("/adminwebdata")
    public void addAdminWebData (@RequestBody Map<String,Object>  )  {


    }*/
}
