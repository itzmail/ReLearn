package OOP

/* Class itu ibaratkan Blue Print sesuatu */

// BluePrint
class Animal(
    val name: String,
    val weight: Double,
    val age: Int,
    val isMammal: Boolean
) {
// val yang menjadi parameter merupakan attribute

    // fun di bawah ini merupakan behaviour
    fun eat(){
        println("$name makan!")
    }

    fun sleep() {
        println("$name tidur!")
    }
}

fun main() {
    val dicodingCat = Animal("Dicoding Miaw", 4.2, 2,true)
    println("Nama: ${dicodingCat.name}, Berat: ${dicodingCat.weight}, Umur: ${dicodingCat.age}, mamalia: ${dicodingCat.isMammal}" )
    dicodingCat.eat()
    dicodingCat.sleep()
}