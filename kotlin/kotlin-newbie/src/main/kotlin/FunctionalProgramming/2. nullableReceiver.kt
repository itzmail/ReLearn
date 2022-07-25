package FunctionalProgramming

/*nullableReceiver => merupakan extension yang bahkan bisa mereturn nilai null*/

//val Int?.slice: Int
//    get() = if(this == null) 0 else this.div(2);

/*If expression pada contoh di atas adalah untuk memeriksa apakah receiver object-nya bernilai null.
Jika tidak bernilai null, maka receiver object tersebut akan secara otomatis di-casting menjadi tipe non-null,
sehingga kita bisa menggunakan nilainya.*/

// Menggunakan Elvis Operator
val Int?.slice: Int
    get() = this?.div(2) ?: 0;

fun main(args: Array<String>) {
    val NullInt: Int? = null;

    println(NullInt.slice) // output : 0
}