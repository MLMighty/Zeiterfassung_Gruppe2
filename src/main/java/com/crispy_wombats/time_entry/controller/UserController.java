package com.crispy_wombats.time_entry.controller;

import com.crispy_wombats.time_entry.models.UsersModel;
import com.crispy_wombats.time_entry.services.UserService;
import io.swagger.v3.core.util.Json;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.List;

public class UserController {
    @Autowired
    UserService userService = new UserService();

    @GetMapping("/alldata")
    public ResponseEntity<List<UsersModel>> signUpController(@RequestBody UsersModel user )
    {

        return userService.getUserByID(user);
    }
}
