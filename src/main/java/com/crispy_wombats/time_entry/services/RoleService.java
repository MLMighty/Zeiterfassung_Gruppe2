package com.crispy_wombats.time_entry.services;

import com.crispy_wombats.time_entry.models.ProjectModel;
import com.crispy_wombats.time_entry.models.RoleModel;
import com.crispy_wombats.time_entry.repositorys.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService
{
    @Autowired
    RoleRepository roleRepository;

    private void transferRoleData(RoleModel role) {
        role.setRolename(role.getRolename());
        role.setRoledescription(role.getRoledescription());
        role.setPermissionrights(role.getPermissionrights());
    }
}
