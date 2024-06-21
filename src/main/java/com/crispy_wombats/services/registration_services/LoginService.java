package com.crispy_wombats.services.registration_services;
import com.crispy_wombats.repositorys.UserRepository;
import com.crispy_wombats.security_measurements.HashUtil;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.security_measurements.Uuid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
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
                return new ResponseEntity<>(uuid, HttpStatus.OK);
            }
            return new ResponseEntity<>(false, HttpStatus.OK);
        }
        return new ResponseEntity<>(false, HttpStatus.BAD_REQUEST);
    }
}