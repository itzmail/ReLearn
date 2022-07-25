package FunctionalProgramming

fun factorial(n: Int): Int {
    return if (n == 1) {
        n
    } else {
        n * factorial(n - 1)
    }
}

tailrec fun factorialTail(n: Int, result: Int = 1): Int {
    val newResult = n * result
    return if (n == 1) {
        newResult
    } else {
        factorial(n - 1)
    }
}

/* Namun dengan kode di atas kita tidak bisa langsung menghindari penumpukan frame. Ini karena secara default JVM tidak mendukung optimasi tail recursion. Untuk itu, Kotlin menyediakan modifier agar kita bisa tetap menerapkannya, yaitu modifier tailrec. */
/* Pada kode di atas, modifier tailrec ditempatkan sebelum kata kunci fun. Ketika sebuah fungsi ditandai dengan modifier tailrec, maka fungsi tersebut hanya boleh dipanggil untuk dijalankan terakhir dan tidak boleh digunakan dari dalam blok try-catch-finally. */

/* Exception in thread "main" java.lang.StackOverflowError karena melebihi kapasitas memori karena modelnya itu ditumpuk setiap perulangan functionnya */

/* Namun kita tidak perlu khawatir dengan masalah seperti di atas. Kotlin mendukung gaya pemrograman fungsional yang bernama tail recursion yakni sekumpulan urutan instruksi untuk menjalankan tugas tertentu (subroutine) yang dijalankan terakhir pada sebuah prosedur. */

fun main(args: Array<String>) {
    /* Recursive function adalah sebuah mekanisme di mana sebuah fungsi digunakan dari dalam fungsi itu sendiri. Ini memungkinkan sebuah fungsi dapat berjalan beberapa kali. Setiap pemanggilannya bisa kita atur agar dapat mengembalikan nilai dan digunakan sebagai argumen untuk pemanggilan fungsi berikutnya serta mengembalikan nilai akhir berupa perhitungan nilai kembalian dari setiap pemanggilan fungsi tersebut. */
    println("Factorial 4 is: ${factorialTail(9999999, 1)}");
}