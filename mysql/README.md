## Belajar MySQl

Model mysql ini hampir sama seperti model excel dimana kita belajar mengatur data dengan bantuan tabel

**Tetapi yang membedakan adalah MySQl di setiap kolomnya tidak boleh memiliki tipe data yang berbeda**

## Syntax Umum
* `show databases;` = Digunakan untuk melihat seluruh databases
* `create nama_database;` = Digunakan untuk membuat database baru
* `drop database nama_database;` = Digunakan untuk menghapus database
* `use nama_database;` = Digunakan untuk memilih database
* `show tables` = Digunakan untuk melihat table di database itu

### Tipe Data MySQL
1. Tipe Data Number

Hampir sama seperti di Java ada 2 macam yang pertama
  * Integer
  1. TINYINT
  2. SMALLINT
  3. MEDIUMINT
  4. INT 
  5. BIGINT

  perlu diperhatikan di tipe data Integer ini ada tipe data yang *signed* dan *unsigned*.
  untuk unsigned itu tipe data yang tidak bisa negatif.

  * Floating Point
  1. Float 
  2. Double

Ada juga selain itu ada tipe data DECIMAL. Ini tipe data number khusus yang bisa ditentukan jumlah precision(panjang) dan scale nya

  contoh : DECIMAL(5, 2) => artinya angka ini dapat menampung sebanyak 5 angka dan terdapat 2 angka dari belakang jadi hasilnya.
  ~ min = -999.99;
  ~ max = 999.99;

  @ Number ATtribute
   $ Type(N) => tipe dari Tipe data Number contoh TINYINT(3) => jadi bisa menampung 3 angka dengan jenis TINYINT
   $ ZEROFILL => contoh aja ya... INT(3) ZEROFILL, => 7 jadi nanti ditampilkan 007

2. Tipe Data Text

  * CHAR 
  langsung singkat aja jadi kalau kita menggunakan tipe data Char itu meskipun kita isi string kosong maka akan diisi berupa spasi jadi size file tetap sama

  * VARCHAR
  bedan kalau kita pakai tipe data Varchar, jadi varchar sifatnya dinamis. contoh => VARCHAR(4) => maka akan menampilkan charater maks 4 dan bila tidak kita isi kosong atau string kosong maka akan diisi string kosong juga

  * TEXT
  Pada tipe data TEXT ini masih dibagi lagi :
    1. TINYTEXT
    2. TEXT
    3. MEDIUMTEXT
    4. LONGTEXT

    untuk sizenya bisa dilihat di videonya PZN

  * ENUM
  
  ENUM adalah tipe data STRING isinya hanya sesuatu yang sudah kita tentukan
  contoh :

  ~ ENUM('Pria', 'Wanita'), artinya kita hanya bisa menerima data 'Pria' atua 'wanita'

  * Date and Time

  Tipe data ini nantinya bisa kita manipulasi lewat database

  ~ Jenis tipe data date and Time
  1. DATE => YYYY-MM-DD
  2. DATETIME => YYYY-MM-DD HH:MM:SS
  3. TIMESTAMP => YYYY-MM-DD HH:MM:SS 
  4. TIME => HH:MM:SS 
  5. YEAR => YYYY

  * Boolean

  Tipe data ini tipe data kebenaran, sama seperti bahasa pemrograman lainnya

  * Tipe data lainnya.....

  Tipe data lainnya bisa dilihat di (link ini)['https://dev.mysql.com/doc/refman/8.0/en/data-types.html'']


## Table

  * Data biasanya disimpan dalam table
  * Tiap table biasanya menyimpan satu jenis database
  * Sebelum kita bisa memasukkan data ke tabel, kita wajib terlebih dahulu membuat tablenya terlebih dahulu
  * Dan tiap table yang kita buat, wajib ditentukan kolom-kolomnya dan tipe data tiap kolomnya
  * Kita juga bisa mengubah tabel yang sudah terlanjur dibuat, seperti CRUD pada tabel

### Sebelum Belajar table

Kita belajar dulu tentang **STORAGE ENGINE**

## Storage Engine 

* storage engine adalah engine yang berguna untuk melakukan pengolahan database
* Saat ini, yang popular adalah InnoDB
* untuk melihat storage engine yang kita punya, kita cukup ketik `show engines;`

### lanjut belajar Table

untuk melihat table pada database `show tables;`

* Membuat table
```mysql
CREATE TABLE barang(
  id INT,
  nama VARCHAR(100),
  harga INT,
  jumlah INT
) ENGINE = InnoDB;
```

* Melihat struktur table

`DESCRIBE atau DESC nama_table;`

  ~ Kalau melihat struktur bagaimana cara kita buat table bisa gunakan perintah

  `show create table nama_table;`

* Mengubah Table (CRUD);
```mysql
ALTER TABLE nama_database
  ADD COLUMN deskripsi TEXT; // Untuk menambah kolom
  DROP COLUMN salah; // Menghapus kolom
  MODIFY nama VARCHAR(200) AFTER deskripsi; // Edit Kolom, AFTER itu perintah tata letak column
  MODIFY nama VARCHAR(200) FIRST;
  CHANGE old_name new_name TIPE_DATANYA; // untuk rename column
```

## Null Value
* Null adalah nilai ketika kita tidak mengisi data ke dalam kolom
* Jika ktia tidak ingin menerima nilai NULL, Kita bisa menambahkan NOT NULL ketika pembuatan kolom
  * contoh
  ```mysql
  ALTER TABLE nama_table
    MODIFY nama_kolom tipe_kolom NOT NULL; bila kita ingin membuat kolom tersebut tidak boleh null
  ```
