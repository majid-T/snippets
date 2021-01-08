// Run javac to compile this .java file to .class using your command line
// Run java RunExternalApp to get result in the terminal using your command line

public class RunExternalApp{
    public static void main(String[] args){
        //Get a reference to runtime
        Runtime rt = Runtime.getRuntime();

        try {
            //Run the App
            rt.exec(args[0]);
        } catch (ArrayIndexOutOfBoundsException e) {
            //TODO: handle exception
            System.out.println("[ERROR]- no args passed to run command");
        } catch (Exception e) {
            //TODO: handle exception
            System.out.println("[ERROR]- General Error");
        }
        
    }
}