package FunctionalProgramming

/*Scope Function*/

/*Fungsi inilah yang dinamakan sebagai scope function.
Beberapa fungsi yang berada di dalamnya antara lain let, run, with, apply, dan also.
Pada dasarnya beberapa fungsi tersebut melakukan tugas yang sama yaitu mengeksekusi blok kode dari dalam sebuah objek.
Yang membedakannya adalah bagaimana objek tersebut tersedia dan seperti apa hasil yang didapat dari seluruh expression yang berada di dalam blok.*/

/*Context Object*/

/*Terdapat 2 (dua) cara, yaitu: diakses sebagai lambda receiver (this) dan lambda argumen (it).
Keduanya memiliki kapabilitas yang sama dan tentunya digunakan untuk kasus yang berbeda.*/

// Lambda Receiver (this)
    /* Beberapa fungsi yang menggunakan lambda receiver adalah run, with, dan apply.
     * Ketika ingin mengakses konteks dari sebuah objek, kita bisa saja tidak menuliskan atau menghilangkan kata kunci this. */

// Lambda argument (it)

    /* fungsi yang menggunakan lambda argument untuk mengakses konteks dari sebuah objek adalah fungsi let dan also.
     * Berbeda dengan lambda receiver, nilai dari argumen tersebut dapat kita gunakan untuk diproduksi atau di inisialisasikan untuk variabel lain. Contohnya seperti berikut:*/