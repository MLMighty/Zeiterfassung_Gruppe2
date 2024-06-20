package com.crispy_wombats.services;

import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    UserRepository userRepository;

    public void createUser(UsersModel user) {
        userRepository.save(user);
    }

    public List<UsersModel> getAllUsers() {
        return userRepository.findAll();
    }

    public UsersModel getUserById(int userId) {
        return userRepository.findById(userId).orElse(null);
    }
}
