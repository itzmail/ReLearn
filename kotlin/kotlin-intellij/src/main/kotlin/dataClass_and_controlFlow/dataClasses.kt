class User(val name : String, val age : Int){
    //     Mengembalikan nilai menjadi String
    override fun toString(): String {
        return "User(name=$name, age=$age)"
    }

    //     Kasus bila kita ingin membandingkan 2 object harus dibaut seperti dibawah ini, tidak seribet kalau kita menggunakan data classss
    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as User

        if (name != other.name) return false
        if (age != other.age) return false

        return true
    }

    override fun hashCode(): Int {
        var result = name.hashCode();
        result = 31 * result + age;
        return result
    }
};
data class DataUser(val name : String, val age : Int);

/*
* Perbedaan Class Biasa dengan Data Class
* Kalau class maka ketika kita butuh suatu value di class yang akan diberikan info umum seperti oo.User@4d7e1886
* Sedangkan kalau kita menggunakan data class saat kita mau ambil value, kita langsung tahu data tersebut
* karena data class sudah tertanam dengan function toString() kalau class biasa kita harus memberikan hal tersebut secara manual*/

fun main() {

// Membandingkan dataUser1 dan dataUser2
    val dataUser1 = DataUser("Ismail", 17);
    val dataUser2 = DataUser("Ismail", 17);
    val dataUser3 = DataUser("Alam", 17);
    println(dataUser1.equals(dataUser2));

    // Jika kita membandingkan dengan Class biasa meskipun kita isinya sama sesuai pengisian yang diata
    // Hasilnya akan tetap false karena Class membandingkan letak memory bukan value

}

/*
* Kelebihan DATA CLASS
* ia memiliki function equals() secara otomatis. Maka jika Anda ingin melakukan komparasi konten antara 2 buah objek, bisa dilakukan dengan mudah*/