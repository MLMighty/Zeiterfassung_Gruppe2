package org.knusprigewombats;

import org.knusprigewombats.database.DatabaseConnection;
import org.knusprigewombats.sqlCommands.SQLCommand;

//TIP To <b>Run</b> code, press <shortcut actionId="Run"/> or
// click the <icon src="AllIcons.Actions.Execute"/> icon in the gutter.
public class Main
{
    public static void main(String[] args) {

        //Clas for SQL Commands
        SQLCommand sqlQuery=new SQLCommand();

        //                                          Database Connection
        //DatabaseConnection.getConnection((sqlQuery.getQueryAllUserAndPasswords()));
        //DatabaseConnection.getConnection(((sqlQuery.getQueryForFilteredMonthlyDataPerUser(1,7,8))));
    }
}