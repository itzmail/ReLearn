package FunctionalProgramming

/*
* Kotlin memungkinkan kita untuk menambahkan sebuah fungsi baru pada sebuah kelas tanpa harus mewarisi kelas tersebut.
* Misal kita ingin menambahkan fungsi baru untuk kelas Int, maka kita akan menuliskannya seperti berikut:

class NewInt : Int() {
    fun printInt() {
        printLn("value $this");
    }
}
* Ketika dijalankan, kode di atas akan gagal dikompilasi,
* kenapa? Karena kelas Int bersifat final, sehingga tidak memungkinkan untuk mewarisi kelas tersebut.
* Untuk itu, kita bisa melakukannya dengan deklarasi khusus yang disebut dengan Extensions.
*/

/*Kotlin mendukung 2 (dua) extension yang dapat digunakan,
yaitu Extension Functions dan Extension Properties.*/

/*Extension Functions
* Untuk mendeklarasikan sebuah extension functions, kita perlu menentukan terlebih dahulu receiver type,
* kemudian nama dari fungsi tersebut yang mana keduanya dipisahkan oleh titik (.).
* Contohnya, seperti berikut:*/

fun Int.printInt() { // kelas Int di sini berperan sebagai receiver type
    println("value $this"); // sedangkan kata kunci this adalah objek dari receiver type
}

fun Int.plusThree(): Int {
    return this + 3;
}

/*Extension Properties
* Selanjutnya adalah extension properties. Seperti yang disebutkan di awal,
* Kotlin juga mendukung extension untuk menambah sebuah properti baru pada sebuah kelas tanpa harus menyentuh kode di dalam kelas tersebut.*/

val Int.slice: Int get() = this / 2 // kita melakukan modifikasi ketika kita pakai final class Int maka akan dibagi 2

fun main(args: Array<String>) {
   /*Extension Function*/
    10.printInt(); // Memanggil extension functions
    println(10.plusThree());

    /*Extension Properties*/
    println(10.slice);
}

/* Yang perlu diketahui,
* extension tidak benar-benar mengubah sebuah kelas dengan menambahkan sebuah fungsi atau properti baru.
* Ini karena extension memiliki hubungan langsung dengan kelas yang ingin diperluas fungsionalitasnya.
* Sehingga extension properties hanya bisa dideklarasikan dengan cara menyediakan getter atau setter secara eksplisit.*/