// Run javac to compile this .java file to .class using your command line
// Run java DiskUsage to get result in the terminal using your command line
import java.io.File;

public class DiskUsage{
    //Declare size to divide to 
    public static int SIZE_DIV=1073741824;
    public static void main(String[] args) {
        //Get reference to your drive
        File cDrive = new File("c:");

        //Print out the desired out put
        System.out.println(String.format("Total Disk Space :\t\t %.2f GB",(double)cDrive.getTotalSpace()/SIZE_DIV));
        System.out.println(String.format("Total Free Space :\t\t %.2f GB",(double)cDrive.getFreeSpace()/SIZE_DIV));
        System.out.println(String.format("Total available Space :\t\t %.2f GB",(double)cDrive.getUsableSpace()/SIZE_DIV));

    }
}