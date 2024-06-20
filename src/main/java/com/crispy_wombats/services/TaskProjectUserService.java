package com.crispy_wombats.services;

import com.crispy_wombats.models.TaskProjectUserModel;
import com.crispy_wombats.repositorys.TaskProjectUserRepository;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskProjectUserService {
    @Autowired
    TaskProjectUserRepository taskProjectUserRepository;

    public List<TaskProjectUserModel> getTasksByUserId(int userId) {
        return taskProjectUserRepository.findByUserId(userId);
    }
}
