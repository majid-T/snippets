import java.util.*;

public class PasswordGenerator {
    public static void main(String[] args) {
        int length = 10;
        System.out.println(passwrodFunc(10));
    }

    static char[] passwrodFunc(int l){
        // Defining constants
        String CAP_L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String SML_L = "abcdefghijklmnopqrstuvwxyz";
        String NUMS = "1234567890";
        String SYM = "!@#$%^&*()_=+-<>.?";
        String allVals = CAP_L+SML_L+NUMS+SYM;

        // making a Random class instance
        Random random = new Random();

        // array of charachter with a given length l
        char[] password = new char[l];


        // loop an use random class for random index in range of 0 all values length for random chars
        for(int i =0;i<l;i++){
            password[i]=allVals.charAt(random.nextInt(allVals.length()));
        }

        return password;
    }
}