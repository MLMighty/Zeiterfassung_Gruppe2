package Zeiterfassung.src;

public class Main {
    public static void main(String[] args) {
        DatabaseConnection db = new DatabaseConnection(); // Instanzierung der DatabaseConnection-Klasse
        db.connectToDatabase("s27sql02.schulung-provadis.de", "admin_02", "L_$ZCw43ik47");
    }
}
