package FunctionalProgramming

/* Let
* Fungsi let menggunakan argumen (it) untuk mengakses konteks dari sebuah objek. Penggunaan fungsi let akan banyak kita temukan pada objek yang bertipe non-null.*/

/* Run
* Run akan dijalan kan sebagai default contoh dibawah bila Let null*/

/* Also
* Fungsi also sama seperti fungsi apply, di mana nilai yang dikembalikan adalah nilai dari konteks objek. Namun untuk konteks objeknya tersedia sebagai argumen (it). Fungsi also baiknya digunakan ketika kita ingin menggunakan konteks dari objek sebagai argumen tanpa harus mengubah nilainya.*/
fun main (args: Array<String>) {
    val msgLet: String? = null;
    /*msgLet?.let {
        val length = it.length * 2;
        val text = "text length $length";
        println(text);
    }*/
//    jika kita ingin menjalankan logika kode lain jika objeknya bernilai null? Di sini kita akan memanfaatkan fungsi lainnya yaitu run
    // Jika tidak null jalan yang blok pertama, kalau null jalan blok ke dua
    msgLet?.let {
        val length = it.length * 2;
        val text = "text length $length";
        println(text);
    } ?: run {
        val text = "message is null"
        println(text)
    }

    val txtAlso: String = "Hello Also";
    val resultAlso = txtAlso.also {
        println("Value length -> ${it.length}");
    }

    println(resultAlso)
}