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
    val coins: (Int) -> String = {quantity ->
       "$quantity quarters"
    }

//    val cupcake: (Int) -> String = {
//        "Have a cupcake"
//    }

    val treatFunction = trickOrTreat(false, coins)
    val trickFunction = trickOrTreat(true, null)

    treatFunction()
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