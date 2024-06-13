package com.crispy_wombats.time_entry.services.registration_services;
import com.crispy_wombats.time_entry.models.UsersModel;
import com.crispy_wombats.time_entry.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<Boolean> loginAuthentication(UsersModel user) {
        String enteredPassword = user.getPassword();
        System.out.println("Entered Password: " + enteredPassword);

        // Fetch user from repository based on password
        UsersModel userFromDb = userRepository.findByPassword(enteredPassword);
        System.out.println("User from DB: " + userFromDb);

        if (userFromDb != null) {

                         if (userFromDb.getEmail().equals(user.getEmail())) {
                             System.out.println("Email verification successful");
                             return new ResponseEntity<>(true, HttpStatus.OK);
             }

            System.out.println("Email verification unsuccessful");
        } else {
            System.out.println("User not found based on entered password");
        }

        return new ResponseEntity<>(false, HttpStatus.OK);
    }
}
