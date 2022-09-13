package OOP

/* beberapa objek yang berbeda bisa saja memiliki kesamaan dalam hal tertentu. Di situlah konsep inheritance atau pewarisan harus diterapkan. Pewarisan dapat mencegah kita melakukan perulangan kode.
* Syntaxnya seperti dibawah ini :
* class ChildClass : ParentClass {

}
* Untuk membuat sebuah super atau parent class kita akan membutuhkan open class.
* Kelas pada Kotlin secara default bersifat final, oleh karena itu kita harus mengubahnya menjadi open class sebelum melakukan extends kelas tersebut. */

open class AnimalInheritance(val name: String, val weight: Double, val age: Int, val isCarnivore: Boolean) {
    open fun eat() {
        println("$name sedang makan!")
    }

    open fun sleep() {
        println("$name sedang tidur!")
    }
}



class CatHeritance(pName: String, pWeight: Double, pAge: Int, pIsCarnivore: Boolean, val furColor: String, val numberOffFeet: Int) : AnimalInheritance(pName, pWeight, pAge, pIsCarnivore) {
    fun playWithHuman() {
        println("$name bermain bersama Manusia!")
    }

    override fun eat() {
        println("$name sedang makan ikan !");
    }

    override fun sleep() {
        println("$name sedang tidur di bantal !")
    }
}

fun main(args: Array<String>){
    val dicodingCat = CatHeritance("Dicoding Miaw", 3.2, 2, true, "Brown", 4)

    dicodingCat.playWithHuman()
    dicodingCat.eat()
    dicodingCat.sleep()
}