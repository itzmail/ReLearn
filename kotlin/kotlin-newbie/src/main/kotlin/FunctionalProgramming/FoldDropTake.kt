package FunctionalProgramming

fun main(args: Array<String>) {
    val numbers = listOf(1, 2, 3, 4, 5, 6);

    /*Fungsi fold() memerlukan 2 (dua) argumen yaitu nilai awal untuk perhitungan dan lambda expression yang nilai kembaliannya digunakan untuk menentukan nilai awal selanjutnya. Nah, di dalam lambda expression nya juga terdapat 2 (dua) argumen. Yaitu, argumen current yang merepresentasikan nilai awal dan argumen item merepresentasikan masing-masing item yang berada pada numbers.*/
    val fold = numbers.fold(10) { current, item ->
        println("current $current");
        println("item $item");
        println();
        current + item;
    }

    /* Selanjutnya adalah fungsi drop(), fungsi yang bisa kita manfaatkan untuk memangkas item yang berada di dalam sebuah objek collection berdasarkan jumlah yang kita tentukan*/
    val drop = numbers.drop(3);

    println(drop);

    /* Jika fungsi drop() digunakan untuk memangkas, fungsi take() bisa kita manfaatkan untuk menyaring item yang berada di dalam sebuah objek collection. Pemanggilan fungsi take() sama halnya seperti fungsi drop() */
    val take = numbers.take(3);
    println(take);

}