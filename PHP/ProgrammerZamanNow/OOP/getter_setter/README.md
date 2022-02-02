## Getter and Setter

#### Encapsulation
* Encapsulation artinya memastikan data sensitif sebuah object tersembunyi dari akses luar
* Hal ini bertujuan agar kita bisa menjaga agar data sebuah object tetap baik dan valid
* Untuk mencapai ini, biasanya kita akan membuat semua properties menggunakan acces modifier private, sehingga tidak bisa diakses atau diubah dari luar
* Agar bisa diubah, kita akan menyediakan function untuk mengubah dan mendapatkan properties tersebut

**Apakah hal ini bawaan dari PHP?**
TIDAK!! ini merupakan best practice

#### Getter and Setter
* Di PHP, proses encapsulation sudah dibuat standarisasinya, dimana kita bisa menggunakan Getter dan Setter method
* Getter adalah function yang dibuat untuk mengambil data field
* Setter ada function untuk mengubah data field

| Tipe Data | Getter Method      | Setter Method         |
|-----------|--------------------|-----------------------|
| boolean   | isXxx(): bool      | setXxx(bool value)    |
| lainnya   | getXxx(): tipeData | setXxx(tipeData value)|
