package org.knusprigewombats.database;

import java.sql.*;

public class DatabaseConnection {

    public static void getConnection() {
            // Connect to your database.
            // Replace server name, username, and password with your credentials

                String connectionUrl =
                        "jdbc:sqlserver://s27sql02.schulung-provadis.de;"
                                + "database=DB_Timetable_02;"
                                + "user=admin_02;"
                                + "password=L_$ZCw43ik47;"
                                + "encrypt=false;"
                                + "trustServerCertificate=false;"
                                + "loginTimeout=30;";


        ResultSet resultSet = null;

        try (Connection connection = DriverManager.getConnection(connectionUrl);
             Statement statement = connection.createStatement();) {


            String selectSql = "SELECT * from t_User;";
            resultSet = statement.executeQuery(selectSql);


                ResultSetMetaData rsmd = resultSet.getMetaData();
                int columnsNumber = rsmd.getColumnCount();
                while (resultSet.next()) {
                    for (int i = 1; i <= columnsNumber; i++) {
                        if (i > 1) System.out.print(", ");
                        String columnValue = resultSet.getString(i);
                        System.out.print(columnValue);
                    }
            }
        } catch (SQLException e) {
            throw new RuntimeException(e);
        }


    }
}