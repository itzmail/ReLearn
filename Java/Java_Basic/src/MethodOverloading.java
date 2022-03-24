public class MethodOverloading {
    /*Method Overloading
    * Method Overloading adalah kemampuan membuat method dengan nama yang sama lebih dari sekali
    * Namun ada ketentuannya, yaitu data parameter di method tersebut harus berbeda-beda, entah jumlah atau tipe data prameternya
    * Jika ada yang sama, maka program Java kita akan error*/

    static void sayHello() {
        System.out.println("Hello");
    }

    static void sayHello(String firstName){
        System.out.println("Hello" + firstName);
    }

    static void sayHello(String firstName, String secondName){
        System.out.println("Hello" + firstName + " " + secondName);
    }

    public static void main(String[] args){
        sayHello();
        sayHello("Ismail");
        sayHello("Ismail", "Alam");
    }
}
