package com.crispy_wombats.services;

import com.crispy_wombats.models.RoleModel;
import com.crispy_wombats.repositorys.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {

    private final RoleRepository roleRepository;

    @Autowired
    public RoleService(RoleRepository roleRepository) {
        this.roleRepository = roleRepository;
    }

    public List<RoleModel> findAll() {
        return roleRepository.findAll();
    }

    public RoleModel findById(int id) {
        return roleRepository.findById(id).orElse(null);
    }

    public RoleModel save(RoleModel roleModel) {
        return roleRepository.save(roleModel);
    }

    public void deleteById(int id) {
        roleRepository.deleteById(id);
    }
}