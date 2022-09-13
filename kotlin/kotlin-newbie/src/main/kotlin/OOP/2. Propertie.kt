package OOP

class AnimalProp{
    var name: String = "Dicoding Miaw"
        get(){
            println("Fungsi Getter terpanggil")
            return field // Pada fungsi get(), kita perlu mengembalikan nilai sesuai tipe data dari propertinya atau kita dapat mengembalikan nilai dari properti itu sendiri dengan menggunakan keyword field
        }
        set(value){
            println("Fungsi Setter terpanggil")
            field = value
        }
}

fun main(){
    val dicodingCat = AnimalProp()
    println("Nama: ${dicodingCat.name}" )
    dicodingCat.name = "Goose"
    println("Nama: ${dicodingCat.name}")
}