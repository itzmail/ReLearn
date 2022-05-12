# Apa itu Object Oriented Programming?

* OOP adaalh sudut pandang bahasa pemrogramman yang berkonsep "objek"
* Ada banyak sudut pandang bahasa pemrograman, namun OOP adalah sangat populer saat ini.
* Ada beberapa istilah yang perlu dimengerti dalam OOP, yaitu: Object dan Class

## Apa itu OBject?
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