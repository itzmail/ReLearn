package FunctionalProgramming

/*
* Dengan  vararg sebuah fungsi dapat memiliki jumlah parameter berdasarkan jumlah argumen yang kita masukkan
* ketika fungsi tersebut dipanggil.
* Contoh dari penggunaan vararg adalah sebagai berikut:*/

fun sumNumbers(vararg number: Int): Int {
    return number.sum()
}

/*Selain itu kita juga bisa menerapkan Generic untuk tipe parameter ketika parameter tersebut ditentukan dengan vararg.
Contohnya seperti berikut:
* Ketika sebuah parameter ditentukan dengan vararg, pada dasarnya semua argumen yang dilampirkan, ditampung di dalam sebuah Array <out T>.
* Karena pada dasarnya adalah sebuah Array, maka kita bisa memanggil fungsi atau properti yang tersedia pada kelas Array dari dalam fungsi tersebut.*/

fun <T> asList(vararg input: T): List<T> {
    val result = ArrayList<T>()
    for( item in input ) {
        result.add(item);
    }
    return result;
}

/*
* Aturan pada Vararg Arguments
*   fun sumNumbers(vararg number: Int, vararg number2: Int)
* Ketika kode di atas dijalankan, proses kompilasi akan gagal dengan log eror sebagai berikut:
Kotlin: Multiple vararg-parameters are prohibited
*
* Selanjutnya jika kita ingin menambahkan parameter baru tanpa kata kunci vararg, parameter yang ditandai dengan vararg sebaiknya berada pada posisi terakhir.
* Contohnya seperti berikut:*/

fun sets(name: String, vararg number: Int): String {
    return "$name suka nomor $number";
}

/*Vararg vs Array<T>
* kalau kita spesifik pakai array maka argument yang kita berikan harus kita ubah menjadi array terlebih dahulu
* beda hal kalau pakai vararg maka kita tidak perlu ubah hal tersebut jadi array dan proses langsung disimpan di array*/

fun main(args: Array<String>) {
    val number = sumNumbers(10, 20, 30, 40);
    val setsPerson = sets("Ismail", 10, 20, 30);
    println(setsPerson);// output : 100
}