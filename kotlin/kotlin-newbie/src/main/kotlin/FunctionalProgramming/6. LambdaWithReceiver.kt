package FunctionalProgramming

/*
* Konsep ini digunakan sebagai dasar Kotlin untuk digunakan sebagai Domain Specific Languages (DSL).*/

/*Apa itu DSL?
* DSL adalah sebuah bahasa komputer yang dikhususkan untuk domain aplikasi tertentu.
* Ia berbeda dengan general-purpose language yang bisa diterapkan di semua domain aplikasi.
* Dengan DSL, kita bisa menuliskan kode lebih ringkas dan ekspresif.
* Contoh sistem yang menerapkan DSL adalah Gradle dan sistem database yang berbasis SQL.*/

/*Code not use DSL*/
fun notDSL(): String {
    val stringBuilder = StringBuilder() // StringBuilder() dijadikan sebagai receiver untuk tipe deklarasi action.
    stringBuilder.append("Hello ")
    stringBuilder.append("from ")
    stringBuilder.append("lambda")
    return stringBuilder.toString()
}

fun useDSL(action: StringBuilder.() -> Unit): String {
    val stringBuilder = StringBuilder();
    stringBuilder.action();
    return stringBuilder.toString();
}

fun main(args: Array<String>) {
//    println(notDSL());
    val message = useDSL{
        append("Hello ");
        append("From ");
        append("Lambda");
    }

    println(message);
}

/*Pelajari
* https://www.dicoding.com/blog/belajar-gradle-kotlin-dsl-android/
* */