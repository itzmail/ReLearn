import java.util.Date;

public class ExpressionStatementBlock {
    public static void main (String[] args){
        /*Expression
        * Expression adalah konstruksi dari variabel, operator dan pemanggilan method yang mengevaluasi menjadi sebuah single value
        * Expression adalah core component dari statement
        * */

        // Contoh
        int iniInteger;
        var integer = 10;
        System.out.println(iniInteger = 100);

        /*Statement
        * Statement bisa dibilang adalah kalimat lengkap dalam bahasa
        * Sebuah statement berisikan execution komplit, biasanya diakhiri dengan titk koma
        * Ada beberapa jenis statement:
            * Assignment expression
            * Penggunaan ++ dan ==
            * Method invocation
            * Object creation expression
        * Contohnya bisa lihat di contoh expression karena kumpulan expression bisa disebut statement juga*/

        // assignment statement
        double aValue = 8933.234; // statement ini mengubah value

        // invrement statement
        aValue++;
        // method invocation statement
        System.out.println("Hello World");
        // object createion statement
        var date = new Date(); // memanggil sebuah function

        /*Block
        * Block adalah kumpulan statement yang terdiri dari nol atau lebih statement
        * Block diawali dan diakhiri dengan kurung kurawal{}
        * Contohnysa seperti public static void main(String[] args){}*/
    }
}
