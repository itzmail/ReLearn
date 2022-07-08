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
    }
    list();
}