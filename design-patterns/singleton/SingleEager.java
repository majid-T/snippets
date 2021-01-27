public class SingleEager {
    // Private static class property eager instantiated on on class load
    private static SingleEager instance = new SingleEager();

    // Private constructor, can be called from within the class only
    private SingleEager(){
    }

    // Public static getter method which will return an instance
    public synchronized static SingleEager getInstance(){
        //return an instance
        return instance;
    }

}