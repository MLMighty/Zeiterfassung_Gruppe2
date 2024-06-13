package com.crispy_wombats.time_entry.services.registration_services;
import com.crispy_wombats.time_entry.models.UsersModel;
import com.crispy_wombats.time_entry.repositorys.UserRepository;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class SignUpService
{

    @Autowired
    UserRepository userRepository;
    public ResponseEntity<String> createUser(UsersModel user)
    {
//        UsersModel userEmail = userRepository.findAllByEmail(user.getEmail());

//        if(!user.getEmail().equals(userEmail.getEmail())){
            user.setFirstName(user.getFirstName());
            user.setEmail(user.getEmail());
            user.setLastName(user.getLastName());
            user.setPassword(user.getPassword());

            userRepository.save(user);
//        }else{
//            return new ResponseEntity<>("user already exists",HttpStatus.CREATED);
//        }


        return new ResponseEntity<>("Something went wrong",HttpStatus.CREATED);
    }
}
