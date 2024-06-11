package org.knusprigewombats.userModel;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
public class UserModel {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private String user_id;
    @Getter
    @Setter
    private String firstName;
    @Getter
    @Setter
    private String lastName;
    /* public Integer getUserId() {
        return Integer.valueOf(user_id);
    }
    public void setUserId(Integer userId) {
        this.user_id = String.valueOf(userId);
    }
    */
    @Getter
    @Setter
    private String email;
    @Getter
    @Setter
    private String password;

}
