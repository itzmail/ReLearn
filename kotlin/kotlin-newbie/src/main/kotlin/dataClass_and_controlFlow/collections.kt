package dataClass_and_controlFlow

/*
 * Collection
 * Collections sendiri merupakan sebuah objek yang bisa menyimpan kumpulan objek lain termasuk data class.
 * my opinion => sepert array, tetapi defaultnya ini tidak bisa diubah
 * */

fun main() {
    fun list() {
        val numberList : List<Int> = listOf(1, 2, 3, 4, 5);
        val numberListImplisit = listOf(6, 7, 8, 9, 10);
        val anyList = listOf('a', "Kotlin", 3, true);
        val anyListExplisit : List<Any> = listOf('a', "Kotlin", 3, true);

    //    mengakses list seperti array
        println(anyList[3]);

    //    Pada dasarnya list tidak muttable, maka jika ingin mutable menggunakan function mutableListOf();
        val anyListMutable = mutableListOf('a', "Kotlin", 3, true);
        anyListMutable.add('d'); // menambahkan elemen diakhir element
        anyListMutable.add(1, "love"); // menambahkan elemen di spesifik element
        anyListMutable[3] = false; // mengganti elemen
        anyListMutable.removeAt(1) // menghapus element
    }

    fun set() {
        val integerSet = setOf(1, 2, 4, 2, 1, 5); // Output: [1, 2, 4, 5]
        // Secara otomatis fungsi setOf akan membuang angka yang sama, sehingga hasilnya adalah [1, 2, 4, 5].

        // Kita juga dapat melakukan pengecekan apakah sebuah nilai ada di dalam Set dengan menggunakan kata kunci in.
        val setA = setOf(1, 2, 4, 2, 1, 5)
        val setB = setOf(1, 2, 4, 5)
        // print(5 in setA)

        // Kemudian ada juga fungsi union dan intersect untuk mengetahui gabungan dan irisan dari 2 (dua) buah Set. Sebagai contoh:
        val setC = setOf(1, 5, 7);
        val union =  setA.union(setC); // gabungan
        val intersect = setA.intersect(setC); // irisan
        /*
        * CATATAN
        * Pada Mutable Set kita bisa menambah dan menghapus item namun tak bisa mengubah nilai seperti pada List.*/
    }

    fun map() {
        /*
        * Turunan yang ketiga adalah Map, yakni sebuah collection yang dapat menyimpan data dengan format key-value. Perhatikan contoh berikut:*/
        val capital = mapOf(
            "Jakarta" to "Indonesia",
            "London" to "England",
            "New Delhi" to "India"
        )
        // String yang berada pada sebelah kiri dari kata kunci to adalah sebuah key, sedangkan yang di sebelah kanan merupakan value-nya.
        // println(capital["Jakarta"]);

        // Atau bisa juga menggunakan fungsi getValue():
        // println(capital.getValue("Jakarta"))

        /*Perbedaan keduanya
        * [] => Saat menggunakan simbol [ ] atau yang kita kenal dengan indexing, konsol akan menampilkan hasil null saat key yang dicari tidak ada di dalam Map.
        * getValue() => Sedangkan saat kita menggunakan getValue(), konsol akan memberikan sebuah Exception.*/

        // Kita dapat menampilkan key apa saja yang ada di dalam Map dengan menggunakan fungsi keys().
        val mapKeys = capital.keys;

        /* Info Tambahan
        * Untuk menambahkan key-value ke dalam map, kita perlu memastikan bahwa map yang digunakan adalah mutable. Mari kita ubah map capital yang sudah kita buat sebelumnya menjadi mutable.*/
        val mutableCapital = capital.toMutableMap();

        mutableCapital.put("Amsterdam", "Netherlands");

        /*
        * Namun perlu diperhatikan bahwa menggunakan mutable collection itu tidak disarankan. Apabila terdapat sebuah mutable collection yang diubah oleh lebih dari 1 proses, hasil nya akan sulit untuk diprediksi. Untuk itu, sebaiknya gunakan immutable sebisa mungkin, jika memang dibutuhkan untuk diubah, baru gunakan mutable.*/
    }
}