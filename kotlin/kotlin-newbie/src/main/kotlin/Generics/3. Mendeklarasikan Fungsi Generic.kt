package Generics

/* Fungsi generic memiliki tipe parameternya sendiri. Tipe argumen dari parameternya ditentukan ketika fungsi tersebut dipanggil. Cara mendeklarasikannya sedikit berbeda dengan kelas generic, Tipe parameter yang berada di dalam angle bracket harus ditempatkan sebelum nama dari fungsi yang kita tentukan. Sebagai contoh:
* fun <T> run() : T {

}
* */

// public fun <T> List<T>.slice(indicies: Iterable<Int>): List<T> {}

fun main(args: Array<String>) {
    val numbers = (1..100).toList()
    print(numbers.slice<Int>(1..10))
}