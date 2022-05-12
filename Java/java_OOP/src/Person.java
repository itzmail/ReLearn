public class Person {
    // Membuat field
    String name;
    String address;
    final String country = "Indonesia";

    // membuat Constructor()
    Person(String paramName, String paramAddress) {
        name = paramName;
        address = paramAddress;
    }

    // Membuat method
    void sayHello(String paramName){
        System.out.println("Hello " + paramName + ", My name is " + name);
    }
}
