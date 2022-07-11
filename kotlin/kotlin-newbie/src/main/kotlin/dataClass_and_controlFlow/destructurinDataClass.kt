package dataClass_and_controlFlow

// Class DataUser ada di file ./copyDataClass.kt

fun main(){
    val dataUser = DataUser("nrohmen", 17)

    val nama = dataUser.component1()
    val umur = dataUser.component2()

    println("My name is $nama, I am $umur years old")

    // bisa juga seperti ini
    val (name, age) = dataUser

    println("My name is $name, I am $age years old")

    // Menampilkan hal sama tetapi sudah dideklarasikan di class tersebut
    dataUser.intro()
}