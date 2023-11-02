/*
* Ekspresi lambda menyediakan sintaksis ringkas untuk menentukan fungsi tanpa kata kunci fun.
* Anda dapat menyimpan ekspresi lambda secara langsung dalam variabel tanpa referensi fungsi pada fungsi lain.
* */

/*
fun main() {
    // val trickFuntion = trick()
    // Namun, untuk merujuk ke fungsi sebagai nilai, Anda harus menggunakan operator referensi fungsi (::).
    val trickFunction = ::trick
}

fun trick() {
    println("No Treats for you!")
}*/

fun main() {
    val coins: (Int) -> String = {
       "$it quarters"
    }

//    val cupcake: (Int) -> String = {
//        "Have a cupcake"
//    }

    val treatFunction = trickOrTreat(false, { "$it quarters" })
    val trickFunction = trickOrTreat(true, null)

    repeat(4) {
        treatFunction()
    }

    trickFunction()
}

fun trickOrTreat(isTrick: Boolean, extraTreate: ((Int) -> String)?): () -> Unit {
    return if(isTrick) {
        trick
    } else {
        if (extraTreate != null) {
            println(extraTreate(100))
        }
        treat
    }
}

// this is a lambda expression
val trick: () -> Unit = {
    println("No Treats for you!")
}

val treat: () -> Unit = {
    println("Treats for you!")
}

/*
val coins: (Int) -> String = {quantity ->
    "$quantity quarters"
}

Ubah template string "$quantity quarters" untuk merujuk ke parameter tunggal menggunakan $it.
*/

//val coins: (Int) -> String = {
//    "$it quarters"
//}

/*
* Ringkasan
1. Fungsi di Kotlin merupakan konstruksi kelas satu dan dapat diperlakukan seperti jenis data.
2. Ekspresi lambda menyediakan sintaksis singkat untuk menulis fungsi.
3. Anda dapat meneruskan jenis fungsi ke fungsi lain.
4. Anda dapat menampilkan jenis fungsi dari fungsi lain.
5. Ekspresi lambda menampilkan nilai ekspresi terakhir.
6. Jika label parameter dihilangkan dalam ekspresi lambda dengan parameter tunggal, parameter tersebut akan dirujuk dengan ID it.
7. Lambda dapat ditulis inline tanpa nama variabel.
8. Jika parameter terakhir fungsi merupakan jenis fungsi, Anda dapat menggunakan sintaksis lambda akhir untuk memindahkan ekspresi lambda setelah tanda kurung terakhir saat memanggil fungsi.
9. Fungsi tingkat tinggi merupakan fungsi yang menggunakan fungsi lain sebagai parameter atau menampilkan fungsi.
10. Fungsi repeat() merupakan fungsi tingkat tinggi yang berfungsi mirip dengan loop for.

* Pelajari lebih lanjut, Lambda dan fungsi tingkat tinggi
* */