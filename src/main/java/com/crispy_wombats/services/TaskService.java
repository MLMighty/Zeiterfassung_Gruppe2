package com.crispy_wombats.services;

import com.crispy_wombats.models.TaskModel;
import com.crispy_wombats.repositorys.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    @Autowired
    TaskRepository taskRepository;

    public void createTask(TaskModel task) {
        taskRepository.save(task);
    }

    public List<TaskModel> getAllTasks() {
        return taskRepository.findAll();
    }
}
