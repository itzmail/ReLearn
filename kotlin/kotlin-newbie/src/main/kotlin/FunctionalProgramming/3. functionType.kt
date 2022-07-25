package FunctionalProgramming

/*
* Kotlin sendiri menggunakan function type untuk tipe deklarasi yang berhubungan dengan sebuah fungsi.
* Dalam penggunaannya, terdapat beberapa tanda yang berhubungan dengan sebuah fungsi seperti jumlah dan tipe parameter serta tipe kembalian.*/

/*
* (Int, Int) -> String
* Setiap function type memiliki tanda kurung.
* Pada contoh di atas, fungsi tersebut memiliki 2 (dua) parameter dengan tipe Int dan memiliki tipe kembalian String.
* Ketika kita tidak ingin fungsi tersebut mengembalikan nilai, kita bisa menggunakan Unit.
* Berbeda dengan fungsi pada umumnya, jika menggunakan tipe kembalian Unit, kita tidak wajib menuliskannya*/

/*
* Ketika kita mempunyai beberapa fungsi yang memiliki function type yang sama,
* kita bisa menyederhanakannya. Bagaimana caranya?
* Manfaatkan kata kunci typealias untuk memberikan nama alternatif dari sebuah function type seperti berikut:*/

typealias Arithmetic = (Int, Int) -> Int;

val sum: Arithmetic = { valueA, valueB -> valueA + valueB }
val multiply: Arithmetic = { valueA, valueB -> valueA * valueB }

/* Untuk memanggil typealias yang kita buat kita bisa menggunakan method invoke()*/

/*
* Kita juga bisa menandai function type sebagai nullable dengan menempatkannya di dalam tanda kurung dan diakhiri dengan safe call seperti berikut:*/

typealias ArithmeticNull = ((Int, Int) -> Int)?
val sumNull: ArithmeticNull = {VA, VB -> VA + VB}

fun main(args: Array<String>) {
    val sumResult = sum.invoke(12, 12);

    // tanpa menuliskan invoke();
    val multiplyResult = multiply(12, 13);

    val sumIsNull = sumNull?.invoke(12, 0);

    println(sumResult);
    println(multiplyResult);
    println(sumIsNull);
}