package com.crispy_wombats.services.registration_services;
import com.crispy_wombats.repositorys.UserRepository;
import com.crispy_wombats.security_measurements.HashUtil;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.security_measurements.Uuid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
public class LoginService {

    @Autowired
    private UserRepository userRepository;

    public ResponseEntity<Object> loginAuthentication(UsersModel user) {

        UsersModel userEmail = userRepository.findByEmail(user.getEmail());
        if (userEmail != null && userEmail.getPassword() != null) {
            if (userEmail.getEmail().equals(user.getEmail()) && userEmail.getPassword().equals(HashUtil.hashString(user.getPassword()))) {
                UUID uuid = Uuid.generateUUID();
                userEmail.setUuid(uuid);

                userRepository.save(user);

                Map<String, Object> responseBody = new HashMap<>();
                responseBody.put("uuid", uuid.toString());
                responseBody.put("role", checkUserRights(userEmail));

                return new ResponseEntity<>(responseBody, HttpStatus.OK);
            }
            return new ResponseEntity<>(false, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
    }

   public String checkUserRights(UsersModel userEmail){
       switch(userEmail.getRole_id()) {
           case 1:
               return "Admin";
           case 2:
               return "Teamlead";
           case 3:
               return "Mitarbeiter";
           default:
               System.out.println("Dosent exist");
       }
       return null;
    }
}
