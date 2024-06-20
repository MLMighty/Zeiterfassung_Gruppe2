package com.crispy_wombats.services;

import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.repositorys.UserRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService
{
    @Autowired
    UserRepository userRepository;

    //@Override
    public UsersModel createUser(UsersModel user) {
        return userRepository.save(user);
    }

    //@Override
    public UsersModel updateUser(int id, UsersModel user) {
        if (userRepository.existsById(user.getUser_id())) {
            user.setUser_id(user.getUser_id());
            return userRepository.save(user);
        } else {
            throw new EntityNotFoundException("User not found");
        }
    }

    //@Override
    public void deleteUser(int id) {
        userRepository.deleteById(id);
    }

    //@Override
    public List<UsersModel> getAllUsers() {
        return userRepository.findAll();
    }

    //@Override
    public UsersModel getUserById(int id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found"));
    }
}


