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


### Menjalankan Test

```shell
-- Menjalankan semua file _test di folder root
go test ./...

-- Menjalankan di folder test
-- bisa sama melihat function yang di test
go test -v

-- Menjalankan untuk func tertentu
go test -v -run=TestNamaFunction
```

### Menggagalkan Test

* Mengagalkan unit test menggunakan panic bukanlah bagus, karena ketika panic test selanjutnya tidak di jalankankan
* Go-Lang sendiri sudah menyediakan cara untuk menggagalkan unit test menggunakanan testting.T
* Terdapat function Fail(), FailNow(), dan Fatal() jika kita ingin mengagalkan unit test

* t.Fail() dan t.FailNow()
* t.Fail() Menggagalkan unit test, namun tetap melanjutkan eksekusi unit test. Namun diakhir ketika selesai, maka unit test tersebut dianggap gagal
* t.FailNow(), akan menggagalkan unit test saat ini juga, tanpa melanjutkan eksekusi unit test

* t.Error(args...) => function lebih seperti melakukan log print(error), namun setelah melakukan log error, dia akan secara otomatis memanggil function Fail(), sehingga mengakibatkan unit test dianggap gagal
* Namun karena hanya memanggil Fail(), artinya eksekusi unit test akan tetap berjalan sampai selesai
* t.Fatal(args...) => mirip dengan Error(), hanya saja, setelah melakukan log error, dia akan memanggil FailNow(), sehingga mengakibatkan eksekusi unit test berhenti