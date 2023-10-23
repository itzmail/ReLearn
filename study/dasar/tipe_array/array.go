package main

import "fmt"

func main() {

	// inisiasi dulu
	var names [3]string

	names[0] = "Ismail"
	names[1] = "Nur"

	// deklarasi langsung
	// var values = [3]int{
	// 	96, 97, 98,
	// }

	// panjang array len()
	// fmt.Println(len(values))

	// Kalau kita tidak tahu jumlah index pada array
	// kasih ...
	var dynmaicValues = [...]any{
		"ismail",
		2,
		30.0,
	}

	fmt.Println(dynmaicValues)
}
