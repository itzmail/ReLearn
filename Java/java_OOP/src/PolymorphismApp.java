public class PolymorphismApp {
    public static void main(String[] args){
        Employee employee = new Employee("Ismail");
        employee.sayHello("Budi");

        employee = new Manager("Ismail", null); // yang semulanya beritpe data Employe dan deklarasi class Employee berubah menjadi manager
        employee.sayHello("Budi");

        employee = new VicePresident("Ismail"); // yang semulanya beritpe data Employe dan deklarasi class Manager berubah menjadi VicePresident
        employee.sayHello("Budi");

        // maka dari itu hal ini berkaitan dengan pewarisan

    }
    static void sayHello(Employee employee) {
        // instanceof digunakan untuk spesifikasi turunan class dari suatu parent
        if(employee instanceof VicePresident){
            VicePresident vicePresident = (VicePresident) employee; // kita lakukan konversi
            System.out.println("Hello VP" + vicePresident.name);
        } else if(employee instanceof Manager){
            Manager manager = (Manager) employee;
            System.out.println("Hello manager" + manager.name);
        } else {
            System.out.println("Hello " + employee.name);
        }
    }
}
