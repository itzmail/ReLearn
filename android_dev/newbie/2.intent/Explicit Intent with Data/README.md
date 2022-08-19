# Bedah Kode
Pada bagian sebelumnya Anda sudah mempelajari bagaimana memindahkan satu Activity ke Activity lain dengan membawa data. Dan itu sangat penting karena ketika kita mengembangkan suatu aplikasi Android yang kompleks, akan ada banyak Activity yang terlibat. Untuk memberikan pengalaman yang baik kepada pengguna, perpindahan Activity dengan data, sangat krusial.

## Konstanta
Konstanta yaitu sebuah variabel yang nilainya tetap, biasanya digunakan sebagai key(kunci) yang dipakai untuk mengirim dan menerima data.

```java
// Kotlin
class MoveWithDataActivity : AppCompatActivity() {
 
    companion object {
        const val EXTRA_AGE = "extra_age"
        const val EXTRA_NAME = "extra_name"
    }
 
    ...
}

// Java
public class MoveWithDataActivity extends AppCompatActivity {
    public static final String EXTRA_AGE = "extra_age";
    public static final String EXTRA_NAME = "extra_name";
 
    ...
}
```

Dengan begitu, saat di MainActivity kita bisa memanggil variabel tersebut dengan cara menulis kelasnya dulu, yaitu seperti ini `MoveWithDataActivity.EXTRA_NAME.`

## Put Extra
```java
// Kotlin
val moveWithDataIntent = Intent(this@MainActivity, MoveWithDataActivity::class.java)
moveWithDataIntent.putExtra(MoveWithDataActivity.EXTRA_NAME, "DicodingAcademy Boy")
moveWithDataIntent.putExtra(MoveWithDataActivity.EXTRA_AGE, 5)
startActivity(moveWithDataIntent)

// Java
Intent moveWithDataIntent = new Intent(MainActivity.this, MoveWithDataActivity.class);
moveWithDataIntent.putExtra(MoveWithDataActivity.EXTRA_NAME, "DicodingAcademy Boy");
moveWithDataIntent.putExtra(MoveWithDataActivity.EXTRA_AGE, 5);
startActivity(moveWithDataIntent);

```

Perbedaan mendasar antara memindahkan Activity `dengan membawa data atau tidak, adalah dengan menempatkan data ke obyek Intent pada baris ini.`

Kita memanfaatkan metode `putExtra()` untuk mengirimkan data bersamaan dengan obyek `Intent`. Sedangkan metode `putExtra()` itu sendiri merupakan metode yang menampung pasangan key-value dan memiliki beberapa pilihan tipe input seperti berikut:

| Name  | MoveWithDataActivity.EXTRA_NAME dimana EXTRA_NAME adalah variabel static bertipe data string dan bernilai “extra_name” pada MoveWithDataActivity. Penentuan nilai untuk key parameter untuk intent adalah bebas, di sini kami merekomendasikan format terbaik yang biasa diimplementasikan.|
| Value | DicodingAcademy Boy dengan tipe data string.|

## Get Data
Setelah data dikirimkan, selanjutnya adalah mengambil data tersebut. 

Di sini kita akan mengirimkan data bertipe string ke MoveWithDataActivity. Di dalam `MoveWithdataActivity` kita akan mengambil nilai data berdasarkan key yang dikirimkan dengan menggunakan metode `getIntent().getStringExtra(key)`. Implementasinya sebagai berikut:

```java
// Kotlin
val name = intent.getStringExtra(EXTRA_NAME)

// Java
String name = getIntent().getStringExtra(EXTRA_NAME);
```
### Catatan!
Key yang dikirimkan melalui putExtra() harus sama dengan key sewaktu mengambil nilai dari data yang dikirimkan melalui getStringExtra().

Fungsi dari `EXTRA_NAME` sendiri yaitu sebagai **Key**. Seperti yang dijelaskan pada modul, untuk mengirim data dengan intent kita perlu mengirimnya dalam format `putExtra(Key,Value)`. Dengan Key bertindak sebagai kunci yang dipakai untuk mengambil data di activity tujuannya, dan value adalah data yang akan dikirimkan. Jadi kalau dalam bahasa gampangnya dalam bentuk dialog seperti ini:

Sekarang pertanyaanya bagaimana Anda bisa mengirimkan data dalam bentuk Plain Old Java Object (POJO) dari satu Activity ke Activity lain melalui intent? Caranya adalah dengan mengubah obyek POJO yang Anda miliki ke dalam bentuk obyek parcelable. Di Android Studio sudah ada fasilitas plugin bernama Android Parcelable Generator untuk memudahkan proses tersebut.