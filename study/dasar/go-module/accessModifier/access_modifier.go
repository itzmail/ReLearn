package accessModifier

/*
	! Access Modifier

	Intinya variable atau function atau method yang bisa diakses keluar file

	Di golang access modifier hanya 2 macam :
	* Awalan huruf besar diakses keluar
	* Awalan huruf kecil tidak bisa diakses keluar

	! Blank Identifier

	Kadang kita hanya ingin mengakses func init() di package tanpa harus mengeksekusi salah satu function yang ada di package
	Secara default, Go-Lang akan komplen kalau hal ini tidak dijalankan
	* Untuk mengatasi masalah diatas kita bisa kasih (_) sebelum namaPackage ketika melakukan import
*/

var Application string = "Study Golang"

var dev string = "itzmail"

func SayHello(name string) string {
	return "Hello " + name
}

func sayGoodBye(name string) string {
	return "Good bye " + name
}
