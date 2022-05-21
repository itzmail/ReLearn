public class ParentApp {
    public static void main(String[] args) {

        Child child = new Child();
        child.name = "Ismail";
        child.doIt();
        System.out.println(child.name); // Yang keluar field yang ada di child

        Parent parent = (Parent) child;
        parent.doIt(); // ini akan mengakses doIt() yang ada di child
        System.out.println(parent.name); // Kalau ini tetap akan mengakses field yang ada di parent bukan di child jadi hasilnya null

        // Makanya ada yang namanya method overriding tetapi tidak ada namanya variable overriding yang ada hanya variable hidding
    }
}
