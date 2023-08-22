package main

import (
	"fmt"
	"strings"
)

func main() {
	name := "Eko Kurniawan"

	fmt.Println(strings.Contains(name, "Eko")) // Mengecek apakah terdapat sesuatu; contoh terdapat kata eko?; output = true
	fmt.Println(strings.Split(name, " "))      // Memotong string menjadi array

	fmt.Println(strings.ToLower(name))
	fmt.Println(strings.ToUpper(name))
	fmt.Println(strings.Trim("    Eko    ", " "))
	fmt.Println(strings.ReplaceAll("Ismail Ismail Ismail Mantap", "Ismail", "Cerdas"))
}
