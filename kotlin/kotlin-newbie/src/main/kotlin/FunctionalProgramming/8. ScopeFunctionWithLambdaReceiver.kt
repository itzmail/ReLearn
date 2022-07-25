package FunctionalProgramming

/* Run
*  Fungsi run akan mengembalikan nilai berdasarkan expression yang berada di dalam blok lambda. Untuk mengakses konteks dari objek, ia akan menggunakan receiver (this). Fungsi run akan sangat berguna jika di dalam blok lambda terdapat inisialisasi objek dan perhitungan untuk nilai kembalian.*/

/* With
* Selanjutnya fungsi with. Pada dasarnya fungsi with bukanlah sebuah extension melainkan hanyalah fungsi biasa. Konteks objeknya disematkan sebagai argumen dan dari blok lambda diakses sebagai receiver.*/

/* Apply
* nilai yang dikembalikan dari fungsi apply adalah nilai dari konteks objeknya dan objek konteksnya tersedia sebagai receiver (this). Baiknya fungsi apply dapat melakukan inisialisasi atau konfigurasi dari receiver-nya. */

fun main(args: Array<String>) {

//    Run
    val textRun = "Hello";
    val resultRun = textRun.run {
        val from = this;
        val to = this.replace("Hello", "Kotlin")
        "replace text from $from to $to";
    }
    println(resultRun);

//    with
    val textWith = "Hello Ismail!";
    val resultWith = with(textWith) {
        println("Value is $this");
        println("with length ${this.length}")
    }

//    apply
    val textApply = StringBuilder().apply {
        append("Hello ");
        append("Nur Alam!")
    }
    println(textApply);
}