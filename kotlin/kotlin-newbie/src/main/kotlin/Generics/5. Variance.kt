package Generics

// Apa itu variance?
/* Variance adalah konsep yang menggambarkan bagaimana sebuah tipe yang memiliki subtipe yang sama dan tipe argumen yang berbeda saling berkaitan satu sama lain. Variance dibutuhkan ketika kita ingin membuat kelas atau fungsi generic dengan batasan yang tidak akan mengganggu dalam penggunaannya. */

abstract class Vehicle(wheel: Int);
class Car(speed: Int) : Vehicle(4);
class MotorCycle(speed: Int) : Vehicle(2);

fun main() {
    val car = Car(200)
    val motorCycle = MotorCycle(100)
    var vehicle: Vehicle = car
    vehicle = motorCycle

    /* Bisa kita perhatikan pada kode di atas, variabel car dan motorcycle merupakan subtipe dari Vehicle sehingga kita bisa melakukan assignment antar dua variabel tersebut. Maka seharusnya kode tersebut akan berhasil dikompilasi. */

    val carList = listOf(Car(100) , Car(120))
    val vehicleList = carList

    /* Dari contoh di atas, kita melihat bagaimana variance menggambarkan keterkaitan antara carList dan vehicleList di mana Car merupakan subtipe dari Vehicle.  */
}

/* Nah, itu adalah contoh sederhana bagaimana variance bekerja. Lalu bagaimana cara membuat kelas generic yang memiliki variance? Caranya sama seperti ketika kita membuat generic kelas pada umumnya. Namun untuk tipe parameternya kita membutuhkan kata kunci out untuk covariant atau kunci in untuk contravariant. */

// Covariant
interface List<out E> : Collection<E> {
    operator fun get(index: Int): E // bedanya typenya di return
}
/* Ketika kita menandai sebuah tipe parameter dengan kata kunci out maka nilai dari tipe parameter tersebut hanya bisa diproduksi seperti menjadikanya sebagai return type. Serta tidak dapat dikonsumsi seperti menjadikannya sebagai tipe argumen untuk setiap fungsi di dalam kelas tersebut.  */

// Contravariant
/* Berbanding terbalik dengan saat kita menandainya dengan kata kunci out, bagaimana saat kita menandainya dengan dengan kata kunci in ?  Nilai dari tipe parameter tersebut bisa dikonsumsi dengan menjadikannya sebagai tipe argumen untuk setiap fungsi yang ada di dalam kelas tersebut dan tidak untuk diproduksi. Contoh dari deklarasinya bisa kita lihat pada kelas Comparable pada Kotlin berikut: */

interface Comparable<in T> {
    operator fun compareTo(other: T): Int // bedanya typenya di param
}