## Teori Activity

Activity merupakan salah satu komponen penting Android yang berfungsi untuk menampilkan user interface ke layar pengguna. Ini seperti pada saat Anda melihat daftar percakapan pada aplikasi chat atau daftar email pada aplikasi Gmail di ponsel Android Anda. Di dalamnya Anda dapat berinteraksi dengan aplikasi Anda, baik dengan menekan tombol atau menampilkan list.

Seperti ketika Anda membuat project baru di Android Studio, biasanya akan ada dua berkas yang sudah tercipta, yaitu MainActivity dan activity_main.xml. MainActivity ini disebut sebagai class Activity karena mewarisi (extends) superclass Activity. Tugasnya yaitu menampilkan layout activity_main.xml dan mengelola interaksi yang ada di dalamnya.

Umumnya dalam sebuah aplikasi terdapat lebih dari satu Activity yang saling terhubung dengan tugas yang berbeda-beda. Yang perlu diperhatikan yaitu setiap Activity harus terdaftar di AndroidManifest.xml. Secara default, ia akan didaftarkan jika Anda membuat Activity baru dengan cara otomatis. Caranya yaitu klik kanan pada nama `package → New → Activity → pilih template` Activity yang tersedia.

### Activity Lifecycle

![gambar lifecycle](https://developer.android.com/guide/components/images/activity_lifecycle.png?authuser=1)

Developer yang baik harus mengetahui secara detail tentang life cycle sebuah Activity. Terutama untuk melakukan aksi yang tepat, saat terjadi perubahan state Activity. Callback methods yang ada dapat digunakan untuk melakukan beragam proses terkait state dari Activity. Misalnya melakukan semua inisialisasi komponen di onCreate(), melakukan disconnect terhadap koneksi ke server pada onStop() atau onDestroy() dan lain sebagainya.

Pemahaman yang baik tentang daur hidup Activity akan membuat implementasi rancangan aplikasi Anda menjadi lebih baik. Hal ini juga akan meminimalisir terjadinya error/bug/force close yang tidak diinginkan.

### Last in, First Out

![img_lastin_firstout](./assets/img/LIFO_ilustration.PNG)

| Gambar 1                                              | Gambar 2                                                      | Gambar 3                                                   |
| ----------------------------------------------------- | ------------------------------------------------------------- | ---------------------------------------------------------- |
| Aktif: Activity 1 onCreate() → onStart() → onResume() | Aktif: Activity 2 Stack append: Activity 2 [ onResume() ]     | Activity 1 onStop() → onRestart() → onStart() → onResume() |
| Aksi: Klik Button1 (Pindah)                           | Aksi: Klik Hardware Back Button                               | Aktif: Activity 1                                          |
| Stack append: Activity 1 [ onStop() ]                 | Activity 2 [ finish() ] Stack pop: Activity 2 [ onDestroy() ] |                                                            |


### Gambar 1
Jika Anda memiliki sebuah aplikasi yang terdiri dari 2 Activity, maka Activity pertama akan dijalankan setelah pengguna meluncurkan aplikasi melalui ikon aplikasi di layar device. Activity yang ada saat ini berada pada posisi Activity running setelah melalui beberapa state `onCreate (created) → onStart (started) → onResume (resumed)` dan masuk ke dalam sebuah stack Activity.

Bila pada Activity pertama Anda menekan sebuah tombol untuk menjalankan activity kedua, maka posisi state dari Activity pertama berada pada posisi stop. Saat itu, callback `onStop()` pada Activity pertama akan dipanggil.
Ini terjadi karena Activity pertama sudah tidak berada pada layar *foreground* / tidak lagi ditampilkan. Semua informasi terakhir pada Activity pertama akan disimpan secara otomatis. Sementara itu, Activity kedua masuk ke dalam stack dan menjadi Activity terakhir yang masuk.

### Gambar 2
Activity kedua sudah muncul di layar sekarang. Ketika Anda menekan tombol back pada physical button menu utama atau menjalankan metode `finish()`, maka Activity kedua Anda akan dikeluarkan dari stack.
Pada kondisi di atas, state Activity kedua akan berada pada destroy. Oleh karenanya, metode `onDestroy()` akan dipanggil. Kejadian keluar dan masuk stack pada proses di atas menandakan sebuah model **Last In, First Out**. Activity kedua menjadi yang terakhir masuk stack (Last In) dan yang paling pertama keluar dari stack (First Out).

### Gambar 3
Activity pertama akan dimunculkan kembali di layar setelah melalui beberapa state dengan rangkaian callback method yang terpanggil, `onStop → onRestart → onStart → onResume.`

## Saving Activity State
Ketika sebuah Activity mengalami pause kemudian *resume*, maka state dari sebuah Activity tersebut dapat terjaga. Sebabnya, obyek activity masih tersimpan di *memory* sehingga dapat dikembalikan *state*-nya.

Dengan menjaga state dari **Activity**, maka ketika Activity tersebut ditampilkan, kondisinya akan tetap sama dengan kondisi sebelumnya.

Akan tetapi ketika sistem menghancurkan Activity untuk keperluan memori misalnya karena memori habis, maka obyek Activity dihancurkan. Alhasil, ketika Activity ingin ditampilkan kembali diperlukan proses recreate Activity yang dihancurkan tadi.

Kejadian di atas adalah hal yang lumrah terjadi. Oleh karena itu, perubahan yang terjadi pada Activity perlu disimpan terlebih dahulu sebelum ia dihancurkan. Di sinilah metode `onSaveInstanceState()` digunakan.

Dalam onSaveInstanceState terdapat bundle yang dapat digunakan untuk menyimpan informasi. Informasi dapat disimpan dengan memanfaatkan fungsi seperti `putString()` dan `putInt().`

Ketika Activity di-*restart*, bundle akan diberikan kepada metode onCreate dan onRestoreInstanceState. Bundle tersebut akan dimanfaatkan untuk mengembalikan kembali perubahan yang telah terjadi sebelumnya.

![img_savingInstanceDiagram](./assets/img/SaveInstanceState.png)

Proses penghancuran Activity dapat juga terjadi ketika terdapat perubahan konfigurasi seperti perubahan orientasi layar (portrait-landscape), keyboard availability, dan perubahan bahasa. Penghancuran ini akan menjalankan callback method onDestroy dan kemudian menjalankan onCreate. Penghancuran ini dimaksudkan agar Activity dapat menyesuaikan diri dengan konfigurasi baru yang muncul pada kejadian-kejadian sebelumnya.

Hal yang perlu diingat ketika menggunakan onSaveInstanceState adalah untuk tidak menyimpan data yang besar pada bundle. Contohnya, hindari penyimpanan data bitmap pada bundle. Bila data pada bundle berukuran besar, proses serialisasi dan deserialisasi akan memakan banyak memori.

Untuk lebih mendalami Activity, kami menyarankan Anda untuk membaca referensi berikut :

* [Activites](https://developer.android.com/guide/components/activities/intro-activities)