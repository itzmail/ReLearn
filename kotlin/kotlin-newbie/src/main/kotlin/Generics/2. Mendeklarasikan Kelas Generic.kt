package Generics

/* Setelah mengetahui contoh bagaimana generic bekerja pada sebuah kelas, selanjutnya kita akan mempelajari bagaimana penerapan generic itu sendiri. Kita bisa menerapkannya dengan meletakkan tipe parameter ke dalam angle brackets (<>) seperti berikut: */

interface ListGenerics<T>{
    operator fun get(index: Int) : T
}

// Pada kode di atas, tipe parameter T bisa kita gunakan sebagai tipe reguler yang mengembalikan tipe dari sebuah fungsi.

/* Selanjutnya, jika kita mempunyai sebuah kelas yang mewarisi kelas atau interface generic, maka kita perlu menentukan tipe argumen sebagai tipe dasar dari parameter generic kelas tersebut. Parameternya bisa berupa tipe yang spesifik atau lainnya. Contohnya seperti berikut: */

abstract class LongList : List<Long>{
    override fun get(index: Int): Long {
        return this[index]
    }
}

abstract class ArrayList<T> : List<T>{
    override fun get(index: Int): T {
        return this[index]
    }
}

fun main(args: Array<String>) {
    val longArrayList = ArrayList<Long>(10)
    val firstLong = longArrayList.get(0)

    println(longArrayList);
    println(firstLong);
}