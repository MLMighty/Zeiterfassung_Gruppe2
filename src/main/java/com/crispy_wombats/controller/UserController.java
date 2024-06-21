package com.crispy_wombats.controller;

import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.repositorys.RoleRepository;
import com.crispy_wombats.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;
    @GetMapping("/emails")
    public ResponseEntity<List<UsersModel>> signUpController()
    {
        return new ResponseEntity<>(userRepository.findAll(), HttpStatus.OK);
    }
}
