public class MethodRecursive {
    /*Method Recursive adalah kemampuan method untuk memanggil dirinya sendiri
    * Studi kasus yang biasa terjadi adalah digunakan untuk operasi fraktorial
    *
    * Hal ini perlu dihindari karena bila kita sering menggunakan method ini dikhawatirkan akan terjadi StackOverflow dan setiap komputer berbeda - beda daya tampung stack yang bida ditampung method tersebut*/

    public static void main(String[] args){
        System.out.println(commonRecursive(5));
        System.out.println(crazyRecursive(1));
//        stackOverflow(1000);
    }

    // tanpa method recursive

    static int commonRecursive(int value) {
        int result = 1;

        for(var init = 1; init <= value; init++){
            result *= init;
        }

        return result;
    }

    // Menggunakan Method Recursive

    static int crazyRecursive(int value){
        if(value == 1){
            return 1;
        } else {
            return value *= crazyRecursive(value - 1);
        }
    }

    // Contoh Error StackOverflow
        static void stackOverflow(int value) {
        if(value == 0){
            System.out.println("Selesai");
        } else {
            System.out.println("Loop-" + value);
            stackOverflow(value - 1);
        }
        }
}
