package OOP

import kotlin.random.Random;
import kotlin.math.PI
import kotlin.math.cos as cosinus
import kotlin.math.sqrt as akar
import kotlin.math.* // import semua fungsi dan vari yang ada di package ini

// Biasanya as digunakan ketika kita menggunakan sebuah kelas, fungsi, maupun variabel yang memiliki nama yang sama namun berbeda package-nya. Ini bertujuan untuk menghindari ambiguitas.

/* Seluruh konten pada Kotlin, seperti kelas dan fungsi, dibungkus dalam sebuah package. Package tersebut digunakan untuk mengelompokkan kelas, fungsi dan variabel yang mempunyai kemiripan fungsionalitas. Untuk menggunakan kelas, fungsi maupun variabel yang berada pada suatu package, kita harus menuliskan secara lengkap alamat package tersebut. Sebagai contoh kita akan menggunakan kelas Random, */
/*
* import packagename.ClassName
* import packagename.functionName
* import packagename.propertyName
* */


fun main(args: Array<String>) {
    val someInt = Random(0).nextInt(1, 10)
    println(PI)
    println(cosinus(120.0))
    println(akar(9.0))
    println(someInt)
}
