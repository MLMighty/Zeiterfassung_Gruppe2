package com.crispy_wombats.time_entry.services;

import com.crispy_wombats.time_entry.models.RoleModel;
import com.crispy_wombats.time_entry.models.TaskModel;
import com.crispy_wombats.time_entry.repositorys.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TaskService
{
    @Autowired
    TaskRepository taskRepository;

    private void transferTaskData(TaskModel task) {

        task.setTaskname(task.getTaskname());
        task.setTaskdescription(task.getTaskdescription());
    }
}
