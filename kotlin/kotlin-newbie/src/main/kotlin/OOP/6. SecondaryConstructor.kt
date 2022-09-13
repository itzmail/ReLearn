package OOP

/* Secondary constructor digunakan ketika kita ingin menginisialisasi sebuah kelas dengan cara yang lain. Anda dapat membuat lebih dari satu secondary constructor. */
/* Dengan begitu, objek Animal dapat diinisialisasi dengan secondary constructor ketika nilai name, weight, age dan isMammal tersedia. Tetapi jika nilai isMammal tidak tersedia,  primary constructor lah yang akan digunakan dan nilai isMammal dapat diinisialisasi pada blok init dengan nilai default. */

// Default Constructor
/* Kotlin secara otomatis membuat sebuah default constructor pada kelas jika kita tidak membuat sebuah konstruktor secara manual. Perhatikan kode berikut: */

class AnimalSecondary(name: String, weight: Double, age: Int) {
    var name: String = "Nama Nya Lupa oi" // default constructor
    val weight: Double
    val age: Int
    var isMammal: Boolean

    init {
        this.weight = if(weight < 0) 0.1 else weight
        this.age = if(age < 0) 0  else age
        this.name = name
        this.isMammal = false
    }

    constructor(name: String, weight: Double, age: Int, isMammal: Boolean) : this(name, weight, age) {
        this.isMammal = isMammal;
    }
}

fun main(args: Array<String>) {
    val dicodingCat = AnimalSecondary("Dicoding Miaw", 2.5, 2, true)
    println("Nama: ${dicodingCat.name}, Berat: ${dicodingCat.weight}, Umur: ${dicodingCat.age}, mamalia: ${dicodingCat.isMammal}")

    val dicodingBird = AnimalSecondary("Dicoding tweet", 0.5, 1)
    println("Nama: ${dicodingBird.name}, Berat: ${dicodingBird.weight}, Umur: ${dicodingBird.age}, mamalia: ${dicodingBird.isMammal}")
}