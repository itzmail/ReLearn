public class PersonApp {
    public static void main(String[] args){
        var person1 = new Person("Ismail", "Pagiren");
        var person2 = new Person("Joko");
        var person3 = new Person();
//        person1.name = "Ismail";
//        person1.address = "Perum Depkes";
//      person1.country = "Japan"; tidak bisa karena terdapat keyword final

        person1.sayHello("Joko");
        person2.sayHello("Budi");
        person3.sayHello("Munir");
    }
}