# Singleton Pattern
A singleton pattern is used when there is only need for ONE single isntance of class in form of object available during the life cycle of the application. It can be <b>Lazy</b> which means it won't have an instance unless it was called once, or <b>Eager</b> which means it will have an isntance when the class loader loads the class instances.

 <div align="center" >
      <img
        src="../media/singleton.png"
        alt="singleton"
        width="80%"
        height="80%"
      />
  </div>

### NOTES - JAVA implementation
- Make a private static property of type class itself
- Make the constructor private, so it can not be instantiated directly
- Provide a static getter function, so function would be accessible without a need to an object
- Inside the getter check if the property is null, instatiate it and return it, otherwise return the value (Lazy)\
- Instantiate the property on declaration, and inside the getter return the value 
- Getter method should be synchronized so only one thread can call it at the same time