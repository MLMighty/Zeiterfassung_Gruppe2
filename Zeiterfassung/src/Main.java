import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        for (int i=0; i<20;i++){
            System.out.println("Hello World");
            System.out.println("Hello World");
            Scanner scanner = new Scanner(System.in);
            System.out.println("Please enter a number");
            int number = scanner.nextInt();
            System.out.println("Please enter another number");
            int number2 = scanner.nextInt();
            if (number>number2){
                System.out.println("You are greater than the number");
                scanner.close();
            }
        }
    }
}