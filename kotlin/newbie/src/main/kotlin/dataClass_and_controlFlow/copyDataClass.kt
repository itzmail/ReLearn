package dataClass_and_controlFlow

data class DataUser(val name : String, val age : Int){
    fun intro(){
        println("My name is $name, I am $age years old")
    }
};

// Kita Bisa melakukan copy file dengan menggunakan cara seperti dibawah
// variable yang kita copy bisa dimodifikasi argumentnya

fun main() {
    val dataUser = DataUser("Ismail", 21);
    val dataUserMod = dataUser.copy(age = 17);

    println(dataUserMod);
}