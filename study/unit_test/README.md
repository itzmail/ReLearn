# Unit Test

### Apa itu Unit Test?

Unit Test adalah pengujian aplikasi per unit. iyap. jadi yang di-uji scopenya lebih kecil

_Pelajari Pyramid Test_

Kalau dari pyramid test, kita tahu ada => UI, Service, Unit. Unit Paling murah karena tidak butuh resource banyak, UI lebih mahal karena butuh resource banyak

* Unit Test fokus menguji bagian kode program terkecil
* Unit test biasanya dibuat kecil dan cepat. Oleh karena itu baiasanya kode unit test lebih banyak dari kode aslinya
* Unit test bisa digunakan sebagai cara untuk meningkatkan kualitas kode


### Testing Package
* Di bahasa pemgroaman lain, baiasa untuk implementasi unit test, butuh library.
* Kalau di golang sudah ada, built in
* Pakai perintah go saja untuk unit test
* https://golang.org/pkg/testing/

#### testing.T
* Go lang menyediakan sebuah struct yang bernama testing.T
* Strutch ini digunakan untuk unit test di Go-Lang


#### testing.M
* testing ini digunakan Go-Lang untuk mengatur life-cycle


#### testting.B
* Untuk mengatur benchmarking kode


### Aturan File Test
* Go-Lang memiliki aturan cara membuat file khusus untuk unit test
* Untuk membuat file unit test, kita harus menggunakan akhiran "_test"
* Jadi misal kita membuat file "hello_world.go", artinya untuk membuat unit_testnya kita harus membuat "hello_world_test.go"

### Aturan Function Unit Test
* Nama function untuk unit test harus diawali dengan nama "Test"
* Misal, func HelloWorld => Unit testnya func TestHelloWorld