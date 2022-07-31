package OOP

/* Ada beberapa yang hanya dapat diakses dari dalam dan ada yang dapat diakses dari luar kelasnya. Dengan menentukan hak akses tersebut, kita dapat membatasi akses data pada sebuah kelas. Berikut macam - macam hak akses dan penjelasan singkatnya yang dapat digunakan pada Kotlin:
* 1. Public: Hak akses yang cakupannya paling luas. Anggota yang diberi modifier ini dapat diakses dari manapun.
* 2. Private: Hak akses yang cakupannya paling terbatas. Anggota yang menerapkannya hanya dapat diakses pada scope yang sama.
* 3. Protected: Hak akses yang cakupannya terbatas pada hirarki kelas. Anggota hanya dapat diakses pada kelas turunannya atau kelas itu sendiri.
* 4. Internal: Hak akses yang cakupannya terbatas pada satu modul. Anggota yang menggunakannya tidak dapat diakses diluar dari modulnya tersebut.
* Semua modifier tersebut bisa digunakan untuk kelas, objek, konstruktor, fungsi, beserta properti yang ada di dalamnya. Kecuali modifier protected yang hanya bisa digunakan untuk anggota di dalam sebuah kelas dan interface. Protected tidak bisa digunakan pada package member seperti kelas, objek, dan yang lainnya.
* */

// Public
/* default modifier pada Kotlin adalah public. Ketika sebuah anggota memiliki hak akses public maka anggota tersebut dapat diakses dari luar kelasnya melalui sebuah objek kelas tersebut. */

// Private
/* Ketika suatu anggota memiliki hak akses private, maka anggota tersebut tidak dapat diakses dari luar scope-nya. Untuk menggunakan modifier private kita perlu menambahkan keyword private seperti contoh berikut: */

// Protected
/* Hak akses protected mirip seperti private, namun pembatasannya lebih luas dalam sebuah hirarki kelas. Hak akses protected digunakan ketika kita menginginkan sebuah anggota dari induk kelas dapat diakses hanya oleh kelas yang merupakan turunannya. */

// Internal
/* Internal merupakan hak akses baru yang diperkenalkan pada Kotlin. Hak akses ini membatasi suatu anggota untuk dapat diakses hanya pada satu modul. */

// Contoh protected :
open class AnimalProtected(val name: String, protected val weight: Double);

// Contoh Internal
internal class AnimalInternal(val name: String);

/* Pada contoh di atas, kelas Animal telah ditetapkan sebagai kelas internal, maka kelas tersebut hanya dapat diakses dari modul yang sama. Hak akses ini sangat berguna ketika kita mengembangkan sebuah aplikasi yang memiliki beberapa modul di dalamnya. */

class Cat(pName: String, pWeight: Double): AnimalProtected(pName, pWeight);

class AnimalPrivate(private var name: String, private val weight: Double, private val age: Int, private val isMammal: Boolean){
    fun getName(): String {
        return name;
    }

    fun setName(newName: String) {
        name = newName;
    }
}

fun main(args: Array<String>) {
    val dicodingCat = AnimalPrivate("Cucing", 2.52, 2, true);
    val cat = Cat("MY Cat", 2.5);
    val catIntel = AnimalInternal("Mantapu jiwa");

    // println("Nama: ${dicodingCat.name}") // error Cannot access '[PROPERTY]': it is private in 'Animal'.
    /*
    * Satu satunya cara untuk mengakses properti private dari sebuah kelas adalah dengan menambahkan fungsi getter dan setter secara manual. Fungsi getter dan setter sebenarnya dihasilkan secara otomatis oleh Kotlin ketika properti tersebut memiliki hak akses public tetapi tidak untuk private
    */
    /*println(dicodingCat.getName())
    dicodingCat.setName("Gooose")
    println(dicodingCat.getName())*/

    // Protected
    println("Nama Kucing: ${cat.name}")
    // println("Berat Kucing: ${cat.weight}") //Cannot access 'weight': it is protected in 'C
    println("Nama Ini ${catIntel}");
}

