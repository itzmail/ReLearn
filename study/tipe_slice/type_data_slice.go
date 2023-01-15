package main

import "fmt"

func main() {
	// Slice itu potongan dari array
	// Tipe Data Slice memiliki 3 data, yaitu pointer, length, dan capacity
	// Pointer adalah penunjuk data pertama di array para slice
	// Length adalah panjang dari slice, dan
	// Capacity adalah kapasitas dari slice, dimana length tidak boleh lebih dari capacity

	months := [...]string{
		"Januari",
		"Februari",
		"Maret",
		"April",
		"Mei",
		"Juni",
		"Juli",
		"Agustus",
		"September",
		"Oktober",
		"November",
		"Desember",
	}

	slice := months[4:9] // dipotong dimulai dari Mei sampai September

	// fmt.Println("Old Slice", slice)
	// fmt.Println("Length : ", len(slice))
	// fmt.Println("Capacity : ", cap(slice))

	months[5] = "Diubah"
	slice[0] = "Meikarta"

	// fmt.Println("New Slice", slice)

	// Append
	days := [7]string{"Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Ahad"}

	daySlice1 := days[5:] // artinya dipotong dari index 5 sampai terakhir

	fmt.Println("Sebelum diubah : ", days)
	fmt.Println("Day Slice 1 : ", daySlice1)

	// ketika ngubah daySlice1 maka array asal juga berubah, karena tipe data slice berkaitan array
	daySlice1[0] = "Sabtu Baru"
	daySlice1[1] = "Ahad Baru"
	fmt.Println("Setelah diubah : ", days)

	daySlice2 := append(daySlice1, "Libur Baru") // menambah data setelah data terakhir
	// daySlice2[0] = "Ups"
	fmt.Println("Day Slice 2 : ", daySlice2)

	// Kalau array tersebut tidak bisa menampung, maka akan dibuat array baru

	// Make
	// Buat slice
	// newSlice := make([]string, 2, 5)
	// newSlice[0] = "Ismail"
	// newSlice[1] = "Alam"

	// fmt.Println(newSlice)
	// fmt.Println(len(newSlice))
	// fmt.Println(cap(newSlice))

	// Copy
	// ketika copy slice harus diperhatikan panjang yang dicopy
	// copySlice := make([]string, len(newSlice), cap(newSlice))
	// copy(copySlice, newSlice)
	// fmt.Println(copySlice)

	// Slice vs array
	// iniArray := [...]int{1, 2, 3, 4, 5} // kalau ngga tahu jumlah pastinya maka ini array
	// iniJugaArray := [5]int{1, 2, 3, 4, 5}
	// iniSlice := []int{1, 2, 3, 4, 5} // kalau kosong gini maka slice

	// fmt.Println(iniArray)
	// fmt.Println(iniSlice)
	// fmt.Println(iniJugaArray)
}
