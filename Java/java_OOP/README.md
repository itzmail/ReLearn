# Apa itu Object Oriented Programming?

* OOP adaalh sudut pandang bahasa pemrogramman yang berkonsep "objek"
* Ada banyak sudut pandang bahasa pemrograman, namun OOP adalah sangat populer saat ini.
* Ada beberapa istilah yang perlu dimengerti dalam OOP, yaitu: Object dan Class

## Apa itu Object?
* Object adalah data yang berisi properties/attributes
* Semua data yang bukan data Primitive itu adalah Object

## Apa itu Class? 

Hampir sama dengan PHP
* Class adalah blueprint, prototype atau cetakan untuk membuat Object
* Class berisikan deklarasi semua properties dan functions yang dimiliki oleh Object
* Setiap Object selalu dibuat dari Class, tidak bisa diluar itu dan
* Sebuah Class bisa membuat Object tanpa batas

### Cara membuat Class
* Kita tinggal tulis class seperti contoh diatas
* Penamaan Class tidal boleh ada Spasi dan CamelCase
 
contoh lihat di file `./Person.java` 

### Cara Membuat Object
* Object adalah hasil intansiasi dari sebuah class
* Untuk membuat object kita bisa menggunakan kata kunci new, dan diikuti dengan nama Class dan kurung()

contoh lihat di file `./PersonApp.java`


## Field
* Fields/Properties/Attributes adalah data yang bisa kita sisipkan di dalam Object
* Namun sebelum kita bisa memasukkan data di fields, kita harus mendeklarasikan data apa saja yang dimiliki object tersebut di dalam deklarasi class-nya
* Membuat field sama seperti membuat variable, namun ditempatkan di block class

contoh lihat di file `./Person.java` 

### Memanipulasi Field
* Field yang bisa kita manipulasi field yang bukan final
* Untuk memanipulasi field, sama seperti cara  pada variable
* Untuk mengakses field, ktita butuh kata kunci .(titik) setelah nama object dan diikuti nama fieldsnya

## Method
* Selain menambah field kita juga bisa menambahkan method ke object
* Sama seperti method biasanya, kita juga bisa menambahkan return value, parameter dan method overloading di method yang ada di dalam block class
* Untuk mengakses method tersebut kita bisa menggunakan tanda .(titik) dan diikuti nama methodnya

contoh lihat di file `./Person.java`

# Life Cycle

## Constructor
* Constructor adalah method yang pertama kali dijalankan
* Nama constructor harus sama dengan nama class, dant tidak membutuhkan kata kunci void atau return value

contoh lihat di file `./Person.java`

### Constructor overloading
* Ssama seperti di method, di constructor pun kita bisa melakukan  overloading
* Kita bisa membuat constructor lebih dari satu, dengan syarat tipe data parameter harus berbeda, atau jumlah parameter harus berbeda

### Memanggil Constructor lain
* Constructor bisa memanggil constructor lain
* Hal ini memudahkan saat kita butuh menginisialisasi data dengan berbagai kemungkinan
* Cara untuk memanggil constructor lain, kita hanya perlu memanggilnya seperti memanggil method, namun dengan kata kunci `this`

## Variable Shadowing
* Variable shadowing adalah kejadian ketika kita membuat nama variable dengan nama yang sama di scope yang menutupi variable dnegan nama yang sama di scope diatasnya
* Ini bisa terjadi seperti kita membuat nama parameter di method sama dengan nama field di class
* Saat terjadi kejadian ini, maka secara otomatis variable di scope diatasnya tidak bisa diakses

## This Keyword
* Saat kiat membuat kode di dalam block constructor atau method di dalam class, kita bisa menggunakan kata kunci this untuk mengakses object saat ini.
* `this` juga tidak hanya  digunakan untuk mengakses field milik object saat ini, namun juga bisa digunakan untuk mengakses method
* `this` bisa digunakan untuk mengatasi masalah _variable shadowing_

## Inheritance
* Inheritance adalah kemampuan untuk menurunkan ke sebuah class ke class lain
* Di java class Child hanya boleh punya 1 Parent dan 1 parent boleh punya banyak child

## Method Overriding

**Ingat!!**
* _method overloading itu mendeklarasikan method dengan nama yang sama di class yang sama_
* _method overriding itu mendekalarsikan method di child class dengan nama yang sama di parent class-nya_
* Bisa lihat di parent `./Manager.java` dan childnya `./VicePresident.java`

## Super keyword
* Super keyword digunakan saat kita mengakses field (object, method) pada parent class
lihat di file `./Shape.java`

### Super Constructor
* Kata kunci Constructor juga bisa untuk mengakses constructor pada parent
* Jika sebuah class parent tidak memiliki constructor yang tidak ada parameter-nya (tidak memiliki default constructor), maka class child wajib mengakses constructor class parent tersebut
  * Contoh bisa di lihat:
  * Parent `./Manager.java`
  * Child `./VicePresident.java`
  * Penerapan `./ManagerApp.java`

## Object Class
* Di java, setiap class yang kita buat secara otomatis adalah turunan dari class Object,
* Walaupun tidak secara langsung kita eksplisit menyebutkan extends Object, tapi secara otomatis Java akan membuat class kita extends Object
* Bisa dikatakan class Object adalah superclass atau *root* untuk semua class yang ada di Java
* Bisa lihat di doc tentang method-method di Object Java

## Polymorphism
* Polymorphism berasal dari bahasa Yunani yang berarti banyak bentuk
* Dalam OOP, Polymorphism adalah kemampuan sebuah object berubah bentuk menjadi bentuk lain
* Polymorphism erat hubungannya dengan Inheritance (pewarisan)
  * Parent `./Employee.java`
  * Parent2 `./Manager.java`
  * Parent3 `./VicePresident.java`
  * applikasi `./Polymorphism.java`

## Type Check & Casts (Konfersi)
* Sebelumnya kita sudah tahu cara konversi tipe data (_casts_) di materi 'tipe data primitif'
* Casts juga bisa digunakan untuk tipe data buka primitif
* Namun agar aman, sebelum melakukan casts, pastikan kita melakukan type check (pengecekan tipe data), dengan menggunakan kata kunci instanceof
* Hasil operator instanceof adalah boolean, true jika tipe data sesuai, false jika tidak sesuai
  * Applikasi Casts lihat di `./Polymorphism.java` di method sayHello()

## Variable Hiding
* Variable hiding merupakan masalah yang terjadi ketika kita membuat nama field sama di class child dengan nama field di class parent,
  * Semisal ktia buat field name di parent dan field name di child dengan nama field yang sama maka di class child terjadi _variable hiding_
* Tidak ada yang namanya field overriding, ketika kita buat ulang nama field di class class, itu berari variable hiding
* Untuk mengatasi variable hiding dan method overriding adalah ketika sebuah **object di casts**
* Saat object di casts, method akan tetap mengakses method overriding, namun variable akan mengakses variable yang ada di class nya
  * Aplikasi ada di file `Parent.java` dan `ParentApp.java`

## Package
* Saat kita membuat aplikasi, bisa dipastikan kita akan banyak sekali membuat class
* Jika class terlalau banyak, kadang akan menylitkan kita untuk mencari atau mengklasifikasikan jenis-jenis class
* Java memiliki fitur package, yaitu fitur mirip folder/direktori, dimana kita bisa menyimpan class-class kita di dalam package dan ini bisa _nested_
* Ketika kita menyimpan class di dalam package, maka diatas file Java nya, kita wajib menyebutkan nama package nya
  * Contoh-nya ada di pacage `programmer.zaman.now`

## Access Modifier
* Acces modifier adalah kemampuan membuat class, field, method dan constructor dapat diakses dari mana saja
* Sebelumny kita sudah pakai ini yaitu _public_ dan _default_ atau _no modifier_
* Untuk tabel access level bisa dilihat divideo PZN Java OOP materi menit ke 20

### Public Class
* Saat kita membuat public class, kita hanya bisa membuat 1 public class di 1 file java
* Selain itu, nama public class harus sama dengan nama file
  * Contoh bisa dilihat di 
    * package programmer.zaman.now.data file `Products.java`
    * package programmer.zaman.now.data file `ProductsApp.java`

## Import 
* Import adalah kemampuan untuk menggunakan calass yang berada di package yang berbeda
* Syarat class yang bisa digunakan jika package nya berbeda adalah class yang harus public
  * Default Import 
    * Semua class yang ada di pacakge java.lang sudah auto import, jadi kita tidak perlu melakukan import secara manual
    * Contoh class String, Integer, dll terdapat di pacakage java.lang. Oleh karena itu, kita tidak perlu meng-import nya secara manual

## Abstract Class
* Saat kita membuat class, kita bisa menjadikan sebuah class sebagai abstract class.
* Abstract class artinya, class tersebut tidak bisa dibuat sebagai object secara langsung, **hanya bisa diturunkan**
* Untuk membuat sebuah class menjadi abstract, kita bisa menggunakan kata kunci abstract sebelum kata kunci class
  * Contoh Penerapan => 1. abstractClass `package programmer.zaman.now.data.Location;`
                        2. Child Class `package programmer.zaman.now.data.City`
                        3. Application `package programmer.zaman.now.application.LocationApp`

## Abstract Method
* Saat kita membuat class yang abstract, kitabisa membuat abstract method juga di dalam class abstract tersebut
* Saat kita membuat sebuah abstract method, kita tidak boleh membuat block method untuk method tersebut
* Artinya, abstract method wajib di override di class child
* Abstract method tidak boleh meiliki access modifier private;
* Jadi bila kita ingin membuat class child menerapakan method yang kita buah, maka kita bisa buat method tersebut jadi abstract 