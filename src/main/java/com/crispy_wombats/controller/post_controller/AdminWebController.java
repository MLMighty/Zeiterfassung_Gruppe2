package com.crispy_wombats.controller.post_controller;

import com.crispy_wombats.models.ProjectModel;
import com.crispy_wombats.models.TaskModel;
import com.crispy_wombats.models.UsersModel;
import com.crispy_wombats.repositorys.ProjectRepository;
import com.crispy_wombats.repositorys.TaskRepository;
import com.crispy_wombats.repositorys.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@CrossOrigin(origins = "http://127.0.0.1:5501", allowCredentials = "true")
@RestController
public class AdminWebController {

    @Autowired
    private TaskRepository taskRepository;

    @Autowired
    private ProjectRepository projectRepository;

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/adminwebdata")
    public ResponseEntity<String> addAdminWebData(@RequestBody Map<String, Object> adminWebData) {
        try {
            // Extrahiere Daten aus dem Request Body
            String taskName = (String) adminWebData.get("taskname");
            String taskDescription = (String) adminWebData.get("taskdescription");
            String projectName = (String) adminWebData.get("projectname");
            String projectDescription = (String) adminWebData.get("projectdescription");
            List<String> projectAddedWorkers = (List<String>) adminWebData.get("projectaddedworker");

            // Erstelle TaskModel und ProjectModel
            TaskModel taskModel = new TaskModel();
            taskModel.setTaskname(taskName);
            taskModel.setTaskdescription(taskDescription);

            ProjectModel projectModel = new ProjectModel();
            projectModel.setProjectname(projectName);
            projectModel.setProjectdescription(projectDescription);

            // Füge Benutzer zu ProjectModel hinzu (Beispiellogik)
            if (projectAddedWorkers != null && !projectAddedWorkers.isEmpty()) {
                Set<UsersModel> usersToAdd = new HashSet<>();
                for (String username : projectAddedWorkers) {
                    UsersModel user = userRepository.findByEmail(username);
                    if (user != null) {
                        usersToAdd.add(user);
                    } else {
                        // Fehlerbehandlung, falls der Benutzer nicht gefunden wird
                        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User '" + username + "' not found.");
                    }
                }
                // Set von Benutzern zum Projekt hinzufügen
                projectModel.setUsers(usersToAdd);
            }

            // Speichern in der Datenbank
            projectRepository.save(projectModel);
            taskRepository.save(taskModel);

            return ResponseEntity.status(HttpStatus.CREATED).body("Data saved successfully!");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to save data: " + e.getMessage());
        }
    }

    @PostMapping("/admindata")
    public ResponseEntity<List<UsersModel>> forwardAdminWebData(@RequestBody String uuid) {
        try {
            // Beispiel: Benutzer anhand von UUID suchen
            UUID userId = UUID.fromString(uuid);
            UsersModel user = userRepository.findByUuid(userId);
            if (user != null) {
                return ResponseEntity.ok(Collections.singletonList(user));
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (IllegalArgumentException e) {
            // Fehlerbehandlung, falls UUID ungültig ist
            return ResponseEntity.badRequest().build();
        }
    }
}
