package dataClass_and_controlFlow

/* Glosarium
* Eager Evaluation
Proses evaluasi nilai yang dilakukan sedini mungkin pada variable.
* Lazy Evaluation
Proses evaluasi pemberian nilai saat benar-benar dibutuhkan.*/

// Contoh kalau tidak pakai sequence
fun eagerEvaluation() {
    val list = (1..1000000).toList()
    list.filter { it % 5 == 0 }.map { it * 2 }.forEach { println(it) }
    /*
    * Pada contoh kode di atas, kita memiliki data collection sejumlah 1 juta item,
    * kemudian masing-masing data akan disaring berdasarkan angka yang merupakan kelipatan 5
    * lalu dikalikan 2 dan akhirnya ditampilkan pada konsol.
    * list akan menyelesaikan proses filter terhadap 1 juta data baru kemudian melakukan mapping data sampai akhirnya ditampilkan pada konsol.*/
}

fun sequence() {
    val list = (1..1000000).toList()
    list.asSequence().filter { it % 5 == 0 }.map { it * 2 }.forEach { println(it) }

    /*
    * Dengan sequence, operasi akan dilakukan secara vertikal atau per item,
    * misalnya dimulai angka 1. Karena tidak memenuhi kondisi pada filter maka operasi tidak akan dilanjutkan ke map().
    * Sampai dengan iterasi ke-5 akan dilakukan mapping, angka 5 akan dikalikan 2 dan ditampilkan pada konsol,
    * setelah itu akan dilanjutkan ke iterasi berikutnya sampai dengan iterasi ke-1 juta.*/

    val sequenceNumber = generateSequence(1) { it + 1 }
    /* function generateSequence()
    * generateSequence() Fungsi ini memiliki 2 parameter. Parameter pertama adalah item pertama yang ada di dalam collection.
    * Parameter kedua adalah lambda expression berisi perubahan pada masing-masing item.*/

    /*Fungsi generateSequence() akan membuat collection sequence secara tak terbatas.
    Alhasil, kita perlu menambahkan fungsi take() */
    sequenceNumber.take(5).forEach { print("$it ") } // Output: 1 2 3 4 5
}