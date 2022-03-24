public class MethodReturnValue {
    /*Secara default, method itu tidak menghasilkan value apapun, namun jika kita ingin, kita bisa membuat sebuah method mengembalikan nilai
    * Agar method bisa menghasilkan value, kita harus mengubah kata kunci void dengan tipe data yang dihasilkan
    * Dan di dalam block method, untuk menghasilkan nilai tersebut, kita harus menggunakan kata kunci return, lalu diikuti dengan data yang sesuai dengan tipe data yang sudah kita deklarasikan di method
    * Di Java, kita hanya bisa menghasilkan 1 data di sebuah method, tidak bisa lebih dari satu*/

    public static void main(String[] args){
        var a = 100;
        var b = 200;
        var c = sum(a, b);
        System.out.println(c);

        var d = moreSum(a, "+", b);
        System.out.println(d);
    }

    static int sum(int value1, int value2) {
        var total = value1 + value2;
        return total;
    }

    static int moreSum(int value1, String operation, int value2){
        switch(operation){
            case "+":
                return value1 + value2;
            case "-":
                return value1 - value2;
            default:
                return 0;
        }
    }
}
