package main

import "fmt"

/*
	Di Go lang itu menerapkan PASS BY VALUE
	* Secara default di Go-Lang semua variable itu di passing by value, bukan by reference
	* Artinya, jika kita mengirim sebuah variable ke dalam function, method atau variable lain, sebenarnya yang dikirim adalah duplikasi valuenya
	Jadi tidak mengubah value asal

	* Pass by Value = valuenya di duplikat
	* Pass by Reference = valuenya pakai value asal
*/

/*
	POINTER
	* Pointer adalah kemampuan membuat reference ke lokasi data di memory yang sama, tanpa menduplikasi data yang sudah ada
	* Sederhananya, dengan kemampuan pinter, kita bisa membuat pass by reference

	? BAGAIMANA CARANYA MENGGUNAKAN POINTER?
	* Untuk membuat sebuah variable dengan nilai pointer ke variable yang lain, kita bisa menggunakan operator (&) diikuti nama variablenya
*/

type Address struct {
	City, Province, Country string
}

func main() {
	address1 := Address{"Subang", "West Java", "Indonesia"}
	address2 := address1
	address3 := &address1 // menggunakan pointer

	address2.City = "Bandung"

	address3.Country = "Japan"

	fmt.Println("Address 1 tidak berubah", address1)
	fmt.Println("Address 2 berubah", address2)
	fmt.Println("Address 3 menggunakan pointer", address3) // address 1 juga ikut berubah, country jadi Japan
	/* Address 1 di-copy ke address 2  */
}
