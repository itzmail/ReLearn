public class ApplikasiTodoList {

    // Kita buat Variabel yang nantinya digunakan untuk menampung semua todo berupa string
    // Kita beri maksimal daya tampung sebanyak sepuluh, jika melebihi hal tersebut kita buat ulang lagi
    public static String[] model = new String[10];

    public static void main(String[] args){
        testAddTodoList();
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
    public static void removeTodoList(){

    }

    // Membuat View Method

    /*
    * Menampilkan View todo list*/
    public static void viewShowTodoList(){

    }

    /*
    * Menampilkan view add todo list*/
    public static void viewAddTodoList(){

    }

    /*
    * Menampilkan view remove todo list*/
    public static void viewRemoveTodoList(){

    }
}