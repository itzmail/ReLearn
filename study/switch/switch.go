package main

import (
	"fmt"
)

func main() {
	name := "Ismail"

	switch name {
	case "Mantap":
		fmt.Println("Hello Mantap")
	case "Ismail":
		fmt.Println("Hello Ismail")
	default:
		fmt.Println("Nama undetected")
	}

	// Versi Short Statement
	switch length := len(name); length > 5 {
	case true:
		fmt.Println("Nama Terlalu Panjang")
	case false:
		fmt.Println("Nama Sudah Benar")
	}

	// Versi Ribet
	// length := len(name)
	// switch {
	// case length > 5 :
	//   fmt.Println("Nama terlalu panjang")
	// case length < 5 :
	//   fmt.Println("Nama Mas juang kampungan")
	// }

	// Switch tanpa kondisi
}
