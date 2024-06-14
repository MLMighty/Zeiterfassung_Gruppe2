package com.crispy_wombats.time_entry.services.registration_services;
import com.crispy_wombats.time_entry.hashing_methods.HashUtil;
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

//        UsersModel userEmail = userRepository.findByEmail(user.getEmail());
        UsersModel userPassword = userRepository.findByPassword(user.getPassword());
        System.out.println(userPassword);
        System.out.println(userPassword.getPassword());
//       if (userEmail != null && userPassword != null) {
//        if(userEmail.getPassword().equals(HashUtil.hashString(userPassword.getPassword())) ) {
//            if (userEmail.getEmail().equals(user.getEmail()) && userPassword.getPassword().equals(user.getPassword())) {
//                return new ResponseEntity<>(true, HttpStatus.OK);
//            }
//        }
//            return new ResponseEntity<>(false, HttpStatus.OK);
//        }
        return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
       }
}
