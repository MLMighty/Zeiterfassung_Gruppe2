package com.crispy_wombats.time_entry.services;
import com.crispy_wombats.time_entry.models.UsersModel;
import com.crispy_wombats.time_entry.repositorys.UserRepository;
import net.sf.jsqlparser.expression.DateTimeLiteralExpression;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public class UserService
{
    @Autowired
    UserRepository userRepository;

    public ResponseEntity<String> createUser(UsersModel user)
    {
        user.setFirstname(user.getFirstname());
        user.setLastname(user.getLastname());
        user.setEmail(user.getEmail());
        user.setPassword(user.getPassword());
        userRepository.save(user);
        return new ResponseEntity<>("User erstellt", HttpStatus.OK);
    }

}


