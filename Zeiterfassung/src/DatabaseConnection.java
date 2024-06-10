package Zeiterfassung.src;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DatabaseConnection {

    public void connectToDatabase(String URL, String user, String password) {
        try {
            // Verbindung zur Datenbank herstellen
            Connection connection = DriverManager.getConnection(URL, user, password);

            // Überprüfen, ob die Verbindung erfolgreich war
            if (connection != null) {
                System.out.println("Verbindung zur Datenbank hergestellt!");
            } else {
                System.out.println("Verbindung zur Datenbank fehlgeschlagen!");
            }

            // Verbindung schließen
            connection.close();
        } catch (SQLException e) {
            // Fehlerbehandlung für SQL-Ausnahmen
            e.printStackTrace();
        }
    }
}
