package FunctionalProgramming

/*
* Tujuannya adalah agar kode lebih terstruktur dan mudah dibaca. Namun pada praktiknya, terkadang kode yang ada pada fungsi tersebut malah lebih panjang dan susah dibaca. Salah satu penyebabnya adalah karena penulisan kode yang berulang atau lainnya.

Untuk mengatasinya, kita bisa memisahkannya lagi menjadi sebuah fungsi lokal (inner function) dengan hak akses terbatas hanya untuk fungsi terluarnya. Ini bisa dilakukan karena pada Kotlin kita bisa mendefinisikan sebuah fungsi di mana pun, bahkan di dalam sebuah fungsi (function inside function).*/

fun setWord(message: String) {
    fun printMessage() {
        println(message)
    }

    printMessage()
}

fun sum(valueA: Int, valueB: Int, valueC: Int): Int {
    fun Int.validateNumberExtension() {
        if(this == 0) {
            throw IllegalAccessException("Value must be better than 0");
        }
    }

    fun validateNumber(value: Int) {
        if(value == 0) {
            throw IllegalAccessException("Value must be better than 0");
        }
    }

    validateNumber(valueA);
    valueB.validateNumberExtension()
    validateNumber(valueC);

    return valueA + valueB + valueC;
}

fun main(args: Array<String>) {
    setWord("Mantap");
    sum(2, 5, 5)

}