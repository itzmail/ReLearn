package OOP

/* Pada materi Kotlin Functional Programming kita sudah mengenal bahwa Kotlin dapat meng-extends sebuah fungsi pada kelas tanpa harus mewarisi kelasnya. Hal ini dilakukan dengan deklarasi khusus yang disebut dengan Extension. */

/* Extension properties pada Kotlin sama halnya seperti melakukannya pada Extension function. Kita dapat menambahkan sebuah properti tanpa harus membuat sebuah kelas yang mewarisi kelas tersebut. Tetapi perlu diingat bahwa properti yang kita buat bukan benar - benar berada pada kelas. Sebabnya, Extension properties dilakukan di luar kelas. Dengan demikian, Extension properties hanya bisa didefinisikan dengan cara menyediakan getter dan/atau setter secara eksplisit. Mari kita buat sebuah Extension properties pada kelas Animal. */

class AnimalExtProps(var name: String, var weight: Double, var age: Int, var isMammal: Boolean)
val Animal.getAnimalInfo : String
    get() =  "Nama: ${this.name}, Berat: ${this.weight}, Umur: ${this.age} Mamalia: ${this.isMammal}"


fun main(args : Array<String>) {
    val dicodingCat = AnimalExtProps("Dicoding Miaw", 5.0, 2, true)
//    println(dicodingCat.getAnimalInfo) // Nama: Dicoding Miaw, Berat: 5.0, Umur: 2 Mammalia: true
}