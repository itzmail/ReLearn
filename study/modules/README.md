# GO-MODULES

### Apa itu Go Modules?

* Saat kita membuat aplikasi, biasanya kita akan menggunakan library atau dependency dari project lain
* Jadi intinya go modules itu digunakan untuk menginstall aplikasi 3rd party, kayaka kalau di javascript itu ada NPM atau Yarn
* Atau biasanya library orang lain akan kita save di GOPATH directory, namun hal ini akan sulit jika ternyata beberapa aplikasi butuh library yang sama dengan versi yang berbeda

### Membuat Module

* Untuk membuat module baru, kita bisa menggunakan perintah:go mod init 'nama-module'
* Golang akan secara otomatis membuat file go.mod

### Rilis module

* Go lang terintegrasi baik dengan git
* Untuk merilis module, kita hanya perlu membuat Tag di Git