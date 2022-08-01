package OOP

/* Interfaces merupakan suatu konsep sifat umum yang nantinya digunakan oleh suatu kelas agar dapat memiliki sifat tersebut. Interface sangat mirip dengan abstract class, namun tanpa sebuah properti deklarasi dan fungsi yang dideklarasikan tanpa isi. Tujuan dari interface ini hanya untuk diimplementasikan oleh sebuah kelas. Kelas yang mengimplementasikan sebuah interface diharuskan melakukan override seluruh properti dan fungsi sekaligus mendefinisikan isi fungsi yang terdapat pada interfaces-nya. */
/* Cara pembuatan sebuah interface mirip dengan membuat kelas. Pada umumnya penamaan sebuah interface dituliskan dengan awalan huruf I kapital. Hal ini tidak diharuskan secara sintaks tapi ini merupakan penerapan terbaik dalam penamaan sebuah interface. Tujuannya agar dapat mudah membedakannya dengan kelas. */

interface IFly {
    fun fly();
    val numberOfWings: Int;
}

// Kita akan mendapati eror ketika selesai menuliskan kode tersebut. Pesan eror tersebut mengatakan “class Bird is not abstract and does not implement abstract member”. Maksud dari eror tersebut adalah kita harus  mengimplementasi sebuah abstract member yang pada kasus ini adalah sebuah fungsi abstract yang terdapat pada IFly.
// Sama seperti fungsi, kita juga diharuskan melakukan override properti.

class Bird(override val numberOfWings: Int) : IFly {
    override fun fly() {
        if(numberOfWings > 0) println("flying with $numberOfWings wings")
        else println("I'm Flying without wings")
    }
}

fun main(args: Array<String>) {
    val bird = Bird(5);
    bird.fly();
}