package com.crispy_wombats.time_entry.services;
import com.crispy_wombats.time_entry.models.UsersModel;
import com.crispy_wombats.time_entry.repositorys.UserRepository;
import net.sf.jsqlparser.expression.DateTimeLiteralExpression;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserService
{
    @Autowired
    UserRepository userRepository;

    private void transferUserData(UsersModel user) {



        user.getRole();
        user.getAbsences();
        user.getTimeSchedule();
    }
}


