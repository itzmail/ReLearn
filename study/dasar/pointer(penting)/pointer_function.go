package main

import "fmt"

/*
	! Pointer di Function

	* Saat kita membuat parameter di func, secara default adalah pass by value, artinya data akan di copy lalu dikirim ke function tersebut
	* Oleh karena itu, jika kita mengubah data di dalam function, data yang aslinya tidak akan pernah berubah
	* Hal ini membuat variable menjadi aman
	* Namun kadang kita ingin membuat function yang bisa mengubah data asli parameter tersebut
	* Untuk melakukan ini, kita juga bisa menggunakan pointer di function

	? Untuk menjadikab sebuah parameter sebagai pointer, kita bisa menggunakan operator * di parameternya
*/

type Address struct {
	City, Province, Country string
}

func ChangeCountryToINdonesia(address *Address) {
	address.Country = "Indonesia"
}

func main() {
	alamat := Address{Country: "", City: "Subang", Province: "West Java"}

	var alamatPointer *Address = &alamat
	ChangeCountryToINdonesia(alamatPointer)
	fmt.Println(alamat)
}
