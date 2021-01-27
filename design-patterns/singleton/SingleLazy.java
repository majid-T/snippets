public class SingleLazy {
    // Private static class property 
    private static SingleLazy instance;

    // Private constructor, can be called from within the class only
    private SingleLazy(){

    }

    // Public static getter method which will return an instance
    public synchronized static SingleLazy getInstance(){
        // Check if instance exists
        if(instance == null){
            instance = new SingleLazy();
        }

        //return an instance
        return instance;
    }

}