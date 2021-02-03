import java.util.*;

public class PasswordGenerator {
    public static void main(String[] args) {
        int length = 10;
        System.out.println(passwrodFunc(10));
    }

    static char[] passwrodFunc(int l){
        String CAP_L = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        String SML_L = "abcdefghijklmnopqrstuvwxyz";
        String NUMS = "1234567890";
        String SYM = "!@#$%^&*()_=+-<>.?";
        String allVals = CAP_L+SML_L+NUMS+SYM;

        Random random = new Random();
        char[] password = new char[l];

        for(int i =0;i<l;i++){
            password[i]=allVals.charAt(random.nextInt(allVals.length()));
        }

        return password;
    }
}