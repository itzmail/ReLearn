public class ManagerApp {
    public static void main(String[] args){
        var manager = new Manager();
        manager.name = "Ismail";
        manager.sayHello("Joko");

        var vp = new VicePresident();
        vp.name = "Budi";
        vp.sayHello("Bagus");
    }
}
