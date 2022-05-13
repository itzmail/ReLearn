public class Person {
    // Membuat field
    String name;
    String address;
    final String country = "Indonesia";

    // membuat Constructor()
    Person(String name, String address) {
        // Pakai this agar tidak terjadi variable shadowing
        this.name = name;
        this.address = address;
    }

    // * Constructor Overloading
    Person(String paramName) {
        name = paramName;
    }

    // Memanggil Constructor lain
    Person() {
        this("ismail", null);
    }

    // Membuat method
    void sayHello(String paramName){
        System.out.println("Hello " + paramName + ", My name is " + name);
    }
}
