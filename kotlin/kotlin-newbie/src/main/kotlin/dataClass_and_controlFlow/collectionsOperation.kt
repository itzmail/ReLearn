package dataClass_and_controlFlow

fun main() {
 /* filter() dan filterNot()
 * Kedua fungsi tersebut akan menghasilkan list baru dari seleksi berdasarkan kondisi yang kita berikan.
 * Sesuai dengan namanya, ini untuk menyaring data */

    val numberList = listOf<Int>(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
    val evenList = numberList.filter { it % 2 == 0 } // menyaring yang sesuai dengan kondisi yang diberikan
    val notEvenList = numberList.filterNot { it % 2 == 0 } // menyaring yang TIDAK sesuai dengan kondisi yang diberikan

/* map()
* Fungsi ini akan membuat collection baru sesuai perubahan yang akan kita lakukan dari collection sebelumnya*/
    val multipledBy5 = numberList.map { it * 5 } // multipliedBy5: [5, 10, 15, 20, 25, 30, 35, 40, 45, 50]
    // it pada kode di atas akan merepresentasikan masing masing item pada numberList.

/* count()
* Fungsi count() dapat kita gunakan untuk menghitung jumlah item yang ada di dalam collection.*/
    print(numberList.count()) // output: 10
    print(numberList.count { it % 3 == 0 }) // output: 3

/*find(), firstOrNull(), & lastOrNull()
* find() -> Untuk mencari item pertama yang sesuai dengan kondisi yang kita tentukan
* Fungsi find() ini memiliki cara kerja yang sama dengan fungsi firstOrNull().
* Artinya, jika di dalam collection tidak ditemukan data yang sesuai, maka fungsi akan mengembalikan nilai null.*/

    val firstOddNumber = numberList.find { it % 2 == 1 } // output: 1
    val firstOrNullNumber = numberList.firstOrNull { it % 2 == 3 } // output: null

/* first() & last()
* fungsi first() dan last() digunakan untuk menyaring item pertama atau terakhir dari sebuah collection.
* Kita juga bisa menambahkan sebuah kondisi dengan parameter lambda.
* Namun perlu diperhatikan jika kita menambahkan kondisi padahal kondisi tersebut tidak terpenuhi,
* apa hasilnya? Exception!*/

    val moreThan10 = numberList.first { it > 10 }
    print(moreThan10) // Output: Exception in thread "main" java.util.NoSuchElementException: Collection contains no element

/* sum()
* Fungsi ini akan menjumlahkan setiap data yang ada pada collection.*/
    val total = numberList.sum() // output: 55

/* sorted()
* sorted() digunakan untuk mengurutkan item yang ada di dalam collection. Secara default fungsi sorted() ini akan mengurutkan data secara ascending.*/
    val kotlinChar = listOf('k', 'o', 't', 'l', 'i', 'n')
    val ascendingSort = kotlinChar.sorted()
    val descendingSort = kotlinChar.sortedDescending()
    println(ascendingSort) // ascendingSort: [i, k, l, n, o, t]
    println(descendingSort)  // descendingSort: [t, o, n, l, k, i]
}