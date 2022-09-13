package Generics

/* Seperti yang kita ketahui, Kotlin termasuk dalam bahasa pemrograman statically typed. Ketika menambahkan variabel baru, maka secara otomatis tipe dari variabel tersebut dapat dikenali pada saat kompilasi.  */
/* Secara umum generic merupakan konsep yang digunakan untuk menentukan tipe data yang akan kita gunakan. Pendeklarasiannya ditandai dengan tipe parameter. Kita juga bisa mengganti tipe parameter menjadi tipe yang lebih spesifik dengan menentukan instance dari tipe tersebut. */

val contributor = listOf<String>("jasoet", "alfian","nrohmen","dimas","widy")
// Bentuk sederhananya ada di bawah ini
val contributorSimple = listOf("alfian","nrohmen","dimas","widy")

/* Selain itu, kita juga bisa mendeklarasikan lebih dari satu tipe parameter untuk sebuah kelas. Contohnya adalah kelas Map yang memiliki dua tipe parameter yang digunakan sebagai key dan value. Kita bisa menentukannya dengan argumen tertentu, misalnya seperti berikut: */
val points = mapOf<String, Int>( "alfian" to 10 , "dimas" to 20 )
