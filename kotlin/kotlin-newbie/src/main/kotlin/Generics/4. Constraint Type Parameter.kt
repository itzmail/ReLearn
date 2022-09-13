package Generics

/* Dalam penerapan generic, kita bisa membatasi tipe apa saja yang dapat digunakan sebagai parameter. Untuk menentukkan batasan tersebut, bisa dengan menambahkan tanda titik dua (:) setelah tipe parameter yang kemudian diikuti oleh tipe yang akan dijadikan batasan. */

//class ListNumber<T : Number> : List<T>{
//    override fun get(index: Int): T {
//        return TODO("Provide the return value")
//    }
//}

/* Pada kode di atas kita telah menentukan Number sebagai batasan tipe argumen. Dengan begitu, kita hanya bisa memasukkan tipe argumen Number pada kelas ListNumber. Dan ketika kita memasukkan selain Number, */
fun main() {
//    val numbers1 = ListNumber<Long>();
    val numbers = listOf(1, 2, 3, 4, 5)
    numbers.sumNumber()
    val names = listOf("dicoding", "academy")
    // names.sumNumber() // error : inferred type String is not a subtype of Number
}

fun <T : Number> List<T>.sumNumber() : Void {
    /* .. */
    return TODO("Provide the return value")
}