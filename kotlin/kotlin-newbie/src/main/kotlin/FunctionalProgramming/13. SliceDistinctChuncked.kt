package FunctionalProgramming

data class Item(val key: String, val value: Any)

fun main(args: Array<String>) {
    val total = listOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

    /* SLICE */

    /* Setelah pembahasan fungsi take() pada sub-modul sebelumnya, muncul pertanyaan, bagaimana jika kita ingin menyaring item dari posisi tertentu? Untuk itu kita bisa memanfaatkan fungsi slice(). Dalam penggunaannya, fungsi slice() membutuhkan sebuah argumen berupa Range yang digunakan untuk menentukan posisi pertama dan terakhir yang akan disaring. */
    val slice = total.slice(3..6); // output: [4, 5, 6, 7]

    // Karena menggunakan Range, kita juga bisa menggunakan operator step ketika argumennya
    val sliceStep2 = total.slice(3..6 step 2); // output: [4, 6]

    val index = listOf(2, 3, 5, 8);
    val sliceIndex = total.slice(index); // output: [3, 4, 6, 9]

    /* Distinct */
    /* Saat berurusan dengan item yang sama di dalam sebuah collection, untuk menyaring item yang sama tersebut kita akan melakukan iterasi dan membandingkan setiap itemnya. Namun dengan Kotlin kita tidak perlu melakukannya secara manual, karena Kotlin Collection menyediakan fungsi untuk melakukannya dengan mudah yaitu fungsi distinct(). */
    val totalDistinct = listOf(1, 2, 1, 3, 4, 5, 2, 3, 4, 5)
    val distinct = totalDistinct.distinct() // output: [1, 2, 3, 4, 5]

    /* Sama halnya seperti beberapa fungsi sebelumnya yang sudah dibahas, fungsi distinct() bisa langsung dipanggil dari objek collection. Kita juga bisa menggunakannya pada collection dengan tipe parameter seperti data class.*/
    val items = listOf(
        Item("1", "Kotlin"),
        Item("2", "Is"),
        Item("3", "Awsome"),
    )

    val distinctItems = items.distinctBy { it.key }
    distinctItems.forEach{
        println("${it.key} with value ${it.value}")
    }

    /* Menariknya, kita bisa juga menentukan proses penyaringan item yang sama seperti apa yang akan dijalankan dengan menggunakan fungsi distinctBy(). */
    val text = listOf("A", "B", "CC", "DD", "EEE", "F", "GGGG");
    val distinctText = text.distinctBy {
        it.length
    } // output: [A, CC, EEE, GGGG]

    /* fungsi distinct() tidak dapat digunakan pada object Map Collection. */

    /* Chunked */
    /* Sama seperti fungsi split(), fungsi chunked() bisa kita gunakan untuk memecah nilai String menjadi beberapa bagian kecil dalam bentuk Array. Namun untuk penerapannya sedikit berbeda, di mana fungsi split() membutuhkan argumen berupa RegEx sebagai parameter sedangkan chunked() membutuhkan nilai yang akan digunakan sebagai jumlah indeks untuk pemisah. */
    val word = "QWERTY";
    val chunked = word.chunked(3) // output:[QWE, RTY]
    val chunkedTransform = word.chunked(3) {
        it.toString().lowercase();
    }

    println(chunkedTransform)
}