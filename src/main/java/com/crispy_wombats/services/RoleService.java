package com.crispy_wombats.services;

import com.crispy_wombats.models.RoleModel;
import com.crispy_wombats.repositorys.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class RoleService
{
    @Autowired
    RoleRepository roleRepository;

    public ResponseEntity<?> addNewRole(RoleModel role){






        return new ResponseEntity<>(HttpStatus.OK);
    }

}