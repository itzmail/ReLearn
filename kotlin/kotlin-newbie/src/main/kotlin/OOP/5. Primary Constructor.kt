package OOP

/* Ketika suatu objek dibuat, semua properti pada kelas tersebut harus memiliki nilai. Kita dapat langsung menginisialisasi pada properti tertentu atau menginisialisasinya melalui constructor (konstruktor). Konstruktor merupakan fungsi spesial yang digunakan untuk menginisialisasi properti yang terdapat pada kelas tersebut.

Terdapat 2 (dua) tipe konstruktor pada Kotlin, yaitu primary constructor dan secondary constructor. */

/* Primary constructor juga dapat memiliki nilai default, dengan begitu jika kita tidak menetapkan nilai untuk parameter tersebut maka properti tersebut akan memiliki nilai default. Contohnya, kita bisa memberikan nilai default terhadap properti age. Sehingga ketika pembuatan objek, pengiriman nilai age pada primary constructor bersifat opsional.  */

class AnimalPrime(val name: String, val weight: Double, val isMammal: Boolean, val age: Int = 10 )

// Primary Constructor
/* jika kita akan membuat suatu objek dari sebuah kelas dan kelas tersebut memiliki primary constructor di dalamnya, maka kita diharuskan mengirim nilai sesuai properti yang dibutuhkan. Penulisan primary constructor mirip seperti parameter pada fungsi. Properti cukup dituliskan pada header class diawali dengan var atau val. */

// Init block
/* Kotlin menyediakan blok init yang memungkinkan kita untuk menuliskan properti di dalam body class ketika kita menggunakan primary constructor. Memang, memiliki kode banyak di dalam body class bukanlah hal yang baik. Kotlin bertujuan agar kita dapat menuliskan kode seminimal mungkin. Tapi blok init di sini memiliki beberapa fungsi selain menginisialisasi properti kelas.  satu fungsi lainnya adalah untuk membantu dalam memvalidasi sebuah nilai properti sebelum diinisialisasi. Pada kelas Animal contohnya, kita dapat melakukan verifikasi bahwa berat dan umur hewan tidak boleh bernilai kurang dari nol. */

class AnimalBlock(name: String, weight: Double, pAge: Int, isMammal: Boolean){
    val name: String
    val weight: Double
    val age: Int
    val isMammal: Boolean

    //  Fungsi init dijalankan ketika suatu objek dibuat dengan menggunakan primary constructor.
    //  Kata kunci this tersebut merujuk kepada suatu kelas dimana jika kita menggunakannya diikuti dengan nama properti maka kita menunjuk pada properti yang terdapat pada kelas tersebut. Dengan begitu, tidak akan ada ambiguitas walaupun kita menggunakan penamaan yang sama antara properti dan parameter primary constructor.
    init {
        this.weight = if(weight < 0) 0.1 else weight
        age = if(pAge < 0) 0 else pAge
        this.name = name
        this.isMammal = isMammal
    }
}

fun main (args: Array<String>) {
    // Primary Constructor
    val myCat = AnimalPrime("Catty", 4.3, true);
    println("Nama: ${myCat.name}, Berat: ${myCat.weight}, Umur: ${myCat.age}, mamalia: ${myCat.isMammal}")

    val myCatBlock = AnimalBlock("JoCo", 3.2, 2, false)
    // Init Block
}

