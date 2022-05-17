public class PolymorphismApp {
    public static void main(String[] args){
        Employee employee = new Employee("Ismail");
        employee.sayHello("Budi");

        employee = new Manager("Ismail", null); // yang semulanya beritpe data Employe dan deklarasi class Employee berubah menjadi manager
        employee.sayHello("Budi");

        employee = new VicePresident("Ismail"); // yang semulanya beritpe data Employe dan deklarasi class Manager berubah menjadi VicePresident
        employee.sayHello("Budi");

    }
}
