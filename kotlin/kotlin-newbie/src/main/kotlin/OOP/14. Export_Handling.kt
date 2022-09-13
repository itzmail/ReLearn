package OOP

// Try Catch
/* Salah satu cara untuk menangani suatu exception adalah menggunakan try-catch. Kode yang dapat membangkitkan suatu exception disimpan dalam blok try, dan jika exception tersebut terjadi, maka blok catch akan terpanggil. Berikut cara penulisan try-catch pada Kotlin:
*
* try {
    // Block try, menyimpan kode yang membangkitkan exception
} catch (e: SomeException) {
    // Block catch akan terpanggil ketika exception bangkit.
} */

fun main(args: Array<String>) {
    val someStringValue: String? = "12.90"
    var someIntValue: Int = 1

    try {
        someIntValue = someStringValue!!.toInt()
    } catch (e: NullPointerException) {
        someIntValue = 0
    } catch (e: NumberFormatException) {
        someIntValue = -1
    } finally {
        when(someIntValue){
            0 -> println("Catch block NullPointerException terpanggil !")
            -1 -> println("Catch block NumberFormatException terpanggil !")
            else -> println(someIntValue)
        }
    }
}

/*
* Output kode di atas menjelaskan bahwa blok catch dengan parameter NullPointerException terpanggil. Sebabnya, pada variabel someStringValue kita menetapkan null sebagai nilainya.

Berbeda ketika kita menginisialisasi nilai someStringValue dengan nilai “12.0” maka exception yang akan terjadi adalah NumberFormatException dengan begitu blok catch kedua yang akan terpanggil dan akan menghasilkan output sebagai berikut:
Catch block NumberFormatException terpanggil!

Namun jika kedua exception tersebut tidak terjadi, dalam arti nilai someStringValue berhasil diubah dalam bentuk Integer, maka output yang dihasilkan adalah nilai dari Integernya tersebut. Contohnya, saat nilai someStringValue diinisialisasi dengan nilai “12.” Berikut ini hasilnya. :*/