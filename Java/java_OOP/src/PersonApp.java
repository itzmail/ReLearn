public class PersonApp {
    public static void main(String[] args){
        var person1 = new Person();
        person1.name = "Ismail";
        person1.address = "Perum Depkes";
//      person1.country = "Japan";

        System.out.println(person1.name);
//        System.out.println(person1.address);
//        System.out.println(person1.country);

        person1.sayHello("Joko");

        Person person2 = new Person();
        Person person3;
        person3 = new Person();
    }
}