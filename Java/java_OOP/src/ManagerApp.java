public class ManagerApp {
    public static void main(String[] args){
        var manager = new Manager("Ismail", null);
        manager.sayHello("Joko");

        var vp = new VicePresident("Budi");
        vp.sayHello("Bagus");
    }
}
