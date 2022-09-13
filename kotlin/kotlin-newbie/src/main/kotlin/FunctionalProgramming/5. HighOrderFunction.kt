package FunctionalProgramming

fun main(args: Array<String>) {
    printResult(
        10,
        { value ->
            value + value
        },
    ) // output: 20
}

fun printResult(value: Int, sum: (Int) -> Int) {
    val result = sum(value)
    println(result)
}

/*
* Konsep ini dinamakan sebagai Higher-Order Function,
* yaitu sebuah fungsi yang menggunakan fungsi lainnya sebagai parameter,
* menjadikan tipe kembalian, ataupun keduanya.
* Yang perlu diperhatikan adalah, jika argumen terakhir dari fungsi merupakan sebuah lambda expression,
* maka lambda expression tersebut ditempatkan di luar parenthesis seperti pada contoh kode di atas.*/