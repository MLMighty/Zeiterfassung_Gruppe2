package com.crispy_wombats.controller;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.services.registration_services.LoginService;
import com.crispy_wombats.services.registration_services.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://127.0.0.1:5501",allowCredentials = "true")
@RestController
public class AuthentificationController {

        @Autowired
        SignUpService signUpService = new SignUpService();

        @Autowired
        LoginService loginService = new LoginService();



        @PostMapping("/login")
        public ResponseEntity<Object> loginController(@RequestBody UsersModel user)
        {
            return loginService.loginAuthentication(user);
        }


        @PostMapping("/signup")
        public ResponseEntity<String> signUpController(@RequestBody UsersModel user)
        {
            return signUpService.createUser(user);
        }
    }


