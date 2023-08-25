package main

import (
	"fmt"
	"regexp"
)

/*
	Package ini untuk regeluer expression persis seperti bahasa lainnya
	* Biasa digunakan untuk validasi
*/

func main() {
	var regex *regexp.Regexp = regexp.MustCompile("e([a-z])o")

	fmt.Println(regex.MatchString("eko")) // true
	fmt.Println(regex.MatchString("eDo")) // false, karena D huruf kapital, aturan huruf kecil

	fmt.Println(regex.FindAllString("eko, edo, eto, eki, empu", -1)) // -1 mencari semuanya, > 0 terbatas
}
