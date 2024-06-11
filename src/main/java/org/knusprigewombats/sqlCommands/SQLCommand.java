package org.knusprigewombats.sqlCommands;

import lombok.Getter;

public class SQLCommand {
    @Getter
    private String login="SELECT email, password from users;";
}
