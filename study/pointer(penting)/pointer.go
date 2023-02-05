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
	* Sederhananya, dengan kemampuan pointer, kita bisa membuat pass by reference

	? BAGAIMANA CARANYA MENGGUNAKAN POINTER?
	* Untuk membuat sebuah variable dengan nilai pointer ke variable yang lain, kita bisa menggunakan operator (&) diikuti nama variablenya
*/

type Address struct {
	City, Province, Country string
}

func main() {
	address1 := Address{"Subang", "West Java", "Indonesia"}
	var address2 *Address = &address1

	// menggunakan pointer
	address3 := &address1             // cara 1
	var address4 *Address = &address1 // cara 2

	address2.City = "Bandung"
	address3.Country = "Japan"
	address4.Province = "Hokkaido"

	fmt.Println("Address 1 tidak berubah", address1)
	// fmt.Println("Address 2 berubah", address2)
	fmt.Println("Address 3 menggunakan pointer", address3) // address 1 juga ikut berubah, country jadi Japan
	/* Address 1 di-copy ke address 2  */
	fmt.Println("Address 4 use operator *", address4)

	/* Operator (*)
	 * Saat kita inisialisaais lagi berdasarkan struct yang sama, hal tersebut tidak mengubah var asalnya artian lain itu di duplikasi
	 * Address 2 yang awalnya pointer ke address 1 memisahkan diri untuk menginisialisasi
	 */

	// address2 = &Address{"Magelang", "Central Java", "Indonesia"}
	// fmt.Println("Address 2", address2) // ini tidak mengubah address 1

	/*
	* Dengan operator * address 1 dipaksa berubah ke address 2 */

	*address2 = Address{"Jogja", "Jogja", "Indonesia"}

	fmt.Println(`address 2 *`, address2)
	fmt.Println(`address 1 ikut address 2`, address1)
	fmt.Println("Address 3 juga berubah", address3)

	/*
		* Function New
		Golang memiliki function new yang bisa digunakan untuk membuat pointer
		Namun function ini hanya mengembalikan pointer ke data kosong artinya tidak ada data awal */

	alamat1 := new(Address) // akan return data kosong

	fmt.Println("Alamat 1", alamat1)
}
