package com.crispy_wombats.services.registration_services;
import com.crispy_wombats.models.RoleModel;
import com.crispy_wombats.repositorys.RoleRepository;
import com.crispy_wombats.repositorys.UserRepository;
import com.crispy_wombats.security_measurements.HashUtil;
import com.crispy_wombats.models.UsersModel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.management.relation.Role;

@Service
public class SignUpService
{

    @Autowired
    UserRepository userRepository;


    public ResponseEntity<String> createUser(UsersModel user)
    {


        UsersModel userEmail = userRepository.findByEmail(user.getEmail());
        if(userEmail == null){
            user.setFirstname(user.getFirstname());
            user.setEmail(user.getEmail());
            user.setLastname(user.getLastname());
            user.setPassword(HashUtil.hashString(user.getPassword()));
            user.setRole_id(3);


            userRepository.save(user);
            return new ResponseEntity<>("Angemeldet",HttpStatus.OK);
        }else{
            return new ResponseEntity<>("Diesen Account gibt es bereits",HttpStatus.OK);
        }

    }
}
