package main

import (
	"fmt"
)

func main() {
	for i := 0; i < 10; i++ {
		if i == 5 {
			break
			// perulanngan saat i == 5 maka akan berhenti
		}

		fmt.Println("Perulangan ke-", i)
	}

	for i := 10; i >= 0; i-- {
		if i%2 == 0 {
			continue
			// kode di bawah akan diskip
		}

		fmt.Println("Perulangan ke-", i) // Print yang ganjil
	}
}
