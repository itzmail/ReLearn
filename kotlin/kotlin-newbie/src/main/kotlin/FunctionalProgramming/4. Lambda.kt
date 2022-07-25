package FunctionalProgramming

/*Lambda Expression
* Lambda expression, biasa disebut dengan anonymous function atau function literal adalah fitur yang cukup populer sampai sekarang dalam dunia functional programming.*/

/*
* Karakteristik Lambda
* Dalam menggunakan lambda, kita tidak perlu mendeklarasi tipe spesifik untuk nilai kembaliannya. Tipe tersebut akan ditentukan oleh kompiler secara otomatis.
* Walaupun merupakan sebuah fungsi, lambda tidak membutuhkan kata kunci fun dan visibility modifier saat dideklarasikan, karena lambda bersifat anonymous.
* Parameter yang akan ditetapkan berada di dalam kurung kurawal {}.
* Ketika ingin mengembalikan nilai, kata kunci return tidak diperlukan lagi karena kompiler akan secara otomatis mengembalikan nilai dari dalam body.
* Lambda expression dapat digunakan sebagai argumen untuk sebuah parameter dan dapat disimpan ke dalam sebuah variabel.
*
* lambda sangat berguna karena dapat membuat penulisan kode menjadi lebih mudah dan sederhana. Salah satu contohnya adalah kita bisa menghindari boilerplate code dalam menggunakan anonymous class seperti berikut:*/

val notLambda = object :Runnable{
    override fun run() {
        // TODO:
    }
}

/*Dengan lambda, kita bisa menyederhadnakannya menjadi seperti dibawah ini:*/

val lambda = Runnable {
    // TODO:
}

val messageLambda = { println("Hello from Lambda")}
// dengan parameter
val msgLambdaParam = { message: String -> println(message)}

fun main(args: Array<String>) {
    messageLambda();
    msgLambdaParam("Lambda Mantap!!")
}