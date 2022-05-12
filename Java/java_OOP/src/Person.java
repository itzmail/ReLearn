public class Person {
    // Membuat field
    String name;
    String address;
    final String country = "Indonesia";

    // Membuat method
    void sayHello(String paramName){
        System.out.println("Hello " + paramName + ", My name is " + name);
    }
}
