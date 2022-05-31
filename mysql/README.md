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

## Default Value
* Saat ktia menyimpan data ke dalam tabel, lalu ktia hanya menyimpan beberapa kolom (tidak semuanya), kolom yang tidak ktia beri nilai secara default nilainya dalah NULL
* Jika kita ingin mengubah default value nya, kita bisa menambhakan perintan `DEFAULT nilai`
* Khusus tipe data DATETIME atau TIMESTAMP. Jika ktia ingin menggunakan default value dengan nilai waktu saat ini, kita bisa gunakan kata kunci `CURRENT_TIMESTAMP`
  * contoh
  ```mysql
  ALTER TABLE barang
    MODIFY jumlah INT NOT NULL DEFAULT 0;

  ALTER TABLE barang
    ADD waktu dibuat TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP;
  ```

## Membuat Ulang table

```mysql
 TRUNCATE nama_table;
```

## Menghapus Table

```mysql
 DROP TABLE nama_table;
```

## Insert Data 
* Pertama kita buat table dulu
* Kita bisa menyebutkan mana yang ingin kita isi, jika kita tidak menyebutkan kolomnya artinya kolom tersebut tidak akan kita isi, dan secara otomatis kolom yang tidak kit aisi, nilainya kecuali memiliki **DEFAULT VALUE**
* Perintah untuk memasukkan data ke table => `INSERT INTO nama tables`

  * Memasukkan beberapa data
  INSERT INTO products(id, name, price, quantity) VALUES ('diisi sesuai parameternya'), ('product nya mau apa'), ('mantap jiwa')

## Select data
* Syntax :
  * Ambil semuanya => `SELECT * FROM nama_table;`
  * Ambil tiap kolom => `SELECT id, name, price, quantity FROM nama_table;`

## Primary Key
  * Saat kita membuat table, idealnya tiap table memiliki Primary Key
  * Primary key adalah sebuah kolom yang kita tunjuk sebagai id dari tabel tersebut
  * Primary Key adalah identitas untuk tiap baris data di dalam tabel
  * Primary Key harus unik, **tidak boleh ada data dengan primary key yang sama**
  * Kita bisa menunjuk kolom yang akan kita jadikan primary key

    ### Primary Key di Multiple Column
    * Kita bisa membuat primary key dengan kombinasi beberapa kolom
    * Namun disarankan untuk tetap menggunakan satu kolom ketika membuat primary key
    * Kecuali ada kasus khusus, seperti membuat table yang berelasi `MANY TO MANY` 

      #### Cara membuat Primary Key
      ```mysql
      CREATE TABLE products (
        id VARCHAR(10) NOT NULL,
        name VARCHAR(100) NOT NULL,
        description TEXT,
        price INT UNSIGNED NOT NULL,
        quantity INT UNSIGNED NOT NULL DEFAULT 0,
        created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        PRIMARY KEY (id) /
      );

      artinya kita buat id sebagai primary key
      ```
      #### Kasus kalau table sudah diubah pakai 
      ```mysql
        ALTER TABLE products ADD PRIMARY KEY (id);
      ```

  Karena kita menjadikan id sebagai Primary Key artinya ktia tidak bisa menduplikat data yang sama

## Where Clause
  WHERE ini digunakan untuk mengambil data secara spesifik

  * Syntax
    ```mysql
      SELECT id, name, price, quantity
      FROM products
      WHERE quantity = 0;
    ```
## Update Data
* Untuk mengupdate data gunakan perintah `UPDATE`
* Kita harus memberi tahu data mana yang akan di update dengan WHERE Clause
* Hati-hati ketika meng-update data di table, jika sampai WHERE clause nya salah, bisa-bisa kita malah meng-update seluruh data di table 
* Untuk update, kita harus beritahu, kolom mana yang akan di update
  * ```mysql
     UPDATE nama_table
     SET category = 'Makanan',
         description = 'Mie Ayam Original + Mantap Jiwa'
     WHERE id = 'P0001';
  ```
  * Mengubah Dengan value di Kolom
    UPDATE products
    SET price = price + 5000
    WHERE id = 'p004'

## Menghapus Data
DELETE 
FROM products
WHERE id = "p009";

## Alias
* MySQL memiliki fitur untuk melakukan alias untuk kolom dan tabel, jadi kita bisa menuliskan script SQL secara singkat
* Materi ini akan dipakai ketikas sudah mempelajari tentang JOIN, maka fitur alis untuk tabel sangat berguna sekali
* Judul kolomnya akan berubah

```mysql
SELECT id as 'Kode',
       name as 'Nama'
FROM products;
```
  * Alias untuk table
  ```mysql
  SELECT p.id as 'Kode',
         p. name as 'Nama'
  FROM products AS p;
  ```

## Where Operator
* Seperti dibahasa pemrogramman
* Operator Perbandingan

## Operator AND dan OR 
* AND dan OR digunakan untuk menggabungkan beberapa dua operator
* Sama seperti di bahasa pemrogramman
* Kalau kita ingin membuat kondisi dimana AND dan OR ditulis dalam satu kalimat, maka yang akan di dahulukan biasanya AND dulu baru OR, tetapi kalau mau OR yang didahulukan maka beri kurung pada kondisi tersebut

## LIKE Operator
* LIKE operator adalah operator yang bisa kita gunakan untuk mencari sebagian data dalam string
* Ini cocok sekali kita hanya ingin mencari sebagian kata dalam Stirng
* Namun perlu diingat, operasi LIKE itu sangat lambat, oleh karena itu, tidak disarankan jika datanya sudah terlalu besar di tabel,
* Opearasi LIKE tidak case sensitive, jadi huruf besar dan kecil tidak akan berpaengaruh
  * Hasil Opator LIKE
  ~ LIKE "b%" => String dengan awalan b,
  ~ LIKE "%a" => String dengan akhiran a,
  ~ LIKE "%eko%" => String berisi eko
  ~ NOT LIKE => Tidak LIKE

## NULL Operator
* IS NULL mencari apakah ada data yang berisi NULL
* IS NOT NULL mencari data, apakah ada data yang berisi tidak NULL

## BETWEEN Opeartor 
* BETWEEN Operator adalah opartor interval dimana kita biasbuat interval dari awal hingga akhiran
* NOT BETWEEN Operator adalah kebalikannya atau diluar interval
* Contoh syntax => ```mysql SELECT * FROM products WHERE price BETWEEN 100 AND 200```;

## IN Operator
* Operator IN adalah operator untuk melakukan pencarian sebuah kolom dengan beberapa nilai.
* Misal kita ingin mencari products dengan category Makanan atau Minuman, maka kita bisa menggunakan IN
  * Contoh Syntax "SELECT * FROM products WHERE category IN ('Makanan', 'Minuman');"

## Order By Clause
* Untuk mengurutkan data ketika kita menggunakan perintah SQL SELECT, ktia bisa menambahkan ORDER BY caluse
* ORDER BY clause digunakan untuk mengurutkan data berdasarkan kolom yang dipilih dan jeis urutan (ASCending atau DESCending)
* Kita juga bisa mengurutkan tidak hanya terhadap satu kolom, tapi beberapa kolom
  * Syntax "SELECT * FROM products ORDER BY price ASC, id DESC;"
  * default nya bila kita tidak kasih asc atau desc, itu defaultnya desc

## Limit Clause
* Mengambil seluruh data di tabel bukanlah pilihan bijak, apalafi jika datanya sudah banyak sekali
* Kita bisa membatasi jumlah data yang diambil dalam 'SQL SELECT' dengan LIMIT caluse
* Selain membatasi jumlah data, kita juga bisa mengs-skip sejumlah data yang tidak ingin kita lihat
* LIMIT biasanya diguanakan saat melakukan paging di aplikasi kita
  * Syntax 
    ```mysql
    SELECT * FROM products WHERE price > 0 ORDER BY price LIMIT 2, 2;
    ```
    * Limit diatas memiliki 2 parameter, parameter satu untuk mengambil 2 data sedangkan param dua untuk menskip 2 data atau sebagai paging nya, jadi kita menampilkan itu di halaman selanjutanya
