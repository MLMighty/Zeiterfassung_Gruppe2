package com.crispy_wombats.time_entry.services;

import com.crispy_wombats.time_entry.models.ProjectModel;
import com.crispy_wombats.time_entry.models.RoleModel;
import com.crispy_wombats.time_entry.models.UsersModel;
import com.crispy_wombats.time_entry.repositorys.RoleRepository;
import com.crispy_wombats.time_entry.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

public class RoleService
{
    @Autowired
    RoleRepository roleRepository;
    UserRepository userRepository;

    public ResponseEntity<String> createRole(RoleModel role)
    {
        role.setRolename(role.getRolename());
        role.setRoledescription(role.getRoledescription());
        roleRepository.save(role);
        return new ResponseEntity<>("Rolle erstellt", HttpStatus.OK);
    }

    public ResponseEntity<String> findRole(RoleModel role, UsersModel user)
    {
        UsersModel userMail = userRepository.findByEmail(user.getEmail());
        roleRepository.findById(userRepository.findByEmail(user.getEmail()).getRole());
        return new ResponseEntity<>("Rolle gefunden", HttpStatus.OK);
    }

}
