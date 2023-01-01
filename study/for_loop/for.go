package main

import (
	"fmt"
)

func main() {
	counter := 1

	/* go version go1.19.4 windows/amd64
	* Perulangan hanya for loop */

	// Bentuk dasarnya
	for counter <= 10 {
		fmt.Println("Perulangan ke-", counter)
		counter++
	}

	// Bentuk Ringkas

	for countdown := 10; countdown >= 0; countdown-- {
		fmt.Println("Hitung mundur", countdown)
	}
}
