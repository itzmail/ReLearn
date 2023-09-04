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

### Assertion
* Melakukan pengecekan di unit test secara manual menggunakan if else sangatlah menyebalkan
* Apalagi jika result data yang harus di cek itu banyak
* Oleh karena itu, sangat disarankan untuk menggunakan Assertion untuk melakukan pengecekan 
* Sayang Go-Lang tidak menyediakan package untuk assertion, sehingga kita butuh menambahkan library untuk melakukan assertion ini.


#### Package untuk test assertion
* https://github.com/stretchr/testify

* Testitfy memiliki 2 package (assert & require)
* assert => jika gagal memanggil Fail()
* required => jika gagal memanggil FailNow()


### Skip Test
* Kadang dalam keadaan tertentu, kita ingin membatalkan eksekusi unit test
* Di Go-Lang juga kita bisa membatalkan eksekusi unit test jika kita mau
* Untuk membatalkan unit test kita bisa menggunakan function Skip()

### Before and After Test
* Biasanya dalam unit test, kadang kita ingin melakukan sesuatu sebelum dan setelah sebuah unit test dieksekusi
* Jikalau kode yang kita lakukan sebelum dan setelah selalu sama antar unit test function, maka membuat manual di unit test function nya adalah hal yang membosankan dan terlalu banyak kode duplikat jadinya
* Untungnya di Go-Lang terdapat fitur yang bernama testing.M
* Fitur ini bernama Main, dimana digunakan untuk mengatur eksekusi unit test, namun hal ini juga bisa kita gunakan untuk melakukan Before and After di unit test

### SubTest
* Go-Lang mendukung fitur pembuatan function unit test di dalam function unit test
* Fitur ini memang sedikit aneh dan jarang sekali dimiliki di unit test di bahasa pemrograman yang lainnya
* Untuk membuat sub test, kita bisa menggunakan function Run()

#### Menjalankan SubTes
* Jika kita ingin menjalankan hanya salah satu sub test, kita bisa gunakan perintah: `go test -run TestNamaFunction/NamaSubTest`
* Jika kita ingin menjalankan semua sub test, kita bisa gunakan perintah: `go test -run /NamaSubTest`


### Table Test
* Sebelumnya kita sudah belajar tentang sub test
* Jika diperhatikan, sebenarnya dengan sub test, kita bisa membuat test  secara dinamis
* Dan fitur sub test ini, biasa digunakan oleh programmer Go-Lang untuk membuat test dengan konsep table test
* Table test yaitu dimana kita menyediakan data berubah slice yang berisi parameter dan ekspektasi hasil dari unit test
* Lalu slice tersebut kita iterasi menggunakan sub test


```go
func TestTableHelloWorld(t *testing.T) {
	tests := []struct {
		name     string
		request  string
		expected string
	}{
		{
			name:     "Ismail",
			request:  "Ismail",
			expected: "Hello Ismail",
		},
		{
			name:     "Nur",
			request:  "Nur",
			expected: "Hello Nur",
		},
		{
			name:     "Alam",
			request:  "Alam",
			expected: "Hello Alam",
		},
	}

	for _, test := range tests {
		t.Run(test.name, func(t *testing.T) {
			result := HelloWorld(test.request)
			require.Equal(t, test.expected, result)
		})
	}
}
```

### Mock
* Mock adalah object yang sudah kita program dengan ekspektasi tertentu sehingga ketika dipanggil, dia akan menghasilkan data yang sudah kita program diawal
* Mock adalah satu teknik dalam unit testing dimana kita bisa membuat mock object dari suatu object yang memang sulit untuk di testing
* Misal kita ingin membuat unit test, namunt ternyata ada kode program kita yang harus memanggil API Call ke third party service dan belum tentu response nya sesuai dengan apa yang kita mau
* Pada kasus seperti ini, cocok sekali untuk menggunakan mock object

#### Testify Mock
* Untuk membuat mock object, tidak ada fitur bawaan Go-Lang, namun kita bisa menggunakan library testify yang sebelumnya kita gunakan untuk assertion
* Testify mendukung pembuatan mock object, sehingga cocok untuk kita gunakan ketika ingin membuat mock object 
* Namun, perlu diperhatikan, jika desain kode program kita jelek, akan sulit untuk melakukan mocking, jadi pastikan kita melakukan pembuatan desain kode program kita dengan baik
* Mari kita buat contoh kasus

* Agar kode kita mudah untuk di test, disarankan agar membuat kontrak berupa Interface