package FunctionalProgramming

/* Dengan Kotlin, kita bisa memisahkan lambda expression menjadi fungsi tersendiri dan mereferensikannya langsung sebagai instance dari function type dengan cara seperti di bawah ini:*/

/*val sum: (Int, Int) -> Int = ::count;

fun count(va: Int, vb: Int): Int {
    return va + vb;
}*/

/* Kode di atas ditulis dengan mekanisme Reflection yang berarti seperangkat fitur bahasa dan library yang memungkinkan kita untuk mengamati struktur kode dari proyek yang sedang kita kerjakan secara langsung. */

/* Function References */
fun isEvenNumber(number: Int) = number % 2 == 0;
    //  :: kita bisa menggunakannya sebagai instances dari function type.

    // Selain itu, kita juga bisa mereferensikan sebuah extensions function. Caranya dengan ikut menyertakan objek yang menjadi receivernya sebelum operator ::
    fun Int.isOddNumber() = this % 2 != 0;

/* Property References
* Operator :: juga dapat digunakan untuk mereferensikan sebuah properti. Dengan Operator, kita bisa mengakses apa yang menjadi bagian dari properti tersebut seperti nama, fungsi setter getter, dll.*/
var message = "Kotlin";

// https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-mutable-property/
// https://kotlinlang.org/api/latest/jvm/stdlib/kotlin.reflect/-k-property/

/* Ekspresi ::message akan dievaluasi ke dalam objek dengan KMutableProperty yang memungkinkan kita untuk membaca nilainya dengan menggunakan get(), menetapkan nilai menggunakan set() dan mendapatkan nama dari properti tersebut menggunakan properti name.
* Sedangkan untuk properti yang bersifat immutable seperti val message = “Kotlin”, ::message akan mengembalikan nilai dengan tipe KProperty, yang mana hanya terdapat fungsi get() di dalamnya.*/


fun main(args: Array<String>) {
    val numbers = 1.rangeTo(10);
    val evenNumbers = numbers.filter(::isEvenNumber);
    val oddNumbers = numbers.filter(Int::isOddNumber);

    // Property Reference Example
    println(::message.name);
    println(::message.get());

    ::message.set("Mantap")

    println(::message.get())

//    println(evenNumbers);
//    println(oddNumbers);
}
