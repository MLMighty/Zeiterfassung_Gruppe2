package com.crispy_wombats.services;
import com.crispy_wombats.models.TaskModel;
import com.crispy_wombats.repositorys.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    @Autowired
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }

    public List<TaskModel> findAll() {
        return taskRepository.findAll();
    }

    public TaskModel findById(long id) {
        return taskRepository.findById(id).orElse(null);
    }

    public TaskModel save(TaskModel taskModel) {
        return taskRepository.save(taskModel);
    }

    public void deleteById(long id) {
        taskRepository.deleteById(id);
    }
}