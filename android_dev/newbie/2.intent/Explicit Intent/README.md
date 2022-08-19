# Tujuan
Codelab ini menitikberatkan pada implementasi intent untuk melakukan perpindahan dari activity ke activity lain, dengan atau tidak membawa data. Beberapa bagian dari codelab ini akan menjawab beberapa pertanyaan umum dalam pengembangan aplikasi Android sebagai berikut:

* Bagaimana berpindah dari satu activity ke activity lain?
* Bagaimana berpindah dari satu activity ke activity lain dengan membawa data?
* Menjalankan komponen di aplikasi lain untuk keperluan membuka browser atau melakukan pemanggilan melalui aplikasi telepon bawaan?

Codelab selanjutnya adalah dengan membuat aplikasi yang dapat menerapakan kegunaan intent. Seperti ini tampilannya.

![App_Explisit_Intent]('./../assets/img/FinalAppExplicitIntent.gif)

## Logika Dasar
Berpindah dari satu **Activity** ke **Activity** lain dengan membawa data. **Activity** asal akan mengirimkan data melalui Intent dan **Activity** tujuan akan menerima data yang dikirimkan.

## CodeLab Intent Sederhana
lihat di android studio ya.....


## Bedah Kode

### Register Activity
Kita telah belajar bagaimana membuat suatu activity baru. Di materi sebelumnya, syarat suatu activity haruslah terdaftar pada berkas `AndroidManifest.xml`. Karena menggunakan Android Studio, proses pendaftaran tersebut sudah dilakukan secara otomatis ketika membuat Activity baru.

```xml
<?xml version="1.0" encoding="utf-8"?>
<manifest xmlns:android="http://schemas.android.com/apk/res/android"
    package="com.dicoding.picodiploma.myintentapp">
 
    <application
        android:allowBackup="true"
        android:icon="@mipmap/ic_launcher"
        android:label="@string/app_name"
        android:supportsRtl="true"
        android:theme="@style/AppTheme">
        <activity android:name=".MainActivity">
            <intent-filter>
                <action android:name="android.intent.action.MAIN" />
 
                <category android:name="android.intent.category.LAUNCHER" />
            </intent-filter>
        </activity>
        <activity android:name=".MoveActivity" />
    </application>
 
</manifest>
```

Perhatikan bahwa MoveActivity sudah teregistrasi di AndroidManifest.xml. Sekarang sudah aman jika kita melakukan perpindahan activity dari MainActivity ke MoveActivity.

Jika kita lupa meregistrasikan Activity baru ke dalam berkas AndroidManifest.xml, maka akan terjadi eror seperti ini `"android.content.ActivityNotFoundException:Unable to find explicit activity class."`

### Intent Filter
Berikutnya, perhatikan pada kode dengan tag intent-filter yang ada di dalam AndroidManifest pada bagian MainActivity.

```xml
<activity android:name=".MainActivity">
    <intent-filter>
        <action android:name="android.intent.action.MAIN" />
        <!-- Baris di atas bermakna bahwa MainActivity menjadi entry point ke aplikasi. -->

        <category android:name="android.intent.category.LAUNCHER" />
        <!-- Kode di atas menandakan bahwa MainActivity akan dikategorikan sebagai activity launcher. Ini menandakan bahwa activity ini akan muncul di halaman home screen dalam bentuk launcher. -->

    </intent-filter>
</activity>
```

Intent-filter merupakan mekanisme untuk menentukan bagaimana suatu activity dijalankan oleh Android Runtime (ART) atau Dalvik Virtual Machine (DVM).

### Pindah Activity
```java
// Kotlin
val moveIntent = Intent(this@MainActivity, MoveActivity::class.java)
startActivity(moveIntent)

// Java
Intent moveIntent = new Intent(MainActivity.this, MoveActivity.class);
startActivity(moveIntent);
```
Kita membuat suatu obyek intent dengan cara seperti di atas dengan memberikan context `(this@MainActivity)` dan kelas activity tujuan `(MoveActivity::class.java)` pada konstruktor kelas intent.

![Penjelasan Intent](./assets/img/PenjelasanIntent.png)

Untuk context dapat menggunakan this yang menandakan obyek kelas saat ini. Sedangkan kelas tujuan selalu diakhiri dengan menggunakan class. 

**Context** adalah sebuah kelas yang digunakan untuk mengakses resource dari activity tersebut. anda akan sering membutuhkan context pada latihan-latihan selanjutnya, seperti saat mengambil data dari resource, mengakses SystemService, mendapatkan ApplicationInfo dan lain sebagainya.

LANJUT!!

`startActivity(moveIntent)` metode ini akan menjalankan activity baru tanpa membawa data. Obyek intent yang diinputkan adalah obyek `moveIntent` yang ketika kode ini dijalankan maka akan membuka MoveActivity.

[Context](https://medium.com/swlh/context-and-memory-leaks-in-android-82a39ed33002)

Pada modul ini kita telah berhasil memindahkan satu Activity ke Activity lain dengan tidak membawa data. Pada bagian selanjutnya kita akan membuat suatu Intent yang di dalamnya akan membawa data ke Activity tujuan.