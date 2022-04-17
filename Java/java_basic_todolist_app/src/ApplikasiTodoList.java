public class ApplikasiTodoList {

    // Kita buat Variabel yang nantinya digunakan untuk menampung semua todo berupa string
    // Kita beri maksimal daya tampung sebanyak sepuluh, jika melebihi hal tersebut kita buat ulang lagi
    public static String[] model = new String[10];

    public static void main(String[] args){
        System.out.println(model);
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
                System.out.println(no + "." + todo);
            }
        }
    }

    /*
    * Menambahkan Todo ke list
    */
    public static void addTodoList(){

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