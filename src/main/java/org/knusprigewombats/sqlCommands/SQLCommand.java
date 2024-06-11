package org.knusprigewombats.sqlCommands;

import lombok.Getter;

public class SQLCommand
{

    //Methoden
    public String getQueryForFilteredMonthlyDataPerUser (int userID, int monthStart, int monthEnd)
    {
        //userID = 1; //Algorithmus/Methode zum Getten des eingeloggten Users nötig
        //monthStart = 2; //Algorithmus/Methode zum Getten des ausgewählten Monats nötig; zB monthStart = comboBoxMonat.SelectedItem
        //monthEnd = 3;
        return String.format("SELECT * FROM getMonthlyDataBasedOnUser(%x, %x, %x)", userID, monthStart, monthEnd);
    }

    public String getQueryAllUserAndPasswords()
    {
        return "SELECT email, password FROM tusers";
    }
}
