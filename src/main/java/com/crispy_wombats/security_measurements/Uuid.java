package com.crispy_wombats.security_measurements;

import java.util.UUID;

public class Uuid {

    public static UUID generateUUID() {

        UUID uuid = UUID.randomUUID();
        return uuid;
    }

    public static boolean compareUUID(UUID uuid1, UUID uuid2) {
        if (uuid1.equals(uuid2)){
            return true;
        }else{
            return false;
        }
    }
}
