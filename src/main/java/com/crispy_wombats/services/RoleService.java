package com.crispy_wombats.services;

import com.crispy_wombats.models.RoleModel;
import com.crispy_wombats.repositorys.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    @Autowired
    RoleRepository roleRepository;

    public void createRole(RoleModel role) {
        roleRepository.save(role);
    }

    public List<RoleModel> getAllRoles() {
        return roleRepository.findAll();
    }
}
