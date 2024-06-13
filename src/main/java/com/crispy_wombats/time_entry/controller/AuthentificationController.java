package com.crispy_wombats.time_entry.controller;
import com.crispy_wombats.time_entry.models.UsersModel;
import com.crispy_wombats.time_entry.services.registration_services.LoginService;
import com.crispy_wombats.time_entry.services.registration_services.SignUpService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthentificationController {


    @CrossOrigin(origins = "http://127.0.0.1:5500",allowCredentials = "true")
    @RestController
    public class RegristrationController
    {
        @Autowired
        SignUpService signUpService = new SignUpService();

        @Autowired
        LoginService loginService = new LoginService();


        @PostMapping("/login")
        public ResponseEntity<Boolean> loginController(@RequestBody UsersModel user)
        {
            System.out.println("Wird aufgerufen Controller");
            return loginService.loginAuthentication(user);
        }


        @PostMapping("/signup")
        public ResponseEntity<String> signUpController(@RequestBody UsersModel user)
        {
            System.out.println("Wird aufgerufen Controller");
            return signUpService.createUser(user);
        }
    }

}
