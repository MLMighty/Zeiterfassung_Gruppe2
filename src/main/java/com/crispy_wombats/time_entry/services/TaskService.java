package com.crispy_wombats.time_entry.services;

import com.crispy_wombats.time_entry.models.ProjectModel;
import com.crispy_wombats.time_entry.models.TaskModel;
import com.crispy_wombats.time_entry.repositorys.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class TaskService
{
    @Autowired
    TaskRepository taskRepository;
    public ResponseEntity<String> createTask(TaskModel task)
    {
        task.setTaskname(task.getTaskname());
        task.setTaskdescription(task.getTaskdescription());
        taskRepository.save(task);
        return new ResponseEntity<>("Task erstellt", HttpStatus.OK);
    }


}
