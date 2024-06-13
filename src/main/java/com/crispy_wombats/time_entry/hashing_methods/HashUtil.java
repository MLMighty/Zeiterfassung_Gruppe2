package com.crispy_wombats.time_entry.hashing_methods;

import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;

public class HashUtil {

    // Methode zum Hashen eines Strings mit SHA-256
    public static String hashString(String input) {
        try {
            // Erstellen einer MessageDigest Instanz für SHA-256
            MessageDigest digest = MessageDigest.getInstance("SHA-256");

            // Hashen des Eingabestrings und Rückgabe des Hashes als Hex-String
            byte[] encodedhash = digest.digest(input.getBytes(StandardCharsets.UTF_8));
            return bytesToHex(encodedhash);
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    // Hilfsmethode zum Umwandeln eines Byte-Arrays in einen Hex-String
    private static String bytesToHex(byte[] hash) {
        StringBuilder hexString = new StringBuilder(2 * hash.length);
        for (byte b : hash) {
            String hex = Integer.toHexString(0xff & b);
            if (hex.length() == 1) {
                hexString.append('0');
            }
            hexString.append(hex);
        }
        return hexString.toString();
    }
}
