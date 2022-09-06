# Bedah Kode

## Intent Implicit

```java
// Kotlin
val phoneNumber = "081210841382"
val dialPhoneIntent = Intent(Intent.ACTION_DIAL, Uri.parse("tel:$phoneNumber"))
startActivity(dialPhoneIntent)

// Java
String phoneNumber = "081210841382";
Intent dialPhoneIntent = new Intent(Intent.ACTION_DIAL, Uri.parse("tel:" + phoneNumber));
startActivity(dialPhoneIntent);
```

Baru saja kita mengimplementasikan penggunaan intent secara implicit untuk melakukan proses dial sebuah nomor telepon. Pada bagian `Intent(Intent.ACTION_DIAL, Uri.parse("tel:"+phoneNumber))` kita menggunakan inputan `Intent(ACTION, Uri)` pada konstruktor sewaktu menciptakan obyek Intent di mana:

Action : **Intent.ACTION_DIAL**

Uri : **Uri.parse("tel:"+phoneNumber)**

Variabel `ACTION_DIAL` menentukan intent filter dari aplikasi-aplikasi yang bisa menangani *action* tersebut. Di sini aplikasi yang memiliki kemampuan untuk komunikasi akan muncul pada opsi pilihan, sebagaimana ditampilkan ke pengguna. 

Selain `ACTION_DIAL`, di Android sudah tersedia berbagai action yang tinggal didefinisikan sewaktu menciptakan obyek `Intent` untuk mengakomodir berbagai tujuan. 

Link source :
* [Intent](https://developer.android.com/reference/android/content/Intent.html)

### Apa itu URI (Uniform Resource Identifier)

Buat yang belum tau apa itu Uri, berikut penjelasan singkatnya:

Uri adalah sebuah untaian karakter yang digunakan untuk mengidentifikasi nama, sumber, atau layanan di internet sesuai dengan RFC 2396. Pada `Uri.parse("tel:"+phoneNumber)` kita melakukan parsing Uri dari bentuk teks string menjadi sebuah obyek uri dengan menggunakan metode static `parse(String)`. Secara struktur, dibagi menjadi:4

![imgUri](../assets/img/URI.png)

Dimana **“tel”** adalah sebuah skema yang disepakati untuk sumber daya telepon dan phoneNumber adalah variabel string yang bernilai “081210841382”. Skema lain dari Uri seperti *“geo”* untuk peta, *“http”* untuk browser sisanya bisa dilihat di halaman ini:

* [Common Intents](https://developer.android.com/guide/components/intents-common.html)

## Proces Intent Implicit
![ImgProcesImplicit](../assets/img/ilustrationIntentImplicity.png)

1. Aplikasi kita menjalankan intent untuk `ACTION_DIAL` melalui `startActivity().`
2. Sistem Android akan melakukan seleksi terhadap semua aplikasi yang memiliki kemampuan untuk menangani action tersebut. Sistem Android akan menentukan aplikasi mana saja yang bisa memproses action berdasarkan intent filter yang telah ditentukan di berkas `AndroidManifest.xml` pada masing-masing aplikasi.
   Sistem Android akan menampilkan opsi aplikasi-aplikasi mana saja yang bisa menangani action tersebut ke pengguna.
Pengguna memilih salah satu opsi aplikasi dan kemudian sistem Android akan me-routing ke activity pada aplikasi yang dipilih yang memiliki intent-filter untuk aksi **ACTION_DIAL.**
3. Aplikasi yang dipilih pun muncul di layar dengan nomor telepon yang sudah diatur.

Untuk source code materi , silakan unduh di tautan berikut ini:

* [Source Code MyIntentApp (Kotlin)](https://github.com/dicodingacademy/a51-android-pemula-labs/tree/master-kotlin/MyIntentApp)
* [Source Code MyIntentApp (Java)](https://github.com/dicodingacademy/a51-android-pemula-labs/tree/master/MyIntentApp)