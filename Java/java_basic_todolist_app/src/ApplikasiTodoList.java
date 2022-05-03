public class ApplikasiTodoList {

    // Kita buat Variabel yang nantinya digunakan untuk menampung semua todo berupa string
    // Kita beri maksimal daya tampung sebanyak sepuluh, jika melebihi hal tersebut kita buat ulang lagi
    public static String[] model = new String[10];
    public static java.util.Scanner scanner = new java.util.Scanner(System.in); // OOP untuk input via terminal

    public static void main(String[] args){
        testViewRemoveTodoList();
    }

    // Kita Buat Method Terlebih dahulu atau Bussiness Logic

    /*
    *  Menampilkan Todo ke List
    */
    public static void showTodoList(){
        for(var i = 0; i < model.length; i++){
            String todo = model[i];
            var no = i + 1;

            if(todo != null){
                System.out.println(no + ". " + todo);
            }
        }
    }

    public static void testShowTodoList() {
//        model[0] = "Belajar Java Basic";
//        model[1] = "Studi Kasus Java Basic : Aplikasi TodoList";
        showTodoList();
    }

    /*
    * Menambahkan Todo ke list
    */
    public static void addTodoList(String todo){
        // Cek apakah var model penuh atau tidak
        boolean isFull = true;
        for(int i = 0; i < model.length; i++) {
            if(model[i] == null){
                isFull = false;
                break;
            }
        }

        // Jika Penuh maka ubah daya tampung menjadi 2x lipat
        if(isFull) {
            System.out.println("variabel Penuh");
            var temp = model;
            model = new String[model.length * 2];

            for(int i = 0; i < temp.length; i++) {
                model[i] = temp[i];
            }
        }

        // Tambahkan ke posisi yang data array nya null
        for(int i = 0; i < model.length; i++) {
//            System.out.println(i);
            if(model[i] == null){
                model[i] = todo;
                break;
            }
        }
    }

    public static void testAddTodoList() {
        for(byte i = 0; i < 25; i++) {
            addTodoList("Menambahkan todo ke " + (i + 1));
        }
        showTodoList();
    }

    /*
    * Mengahapus Todo dari list
    */
    public static boolean removeTodoList(Integer number){
        Integer InputIndex = number -1;
        // Cek apakah kita input index tidak sesuai denang todo yang ada di list
        if(InputIndex >= model.length){
            return false;
        }

        // Cek apatakh index yang kita input ada datanya tidak
        if(model[InputIndex] == null){
            return false;
        } else {
            // List yang mau dihapus digeser ke index terakhir baru set null
            for(int i = InputIndex; i < model.length; i++){
                if(i == (model.length - 1)){
                    model[i] = null;
                } else {
                    model[i] = model[i + 1];
                }
            }
            return true;
        }
    }

    public static void testRemoveTodoList() {
        addTodoList("Satu");
        addTodoList("Dua");
        addTodoList("Tiga");
        addTodoList("Empat");

        var result = removeTodoList(1);
        System.out.println(result);

        result = removeTodoList(4);
        System.out.println(result);

        showTodoList();
    }

    /*
     * Buat Method Input Data
     */
    public static String input(String info) {
        System.out.print(info + " : ");
        String data = scanner.nextLine();
        return data;
    }

    public static void testInput() {
        var nama = input("Nama");
        System.out.println("Hi " + nama);

        var channel = input("Channel");
        System.out.println(channel);
    }

    // Membuat View Method

    /*
    * Menampilkan View todo list
    */
    public static void viewShowTodoList(){
        while (true){
            System.out.println("TODOLIST");
            showTodoList();

            System.out.println("Menu : ");
            System.out.println("1. Add Todolist");
            System.out.println("2. Remove Todolist");
            System.out.println(("x. Exit"));

            var input = input("Pilih menu berapa");
            if(input.equals("1")){
                viewAddTodoList();
            } else if(input.equals("2")){
                viewRemoveTodoList();
            } else if(input.equals("x")){
                break;
            } else {
                System.out.println("Pilihan tidak dimengerti");
            }
        }
    }

    public static void testViewShowTodoList() {
        addTodoList("Satu");
        addTodoList("Dua");
        addTodoList("Tiga");
        addTodoList("Empat");
        addTodoList("Lima");

        viewShowTodoList();
    }

    /*
    * Menampilkan view add todo list*/
    public static void viewAddTodoList(){
        System.out.println("Menambah Todo ke List");

        var input = input("Todo (x berarti batal)");

        if(input.equals("x")){
            System.out.println("Kembali ke halaman sebelumnya");
        } else {
            addTodoList(input);
        }
    }

    public static void testViewAddTodoList() {
        addTodoList("Ujian");

        viewAddTodoList();

        showTodoList();
    }

    /*
    * Menampilkan view remove todo list*/
    public static void viewRemoveTodoList(){
        var number = input("Pilih nomor(x jika batal)");

        if(number.equals("x")){
            System.out.println("Batal menghapus todo");
        } else {
            boolean succes = removeTodoList(Integer.valueOf(number)); // Lakukan konversi dari string ke integer
            if(!succes){
                System.out.println("Gagal menghapus todo ke-" + number);
            }
        }
    }

    public static void testViewRemoveTodoList() {
        addTodoList("Satu");
        addTodoList("Dua");
        addTodoList("Tiga");

        showTodoList();
        viewRemoveTodoList();
        showTodoList();
    }
}